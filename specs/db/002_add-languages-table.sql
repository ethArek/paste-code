-- Migrate up
CREATE TABLE IF NOT EXISTS languages (
   id serial PRIMARY KEY,
   name varchar(64) NOT NULL,
   short_name varchar(6) NOT NULL,
   created_at timestamp NOT NULl
);

-- Migrate down
DROP TABLE languages;