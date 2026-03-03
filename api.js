const express = require("express");
const router = express.Router();
const session = require("express-session");

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
	req.session.user = {
		handle: handle,
		name: name,
		email: email,
		id: query.lastInsertRowid,
	};
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
		return res.status(400).json({
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
	req.session.user = {
		handle: user.handle,
		name: user.name,
		email: user.email,
		id: user.id,
	};
	res.json({
		name: user.name,
		handle: user.handle,
		email: user.email,
		id: user.id,
		success: true,
	});
});

router.get("/feed", (req, res) => {
	const handle = req.cookies.handle;
	if (!handle) {
		return res.status(401).json({ error: "Unauthorized" });
	}
	const query = db.prepare("SELECT * FROM posts");
	const messages = query.all(handle);
	res.json(messages);
});

router.post("/profile", (req, res) => {
	const handle = req.body.handle;
	if (!handle) {
		return res.status(401).json({ error: "No handle provided" });
	}
	const query = db.prepare("SELECT * FROM users WHERE handle = ?");
	const user = query.get(handle);
	const posts = db
		.prepare("SELECT * FROM posts WHERE user_id = ? LIMIT ? OFFSET ?")
		.all(user.id, req.body.num, req.body.from);
	console.log(posts, handle);
	res.json({ success: true, posts: posts, handle: handle });
});

router.post("/post", (req, res) => {
	const { handle, content } = req.body;
	if (!handle || !content) {
		return res.status(400).json({
			error: "Handle and content are required",
			success: false,
		});
	}
	if (!req.session.user) {
		return res.status(401).json({ error: "No handle", success: false });
	}
	const query = db.prepare(
		"INSERT INTO posts (user_id, content) VALUES (?, ?)",
	);
	query.run(req.session.user.id, content);
	res.json({ success: true });
});

module.exports = router;
