const mongoose = require('mongoose');
const thingLocationSchema = new mongoose.Schema({
    id_thing: { type: mongoose.Schema.Types.ObjectId, ref: 'Thing' },
    id_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }
  });
  
  const ThingLocation = mongoose.model('Thing_Location', thingLocationSchema);
  module.exports = ThingLocation