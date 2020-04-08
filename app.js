const express = require("express");
let app = require("express")();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let bodyParser = require("body-parser");
const port = 3000;

server.listen(port, () => console.log(`GreenRepAPI listening at port ${port}`));

app.use(bodyParser.json());

let tempData = [
  {
    type: "Feature",
    properties: {
      title: "Tirane",
      description: "Example description",
      score: 1,
      imageurl: "assets/img.jpg",
    },
    geometry: {
      coordinates: [19.819025, 41.327953],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {
      title: "Gramsh",
      description: "Example description",
      score: 4.3,
      imageurl: "assets/img.jpg",
    },
    geometry: {
      coordinates: [20.17633, 40.872727],
      type: "Point",
    },
  },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

io.on("connection", function (socket) {
  console.log("someone entered");
  socket.emit("data", tempData);
});

app.use("/assets", express.static("assets"));
