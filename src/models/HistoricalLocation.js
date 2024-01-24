const mongoose = require('mongoose');
const historicalLocationSchema = new mongoose.Schema({
    id_historical: mongoose.Schema.Types.ObjectId,
    id_thing: { type: mongoose.Schema.Types.ObjectId, ref: 'Thing' },
    Time: mongoose.Schema.Types.Mixed 
  });
  
  const HistoricalLocation = mongoose.model('HistoricalLocation', historicalLocationSchema);
  module.exports = HistoricalLocation
   

  