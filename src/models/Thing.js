const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
  id_thing: mongoose.Schema.Types.ObjectId,
  Name: String,
  Description: String,
  Properties: mongoose.Schema.Types.Mixed
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing

  