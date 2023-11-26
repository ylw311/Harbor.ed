from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes

import uvicorn

from supachain import chain, ingest, query

app = FastAPI()

@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/docs")

# configure endpoints
add_routes(app, chain, path="/endpoint")
add_routes(app, ingest, path="/ingest")
add_routes(app, ingest, path="/query")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
