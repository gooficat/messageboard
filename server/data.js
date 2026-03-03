import sqlite from "node:sqlite";

export const db = new sqlite.DatabaseSync("db.sqlite");

if (!db.isOpen) {
	db.open();
}
