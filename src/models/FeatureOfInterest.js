const mongoose = require('mongoose');

const FOISchema = new mongoose.Schema({
RoomID:String,
description : String
});

const FOIModel = mongoose.model('FOI', FOISchema);

module.exports = FOIModel;
