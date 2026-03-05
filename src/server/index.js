import http from "http";
import route from "./route.js";
import db from "./db.js";

const server = http.createServer((req, res) => route.route(req, res));

server.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});
