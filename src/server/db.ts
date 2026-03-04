import sqlite from "node:sqlite";

export const db = new sqlite.DatabaseSync("db.sqlite");

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`);
db.exec(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
)`);

export function getUserById(id: number) {
	const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
	return user;
}

export function getUserByUsername(username: string) {
	const user = db
		.prepare(`SELECT * FROM users WHERE username = ?`)
		.get(username);
	return user;
}

export function createUser(username: string, password: string) {
	const user = db
		.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`)
		.run(username, password);
	return user;
}

export function login(username: string, password: string) {
	const user = db
		.prepare(`SELECT * FROM users WHERE username = ? AND password = ?`)
		.get(username, password);
	return user;
}

export function getPosts(begin: number, count: number) {
	const posts = db
		.prepare(`SELECT * FROM posts WHERE id > ? ORDER BY id ASC LIMIT ?`)
		.all(begin, count);
	return posts;
}

export function createPost(userId: number, content: string) {
	const post = db
		.prepare(`INSERT INTO posts (user_id, content) VALUES (?, ?)`)
		.run(userId, content);
	return post;
}

export default db;
