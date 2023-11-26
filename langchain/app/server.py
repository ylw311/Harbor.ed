from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes

app = FastAPI()


@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/docs")

# Import rag-mongo chain and ingest
from rag_mongo import chain as rag_mongo_chain
from rag_mongo import ingest as rag_mongo_ingest

add_routes(app, rag_mongo_chain, path="/rag-mongo")
add_routes(app, rag_mongo_ingest, path="/rag-mongo-ingest")

# Edit this to add the chain you want to add
add_routes(app, NotImplemented)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
