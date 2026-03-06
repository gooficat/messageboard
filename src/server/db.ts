import Bun from "bun";

const db = new Bun.SQL("sqlite://db.sqlite");

await db`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT NOT NULL UNIQUE,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	)
`;

await db`
	CREATE TABLE IF NOT EXISTS follows (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		following_id INTEGER NOT NULL,
		follower_id INTEGER NOT NULL,
		FOREIGN KEY (following_id) REFERENCES users(id),
		FOREIGN KEY (follower_id) REFERENCES users(id),
		UNIQUE (following_id, follower_id)
	)
`;

await db`
	CREATE TABLE IF NOT EXISTS posts (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER NOT NULL,
		content TEXT NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	)
`;

export default db;
