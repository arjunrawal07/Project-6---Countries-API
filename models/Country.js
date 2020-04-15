const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: { type: String },
  capital: { type: String },
  population: { type: Number },
  currencies: [
    {
      code: { type: String },
      name: { type: String },
      symbol: { type: String },
    },
  ],
  languages: [
    {
      name: { type: String },
    },
  ],
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
