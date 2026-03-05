import bun from "bun";
import route from "./route.js";
import utils from "./utils.js";

const server = bun.serve({
	port: process.env.PORT,
	routes: route,
	async fetch(req) {
		const url = new URL(req.url);
		const file = bun.file(`${utils.clientPath}/${url.pathname}`);
		if (await file.exists()) {
			return new Response(file);
		}
		return new Response(bun.file(`${utils.clientPath}/index.html`));
	},
});
