import { deleteSession, getSession, startSession } from "./controllers/session";
import index from "../client/index.html";
import {
	createUser,
	getUserByEmail,
	getUserByUsername,
} from "./controllers/user";
import { createPost, getPostsByUserId } from "./controllers/post";

export default {
	"/*": index,
	"/api/feed": (req: Bun.BunRequest) => {
		return new Response("Feed coming soon???...");
	},
	"/api/login": async (req: Bun.BunRequest) => {
		const { username, password } = await req.json();
		const user = await getUserByUsername(username);
		if (!user || user.password !== password) {
			return Response.json({
				success: false,
				message: "Invalid credentials",
			});
		}
		return Response.json({
			success: true,
			sessionId: await startSession(username),
		});
	},
	"/api/profile/:username": (req: Bun.BunRequest) => {
		return new Response(`Profile: ${req.params.username}`);
	},
	"/api/register": async (req: Bun.BunRequest) => {
		const { username, email, password } = await req.json();
		if (!username || !email || !password) {
			return Response.json({
				success: false,
				message: "All fields are required",
			});
		}

		const user =
			(await getUserByUsername(username)) ??
			(await getUserByEmail(username));
		if (user) {
			return Response.json({
				success: false,
				message: "User already exists",
			});
		} else {
			await createUser(username, email, password);
			return Response.json({
				success: true,
				sessionId: await startSession(username),
			});
		}
	},
	"/api/logout/:sessionId": async (req: Bun.BunRequest) => {
		const { sessionId } = req.params;
		if (sessionId) {
			deleteSession(sessionId);
		}
	},
	"/api/profile": {
		GET: async (req: Bun.BunRequest) => {
			console.log(req.url);
			const url = new URL(req.url).searchParams;
			const user = url.get("user");
			const start = parseInt(url.get("start") ?? "0");
			const count = parseInt(url.get("count") ?? "0");
			console.log(`${user}, ${start}, ${count}`);

			if (!user) {
				return Response.json({
					success: false,
					message: "User field is required",
				});
			} else {
				return Response.json({
					success: true,
					posts: await getPostsByUserId(
						(await getUserByUsername(user)).username,
						start,
						count,
					),
				});
			}
		},
	},
	"/api/post": {
		POST: async (req: Bun.BunRequest) => {
			const { sessionId, content } = await req.json();
			const session = await getSession(sessionId);
			if (!session) {
				console.error("Invalid session");
				return Response.json({
					success: false,
					invalidSession: true,
				});
			}
			const date = new Date();
			if (date.getTime() - session.lastPost.getTime() < 5000) {
				return Response.json({
					success: false,
					message: "Posting too frequently!",
				});
			}
			const user = await getUserByUsername(session.username);
			if (!user) {
				return Response.json({
					success: false,
					message: "User not found",
				});
			}
			if (content.length > 200) {
				return Response.json({
					success: false,
					message: "Post too long",
				});
			}
			if (content.trim().length === 0) {
				return Response.json({
					success: false,
					message: "Post cannot be empty",
				});
			}
			await createPost(user.username, content);
			session.lastPost = date;
			return Response.json({
				success: true,
			});
		},
	},
};
