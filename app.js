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
      title: "Trashovica Gramsh",
      description: "The Trashovica village has a part that is full of garbage because of missing trash cans.",
      score: 2.4,
      imageurl: "https://thumbs.dreamstime.com/b/water-pollution-plastic-garbage-polluted-river-filled-plastic-waste-garbage-old-discarded-water-bottles-163011777.jpg",
    },
    geometry: {
      coordinates: [20.17633, 40.872727],
      type: "Point",
    },
  },
  {
    type: "Feature",
    properties: {
      title: "Parku neighborhood",
      description: "This place is full of garbage. It needs urget attention to clean it.",
      score: 1.1,
      imageurl: "https://api.time.com/wp-content/uploads/2017/04/arctic-ocean-garbage-norway.jpg",
    },
    geometry: {
      coordinates: [20.189839, 40.854595],
      type: "Point",
    },
  },
   {
    type: "Feature",
    properties: {
      title: "Tirana near the artificial lake",
      description: "This part of the lake was really polluted but we made a group of volunteers and cleaned it.",
      score: 5,
      imageurl: "https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2018/10/18/06fd8d1e-d05e-11e8-81a4-d952f5356e85_1280x720_184009.JPG",
    },
    geometry: {
      coordinates: [20.189839, 40.854595],
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
