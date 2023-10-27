const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("欢迎使用微信云托管");
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("Service Start and listen to port:", port);
});
