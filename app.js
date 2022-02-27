var express = require("express");
const serverless = require("serverless-http");
const router = express.Router();

var path = require("path");
const PORT = 3000;

var app = express();

app.use(express.json());

app.set("view engine", "html");
var public = path.join(__dirname, "public");

app.use("/", express.static(public));

app.get("/", function (req, res) {
  res.sendFile(path.join(public, "index.html"));
});

app.use(`/.netlify/functions/api`, router);

// app.listen(process.env.PORT, process.env.IP, function () {
//   console.log("On Heroku Server Ports ");
// });

module.exports.handler = serverless(app);
