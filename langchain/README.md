## Conda
```
# If using Nix, use shell.nix
nix-shell

# Choose interpreter found at $(pwd)/.mamba/envs/langchain/bin/python3.9
# for VSC, etc...
```

## Cohere
- https://api.python.langchain.com/en/latest/llms/langchain.llms.cohere.Cohere.html
- https://api.python.langchain.com/en/latest/embeddings/langchain.embeddings.cohere.CohereEmbeddings.html
- https://api.python.langchain.com/en/latest/vectorstores/langchain.vectorstores.supabase.SupabaseVectorStore.html
- https://txt.cohere.com/introducing-embed-v3/

## Supabase
- https://supabase.com/docs/guides/api#api-url-and-keys
- https://supabase.com/docs/guides/api/api-keys
- https://python.langchain.com/docs/integrations/vectorstores/supabase

**Configuring Indexer**:

```
-- drop table documents;
-- drop function match_documents;

create extension if not exists vector;

-- Create a table to store your documents
create table documents (
  id bigserial primary key,
  content text, -- corresponds to Document.pageContent
  metadata jsonb, -- corresponds to Document.metadata
  embedding vector(4096) -- 1536 works for OpenAI embeddings, change if needed
);

-- Create a function to search for documents
create function match_documents (
  query_embedding vector(4096),
  match_count int default null,
  filter jsonb DEFAULT '{}'
) returns table (
  id bigint,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
#variable_conflict use_column
begin
  return query
  select
    id,
    content,
    metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where metadata @> filter
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;
```
