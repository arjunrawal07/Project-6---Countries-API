const Country = require("../models/Country");

const countryData = require("../db/data.json");

const countryEntries = countryData.map((item) => {
  let currencies = [];
  let languages = [];
  for (let i = 0; i < item.currencies.length; i++) {
    currencies.push(item.currencies[i].name);
  }
  for (let i = 0; i < item.languages.length; i++) {
    languages.push(item.languages[i].name);
  }
  const country = {};
  country.name = item.name;
  country.capital = item.capital;
  country.population = item.population;
  country.currencies = currencies;
  country.languages = languages;
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
  // process.exit();
});
