const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("欢迎使用微信云托管");
});
app.get("/about", (req, res) => {
  res.send("Node-exb means experience builder in wx cloud");
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("Service Start and listen to port:", port);
});
