from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes

import uvicorn

from chain import chain, ingest

app = FastAPI()

@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/docs")

# Import rag-mongo chain and ingest
add_routes(app, chain, path="/endpoint")
add_routes(app, ingest, path="/ingest")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
