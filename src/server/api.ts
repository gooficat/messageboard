import { createUser, getPosts, getUserByUsername } from "./db";

export default {
	"/api/greet": {
		async GET(req: Request) {
			return Response.json({ hello: "world" });
		},
	},
	"/api/user/login": {
		async POST(req: Request) {
			const { username, password } = await req.json();
			if (!username || !password) {
				return Response.json(
					{ error: "username and password are required" },
					{ status: 400 },
				);
			}

			const user = getUserByUsername(username);
			if (!user || user.password !== password) {
				return Response.json(
					{ error: "invalid username or password" },
					{ status: 400 },
				);
			}

			return Response.json({ success: true, user });
		},
	},
	"/api/user/register": {
		async POST(req: Request) {
			const { username, password } = await req.json();
			if (!username || !password) {
				return Response.json(
					{ error: "username and password are required" },
					{ status: 400 },
				);
			}

			const checkExists = getUserByUsername(username);
			if (checkExists) {
				return Response.json(
					{ error: "username already exists" },
					{ status: 400 },
				);
			}

			createUser(username, password);
			const user = getUserByUsername(username);
			return Response.json({ success: true, user });
		},
	},
	"/api/posts/fetch": {
		async GET(req: Request) {
			const { begin, count } = await req.json();
			const posts = getPosts(begin, count);
			return Response.json({ posts });
		},
	},
};
