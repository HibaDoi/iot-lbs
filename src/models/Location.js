const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
  id_location: mongoose.Schema.Types.ObjectId,
  Name: String,
  Description: String,
  Properties: mongoose.Schema.Types.Mixed,
  EncodingType: String,
  Location: mongoose.Schema.Types.Mixed // assuming this is a complex type like GeoJSON
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location



