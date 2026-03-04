import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, "../client");

function sendFile(filePath, res) {
	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(404);
			res.end("File not found");
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		}
	});
}

export default { __filename, __dirname, clientPath, sendFile };
export { __filename, __dirname, clientPath, sendFile };
