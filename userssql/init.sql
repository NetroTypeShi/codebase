CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    age INTEGER NOT NULL,
    points INTEGER NOT NULL DEFAULT '0',
    gender TEXT NOT NULL DEFAULT 'male' CHECK(gender IN ('male', 'female')) 
);

CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_user INTEGER NOT NULL,
    message TEXT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

SELECT * FROM users;
INSERT INTO users (name, password, age, points, gender) VALUES ('kANYE', 'VULTURES','50','0','male');
INSERT INTO users (name, password, age, points, gender) VALUES ('Harambe','uuaaa','39','10000','male');
INSERT INTO users (name, password, age, points, gender) VALUES ('CARTI', 'I AM A LIAR24/7','18','3','MALE');


INSERT INTO messages (id_user,message) VALUES (1, "GEORGE BUSH DOESN'T CARE ABOUT BLACK PEOPLE");
INSERT INTO messages (id_user,message) VALUES (2, "fr dawg");
INSERT INTO messages (id_user,message) VALUES (3, "WTF i am doing here");
SELECT * FROM messages;

