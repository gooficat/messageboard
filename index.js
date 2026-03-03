const express = require("express");
const session = require("express-session");
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
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 60000 * 60 * 24 * 30, // a month
		},
	}),
);
app.use("/api", require("./api.js"));

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
