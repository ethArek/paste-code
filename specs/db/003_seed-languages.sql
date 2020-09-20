-- Migrate up
INSERT INTO languages
    (id, name, short_name, created_at)
VALUES
    (1, 'JavaScript', 'JS', now()),
    (2, 'Go', 'Go', now()),
    (3, 'Pascal', 'Pas', now());

-- Migrate down
DELETE FROM languages WHERE id IN (1, 2, 3);