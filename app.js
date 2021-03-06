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
      description: "This place was full of garbage but we worked voluntarily to clean it. It looks sweet now!",
      score: 5,
      imageurl: "https://images.unsplash.com/photo-1548015617-791709258509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
    },
    geometry: {
      coordinates: [19.796041, 41.347366],
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
      imageurl: "https://images.unsplash.com/photo-1558497513-f0133e055abf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
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
      coordinates: [19.818705, 41.312463],
      type: "Point",
    },
  },
    {
    type: "Feature",
    properties: {
      title: "Beach in Vlora",
      description: "This beach in Vlora needs urgent cleaning in order to accomodate turists in the right way.",
      score: 2.1,
      imageurl: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    },
    geometry: {
      coordinates: [19.454856, 40.468999], 
      type: "Point",
    },
  },
     {
    type: "Feature",
    properties: {
      title: "Beach in Vlora",
      description: "After finding a whole lot of garbage in this beach, we formed a volunteer team thanks to GreenRep and cleaned it!",
      score: 5.0,
      imageurl: "https://images.unsplash.com/photo-1565886728041-a239b6a3ec42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    geometry: {
      coordinates: [19.493877, 40.431448],
      type: "Point",
    },
  },
      {
    type: "Feature",
    properties: {
      title: "Village in Elbasan",
      description: "",
      score: 3.0,
      imageurl: "https://images.unsplash.com/photo-1531326537431-6197cac3795b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    geometry: {
      coordinates: [20.062165, 41.188977],
      type: "Point",
    },
  },
    {
    type: "Feature",
    properties: {
      title: "Costa De Fora, Spain",
      description: "This beach is amazing, the only thing that needs to be fixed is this pile of garbage here.",
      score: 3.0,
      imageurl: "https://images.pexels.com/photos/2447036/pexels-photo-2447036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    geometry: {
      coordinates: [0.645498, 40.553856],
      type: "Point",
    },
  },
    {
    type: "Feature",
    properties: {
      title: "Vinaros, Spain",
      description: "There was a lot of trash before, but we cleaned up everything!",
      score: 4.9,
      imageurl: "https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    },
    geometry: {
      coordinates: [0.481324, 40.472258], 
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
