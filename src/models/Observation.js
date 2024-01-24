const mongoose = require('mongoose');

const obsSchema = new mongoose.Schema({
  ObservationID: String,
  Streamname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Str' // Reference to the StrModel
  },
  PhenomenonTime: String,
  RoomID:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FOI' // Reference to the StrModel
  },
  Result: Number

});

const obsModel = mongoose.model('Obs', obsSchema);

module.exports = obsModel;

