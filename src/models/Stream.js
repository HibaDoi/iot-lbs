const mongoose = require('mongoose');

const strSchema = new mongoose.Schema({
  StreamID: String,
  SensorName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sens' // Reference to the SensModel
  },
  ObservationType: String,
  UnitOfMeasurement: String,
});

const strModel = mongoose.model('Str', strSchema);

module.exports = strModel;
