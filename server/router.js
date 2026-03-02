import express from "express";

function route(app) {
	const router = express.Router();
	app.use(router);

	router.get("/api", (req, res) => {
		res.json({ greeting: "Hello, World!" });
	});

	router.get("/api/user", (req, res) => {
		res.json({
			name: "John Doe",
			email: "john.doe@example.com",
			avatar: "https://placehold.co/512x512",
		});
	});
}

export default route;
