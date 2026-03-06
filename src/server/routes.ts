import { startSession } from "./controllers/session";
import index from "../client/index.html";
import {
	createUser,
	getUserByEmail,
	getUserByUsername,
} from "./controllers/user";

export default {
	"/*": index,
	"/api/feed": (req: Bun.BunRequest) => {
		return new Response("Feed coming soon???...");
	},
	"/api/login": async (req: Bun.BunRequest) => {
		const { username, password } = await req.json();
		const user = await getUserByUsername(username);
		if (!user || user.password !== password) {
			return new Response("Invalid credentials", { status: 401 });
		}
		return Response.json({
			success: true,
			sessionId: await startSession(username)
		});
	},
	"/api/profile/:username": (req: Bun.BunRequest) => {
		return new Response(`Profile: ${req.params.username}`);
	},
	"/api/register": async (req: Bun.BunRequest) => {
		const { username, email, password } = await req.json();
		const user =
			(await getUserByUsername(username)) ??
			(await getUserByEmail(username));
		if (user) {
			return Response.json({
				success: false,
				message: "User already exists"
			});
		} else {
			await createUser(username, email, password);
			return Response.json({
				success: true,
				sessionId: await startSession(username)
			});
		}
	},
	"/api/logout": async (req: Bun.BunRequest) => {
		const { sessionId } = await req.json();
	}
};
