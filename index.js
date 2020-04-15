const express = require("express");
const router = require("./routes/country");
const Country = require("./models/Country");
const parser = require("body-parser");
const app = express();
app.use(router);
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

app.post("/country", (req, res) => {
  console.log(req.body);
  Country.create(req.body).then((country) => {
    console.log("Successfully created", country);
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
