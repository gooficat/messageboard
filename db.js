const sqlite = require("node:sqlite");

const db = new sqlite.DatabaseSync("db.sqlite");

db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		handle TEXT NOT NULL,
		name TEXT NOT NULL,
		email TEXT NOT NULL,
		password TEXT NOT NULL
	);
`);

module.exports = db;
