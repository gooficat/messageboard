import { serve } from "bun";
import routes from "./routes";

const server = serve({
	routes: routes,

	development: process.env.NODE_ENV !== "production" && {
		hmr: true,
		console: true,
	},
});

console.log(`🚀 Server running at ${server.url}`);
