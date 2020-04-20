const express = require("express");
var cors = require("cors");
const app = express();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.ts");

// var options = {
//   explorer: true,
// };
const Country = require("./models/Country");
const parser = require("body-parser");
app.use(cors());
app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});
app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 80");
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST", "PUT", "DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  next();
});
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
