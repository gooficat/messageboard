import bun from "bun";
import index from "./index.html";
import api from "./server/api";

const server = bun.serve({
	routes: {
		"/*": index,
		...api,
	},

	development: process.env.NODE_ENV !== "production" && {
		hmr: true,
		console: true,
	},
});

console.log(`🚀 Server running at ${server.url}`);
