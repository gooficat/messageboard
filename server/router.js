import express from "express";
import { db } from "./data.js";

function getUser(id) {
	const query = db.prepare("SELECT * FROM users WHERE id = ?");
	return query.run(id);
}

function route(app) {
	const router = express.Router();
	app.use(router);

	router.get("/api", (req, res) => {
		res.json({ greeting: "Hello, World!" });
	});

	router.get("/api/user", (req, res) => {
		res.json(getUser(req.query.id));
	});

	router.post("/login", (req, res) => {
		const { username, password } = req.body;
		res.json({ username, password });
	});
}

export default route;
