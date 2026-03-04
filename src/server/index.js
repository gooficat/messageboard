import http from "http";
import utils from "./utils.js";
import path from "path";

const server = http.createServer((req, res) => {
	utils.sendFile(path.join(utils.clientPath, "index.html"), res);
});

server.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
});
