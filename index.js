const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const router = require("./routes/country");
const Country = require("./models/Country");
// const axios = require("axios").default;
const parser = require("body-parser");

app.use(parser.json());
app.use(router);

app.get("/", (req, res) => {
  Country.find({}).then((countries) => {
    res.json(countries);
  });
});

app.get("/name/:name", (req, res) => {
  Country.find({ name: req.params.name }).then((country) => {
    res.json(country);
  });
});

app.post("/country", (req, res) => {
  Country.create(req.body).then((newCountry) => {
    res.json(newCountry);
  });
});

// app.post("/country/:name/")

app.listen(4000, () => {
  console.log("I'm listening on 4000!");
});
