var logger = require('./util/loggerFactory').mainLog;
var response = require('./util/response')();
var userModel = require('./models/models').USER_MODEL;
var sessionModel = require('./models/models').SESSION_MODEL;
var async = require('async');

module.exports = function (app){

  return{
    "add" : function (req, res){
      console.log("herer");
      var user = new userModel(req.body);

      user.save(function (err, ok){
        response.jsonHeaders(res);
        if(err){
          if(11000 == err.code){
            res.status(409);
          }else{
            res.status(400);
          }
          logger.warn({"error":err});
          res.end(JSON.stringify(err));
        }else{
          res.end(JSON.stringify(ok));
        }
      });


    },
    "login" : function (req, res){
      var user;
      response.jsonHeaders(res);
      async.series([
        function findUser (callback){
          userModel.findOne({"email":req.body.email},function (err, u){
            if(err) callback(err);
            else{
              user = u;
              callback();
            }
          });
        },
        function validate (callback){
          //todo encrypt
          if(user.password !== req.body.password){
            callback({"code":401,"msg":"login failed"});
          }else{
            var sessID = new Date().getTime() + (Math.random() * 10000000);
            res.cookies.set("sessionId", sessID );
            var session = new sessionModel({"sessionId":sessID,"user":user._id});
            session.save(callback);
          }
        }
      ], function (err, ok){
        if(err){
          res.status(err.code);
          res.end(JSON.stringify(err));
        }else{
          res.status(200);
          res.end();
        }
      })

    }
  };

}
