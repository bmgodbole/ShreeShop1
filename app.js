const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


const homeRoute = require('./api/routes/home');
const aboutRoute = require('./api/routes/about');
const vegRoute = require('./api/routes/vegetable');
const tmRoute = require('./api/routes/testimonial');
const ctRoute = require('./api/routes/contact');

app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/vegetable", vegRoute);
app.use("/testimonial", tmRoute);
app.use("/contact", ctRoute);

module.exports = app;
