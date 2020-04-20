const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: { type: String },
  capital: { type: String },
  population: { type: Number },
  currencies: [{ type: String }],
  languages: [{ type: String }],
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
