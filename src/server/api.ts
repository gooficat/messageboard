import { serve } from "bun";

export default {
	"/api/greet": {
		async GET(req: Request) {
			return Response.json({ hello: "world" });
		},
	},
	"/api/login": {
		async POST(req: Request) {
			const { username, password } = await req.json();
		},
	},
};
