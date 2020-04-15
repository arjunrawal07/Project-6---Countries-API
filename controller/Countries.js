const Country = require("../models/Country");

exports.index = (req, res) => {
  Country.find({}).then((countries) => {
    res.json(countries);
  });
};
