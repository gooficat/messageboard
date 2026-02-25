const express = require("express");
const session = require("express-session");
const path = require("path");

const root = path.join(__dirname, "/user");

const app = express();

app.use(express.static(__dirname + "/static"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
);

app.get("/", (req, res) => {
  if (!req.session.cookie) {
    res.sendFile(path.join(root, "login.html"));
  } else {
    res.sendFile(path.join(root, "index.html"));
  }
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(root, "login.html"));
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
