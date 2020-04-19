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
  country.Name = item.name;
  country.Capital = item.capital;
  country.Population = item.population;
  country.Currencies = currencies;
  country.Languages = languages;
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
