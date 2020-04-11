const express = require("express");
let app = require("express")();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let path = require("path");
let bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`GreenRepAPI listening at port ${PORT}`));

app.use(bodyParser.json());
app.set("view engine", "ejs");

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
      imageurl: "https://api.time.com/wp-content/uploads/2017/04/arctic-ocean-garbage-norway.jpg",
    },
    geometry: {
      coordinates: [20.17633, 40.872727],
      type: "Point",
    },
  },
];

app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index", { PORT: PORT });
});

io.on("connection", function (socket) {
  console.log("someone entered");
  socket.emit("data", tempData);
});

app.use("/assets", express.static("assets"));
