import os


# Set Cohere API
if os.environ.get("COHERE_API_KEY", None) is None:
    raise Exception("Missing `COHERE_API_KEY` environment variable.")
COHERE_API_KEY = os.environ["COHERE_API_KEY"]

# Set Cohere Model
# COHERE_MODEL = "instruct"
COHERE_MODEL = "gptd-instruct-tft"
COHERE_EMBEDDINGS="embed-english-light-v3.0"
TEMPERATURE=0.75

# MONGO
DB_NAME = os.environ.get("DB_NAME")
COLLECTION_NAME = os.environ.get("COLLECTION_NAME")
MONGO_URI = os.environ.get("MONGO_URI")

# Supabase
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.environ.get("SUPABASE_SERVICE_KEY")

# Chunking
CHUNK_SIZE = 1000
CHUNK_OVERLAP = 150