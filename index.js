const express = require("express");

const path = require("path");

const app = express();

app.use("/cdn/1", express.static("cdn/1"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// app.get("/:folder/:fileName", (req, res) => {
//   const { folder, fileName } = req.params;
//   res.sendFile(path.join(__dirname, folder, fileName));
// });

app.get("/about", (req, res) => {
  res.send("Node-exb means experience builder in wx cloud");
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log("Service Start and listen to port:", port);
});
