import os

# from langchain.chat_models import ChatOpenAI
from langchain.llms import Cohere
from langchain.document_loaders import PyPDFLoader
from langchain.embeddings import CohereEmbeddings
from langchain.prompts import ChatPromptTemplate
from langchain.pydantic_v1 import BaseModel
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import (
    RunnableLambda,
    RunnableParallel,
    RunnablePassthrough,
)
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import SupabaseVectorStore
from supabase.client import Client, create_client

from env import COHERE_API_KEY, COHERE_MODEL, COHERE_EMBEDDINGS, TEMPERATURE, SUPABASE_URL, SUPABASE_SERVICE_KEY, CHUNK_SIZE, CHUNK_OVERLAP

class Question(BaseModel):
    __root__: str

supabase_client: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)
TABLE_NAME = "documents"
FUNC_NAME = "match_documents"

# Embedder
embeddings = CohereEmbeddings(cohere_api_key=COHERE_API_KEY, model = COHERE_EMBEDDINGS, truncate="END")

# Read from Supabase
vectorstore = SupabaseVectorStore(
    client=supabase_client,
    embedding=embeddings,
    table_name=TABLE_NAME,
    query_name=FUNC_NAME,
)
retriever = vectorstore.as_retriever()

# RAG prompt
template = """Answer the question based only on the following context:
{context}
Question: {question}
"""
prompt = ChatPromptTemplate.from_template(template)

# RAG
model = Cohere(cohere_api_key=COHERE_API_KEY, model=COHERE_MODEL, temperature=TEMPERATURE)
chain = (
    RunnableParallel({"context": retriever, "question": RunnablePassthrough()})
    | prompt
    | model
    | StrOutputParser()
)
chain = chain.with_types(input_type=Question)

def _ingest(url: str) -> dict:
    # Load docs
    loader = PyPDFLoader(url)
    # loader = TextLoader("../../modules/state_of_the_union.txt")
    data = loader.load()

    # Split docs
    print("Splitting documents")
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=CHUNK_SIZE, chunk_overlap=CHUNK_OVERLAP)
    # text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    docs = text_splitter.split_documents(data)

    # Insert the documents in Supabase
    _ = SupabaseVectorStore.from_documents(
        docs,
        embeddings,
        client=supabase_client,
        table_name=TABLE_NAME,
        query_name=FUNC_NAME,
        chunk_size=CHUNK_SIZE,
    )

    return {}

ingest = RunnableLambda(_ingest)

def _query(query: str, k: int = 20):
    results = retriever.similarity_search(
        query=query,
        k=k,
    )
    return results

query = RunnableLambda(_query)

