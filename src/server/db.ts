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

export default db;
