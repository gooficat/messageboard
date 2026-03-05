import path from "path";
import utils from "./utils.js";

function apiRoute(req, res) {
	switch (req.url) {
		case "/greet":
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end("Hello, World!");
			break;
		default:
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.end("Not Found");
			break;
	}
}

function route(req, res) {
	if (req.url.startsWith("/api")) {
		req.url = req.url.replace("/api", "");
		apiRoute(req, res);
	} else if (req.url.endsWith("/")) {
		utils.sendFile(path.join(utils.clientPath, "index.html"), res);
	} else {
		utils.sendFile(path.join(utils.clientPath, req.url), res);
	}
}

export default { route };
export { route };
