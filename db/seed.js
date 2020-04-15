const Country = require("../models/Country");

const countryData = require("../db/data.json");

const countryEntries = countryData.map((item) => {
  const country = {};
  country.name = item.name;
  country.capital = item.capital;
  country.population = item.population;
  country.currencies = item.currencies;
  country.languages = item.languages;
  return country;
});

Country.deleteMany({}).then(() => {
  Country.create(countryEntries)
    .then((entries) => {
      console.log(entries);
    })
    .catch((err) => {
      console.log(err);
    });
});
