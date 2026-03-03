import express from "express";

import { __dirname } from "./shared.js";
import { join } from "path";
import route from "./router.js";
import { db } from "./data.js";

db.exec(
	"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, avatar TEXT)",
);

const app = express();

const PUB_DIR = join(__dirname, "../public");

app.use(express.static(PUB_DIR));

route(app);

app.listen(process.env.PORT, () => {
	console.log("Server started on port " + process.env.PORT);
});
