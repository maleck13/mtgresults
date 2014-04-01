var mongoose = require('mongoose');


var MODEL_NAMES = {
  "FORMAT_MODEL":"Format",
  "TEAM_MODEL":"Team",
  "USER_MODEL":"User",
  "SESSION_MODEL":"Session",
  "RESULT_MODEL":"Result"
};

var FormatSchema = mongoose.Schema({
  name: String
});


var TeamSchema = mongoose.Schema({
  "name":{type:String, required:true},
  "members":[UserSchema],
  "owner":{type: mongoose.Schema.Types.ObjectId, ref: MODEL_NAMES.USER_MODEL, required: true }
});

var UserSchema = mongoose.Schema({
  "username": {"type":String,index: { unique: true }, required:true},
  "email":{"type":String,index: { unique: true }, required:true},
  "password":String,
  "teams":[TeamSchema],
  "active":{type:Boolean,default:true}
});

var SessionSchema = mongoose.Schema({
  "user":{type: mongoose.Schema.Types.ObjectId, ref: MODEL_NAMES.USER_MODEL, required:true},
  "sessionId":{"type":String,index:{unique:true}}
});




module.exports = {
  FORMAT_MODEL : mongoose.model(MODEL_NAMES.FORMAT_MODEL,FormatSchema),
  TEAM_MODEL : mongoose.model(MODEL_NAMES.TEAM_MODEL,TeamSchema),
  USER_MODEL : mongoose.model(MODEL_NAMES.USER_MODEL,UserSchema),
  SESSION_MODEL : mongoose.model(MODEL_NAMES.SESSION_MODEL,SessionSchema)
}
