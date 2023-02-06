const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const path = require("path");
const ejs = require("ejs");
const Layouts = require("express-ejs-layouts");
const morgan = require('morgan')

//config
app.use(express.json())
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/img", express.static(path.join(__dirname, "public/img")));
app.use(Layouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "./layout/full-width");
app.use(morgan('combined'))

// routes
const homeRoute = require('./routes/homeRoutes')

// Routes
app.use("/", homeRoute);

app.all("*", (req, res) => {
  res.status(404).render("404", {
    layout: false,
  });
});

// Server Listening
app.listen(PORT, () => {
  console.log(`server is listneing on http://127.0.0.1:${PORT}`);
});
