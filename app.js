var express = require("express");
let alert = require("alert");

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

// app.post("/contact", async (req, res) => {
//   alert("Message send successfully");
//   res.sendFile("contact.html");
// });

// app.listen(PORT, function () {
//   console.log("running on localhost:" + PORT);
// });

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("On Heroku Server Ports ");
});
