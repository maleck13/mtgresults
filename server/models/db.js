var CONSTANTS = require('../util/CONTANTS')[process.env.APP_ENVIRONMENT];
var mongoose = require('mongoose');

module.exports = {
  "connect":function (cb){
    mongoose.connect(CONSTANTS.DATABASE_URL);

    var db = mongoose.connection;
    db.on('error', cb);
    db.once('open', cb);
  },
  "disconnect":function (cb){
    mongoose.close(cb);
  }
};

