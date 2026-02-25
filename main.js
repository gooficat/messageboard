const http = require("http");
const express = require("express");

const root = __dirname + "/static";
const app = express();

app.use(express.static(root));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
