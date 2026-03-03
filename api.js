const express = require("express");
const router = express.Router();

const db = require("./db.js");

router.get("/greet", (_, res) => {
	res.json({ message: "Hello from the server API!" });
});

router.post("/register", (req, res) => {
	console.log(req.body);
	const { handle, email, name, password } = req.body;
	if (!handle || !email || !name || !password) {
		return res
			.status(400)
			.json({ error: "Handle, email, name, and password are required" });
	}

	const taken = db
		.prepare("SELECT * FROM users WHERE handle = ? OR email = ?")
		.get(handle, email);

	if (taken) {
		return res
			.status(400)
			.json({ error: "Handle or email is already taken" });
	}
	const query = db
		.prepare(
			"INSERT INTO users (handle, email, name, password) VALUES (?, ?, ?, ?)",
		)
		.run(handle, email, name, password);
	res.json({
		name: name,
		handle: handle,
		email: email,
		id: query.lastInsertRowid,
	});
});

router.post("/login", (req, res) => {
	const { handle, password } = req.body;
	if (!handle || !password) {
		return res
			.status(400)
			.json({
				error: "Handle and password are required",
				success: false,
			});
	}

	const query = db.prepare(
		"SELECT * FROM users WHERE handle = ? AND password = ?",
	);
	const user = query.get(handle, password);
	if (!user) {
		return res
			.status(401)
			.json({ error: "Invalid handle or password", success: false });
	}
	res.json({
		name: user.name,
		handle: user.handle,
		email: user.email,
		id: user.id,
		success: true,
	});
});

module.exports = router;
