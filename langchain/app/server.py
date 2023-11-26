from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes

import uvicorn

from supachain import chain 
from supachain import ingest, similarity
app = FastAPI()


@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/docs")

# configure endpoints
add_routes(app, chain, path="/chat")
add_routes(app, ingest, path="/ingest")
add_routes(app, similarity, path="/similarity")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
