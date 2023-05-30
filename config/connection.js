const mongoose = require('mongoose');

mongoose.connect('mongoose://127.0.0.1:27017/socialnetwork_db');

module.exports = mongoose.connecttion;