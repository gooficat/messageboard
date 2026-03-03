import express from "express";
import ViteExpress from "vite-express";
import api from "./api.ts";

const app = express();
app.use(express.json());
app.use("/api", api);

ViteExpress.listen(app, 3000, () =>
	console.log("Server is listening on port 3000..."),
);
