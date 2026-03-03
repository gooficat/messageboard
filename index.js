const express = require("express");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(express.static("public"));
app.use(cors());
app.use((req, res, next) => {
	res.setHeader("Content-Security-Policy", "default-src 'self';");
	next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./api.js"));

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
