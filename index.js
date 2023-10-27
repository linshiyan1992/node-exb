const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("test"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.get("/test/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "test", "about.html"));
// });

app.get("/about", (req, res) => {
  res.send("Node-exb means experience builder in wx cloud");
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("Service Start and listen to port:", port);
});
