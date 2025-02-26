/*
id, tittle, description, status
*/
CREATE TABLE IF NOT EXISTS tareas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tittle TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'pending'
);

INSERT INTO tareas (tittle, description) VALUES ('Task 1', 'Description 1');