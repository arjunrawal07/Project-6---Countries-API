const express = require("express");
const Country = require("./models/Country");
const parser = require("body-parser");
const app = express();
app.use(parser.json());

app.get("/", (req, res) => {
  Country.find({}).then((countries) => {
    res.json(countries);
  });
});

app.get("/countries/:name", (req, res) => {
  Country.find({ name: req.params.name }).then((country) => {
    res.json(country);
  });
});

app.get("/capital/:capital", (req, res) => {
  Country.find({ capital: req.params.capital }).then((country) => {
    res.json(country);
  });
});

app.get("/currencies/:currencies", (req, res) => {
  console.log(req.params);
  Country.find({ "currencies.name": req.params.currencies }).then((country) => {
    res.json(country);
  });
});

app.post("/country", (req, res) => {
  console.log(req.body);
  Country.create(req.body).then((country) => {
    console.log("Successfully created", country);
    res.json(country);
  });
});

app.delete("/countries/:name", (req, res) => {
  Country.findOneAndDelete({ name: req.params.name }).then((country) => {
    res.json(country);
  });
});

app.put("/countries/:name", (req, res) => {
  Country.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true,
  }).then((country) => {
    res.json(country);
  });
});

app.listen(4000, () => {
  console.log("I'm listening on 4000!");
});
