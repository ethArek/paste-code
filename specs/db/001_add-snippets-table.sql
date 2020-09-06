CREATE TABLE IF NOT EXISTS snippets (
   id uuid NOT NULL PRIMARY KEY,
   language int NOT NULL, 
   code text NOT NULL,
   created_at timestamp NOT NULl
);