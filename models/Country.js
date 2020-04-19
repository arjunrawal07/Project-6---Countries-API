const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  Name: { type: String },
  Capital: { type: String },
  Population: { type: Number },
  Currencies: [{ type: String }],
  Languages: [{ type: String }],
});

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
