# Harbor.ed

Learn more on our [Devpost](https://devpost.com/software/harbor-ed)!


## Technologies Used
- [https://www.mongodb.com/products/platform/atlas-vector-search](Mongo DB Atlas as Vector DB)


## How We Made It?

...

## Langchain (RAG)

We used Langchain to integrate Cohere's LLM and Embeddings with our application. To supplement our application with a customized knowledge base, we used MongoDB Atlas as a vector database. We then wrote a microserver with FastAPI.

### Configure MongoDB Atlas (Vector Search)
```
# install dependencies
pip install -U langchain-cli

cd rag-mongo
python setup.py install

# seed vector db (Mongo Atlas)
source setup-exports.sh 
python ingest.py

# build docker image
docker build . -t rag

```

Add a *default* search index for **Collection** (using JSON editor)l:
```
 {
   "mappings": {
     "dynamic": true,
     "fields": {
       "embedding": {
         "dimensions": 1536,
         "similarity": "cosine",
         "type": "knnVector"
       }
     }
   }
 }
 ```


### API Development (FastAPI)
```
cd langchain
source setup-exports.sh 
python app/server.py
```



## Repo Structure
<!-- Table -->
| Directory | Description |
| --- | --- |
| `langchain/rag-mongo` | Langchain RAG library using Cohere's LLM/Embeddings and MongoDB |
| `langchain/ingest.py` | Ingests data into MongoDB Atlas |
| `langchain/app`       | FastAPI for our application |
| `server`              | Python backend for Web UI with facial recognization capabilities |
| `ui`                  | Frontend Web UI using React and Three.js |

