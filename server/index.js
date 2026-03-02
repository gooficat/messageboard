import express from "express";

import { __dirname } from "./shared.js";
import { join } from "path";
import route from "./router.js";

const app = express();

const PUB_DIR = join(__dirname, "../public");

app.use(express.static(PUB_DIR));

route(app);

app.listen(process.env.PORT, () => {
	console.log("Server started on port " + process.env.PORT);
});
