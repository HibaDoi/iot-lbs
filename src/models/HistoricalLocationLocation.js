const mongoose = require('mongoose');
const historyWithLocationSchema = new mongoose.Schema({
    id_historical: { type: mongoose.Schema.Types.ObjectId, ref: 'HistoricalLocation' },
    id_location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }
  });
  
  const HistoryWithLocation = mongoose.model('HistoryWith_Location', historyWithLocationSchema);

  module.exports = HistoryWithLocation
  