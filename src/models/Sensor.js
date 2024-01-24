const mongoose = require('mongoose');

const sensSchema = new mongoose.Schema({
  SensorID: String,
  SensorType: String,
  SensorName: String,
  Description: String,
  Specifications: {
    Manufacturer: String,
    Model: String,
    Accuracy: {
      Temperature: String,
      Humidity: String,
      Pressure: String
    }
  }
});

const sensModel = mongoose.model('Sens', sensSchema);

module.exports = sensModel;
