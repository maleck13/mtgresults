var logger = require('./util/loggerFactory').mainLog;
var response = require('./util/response')();
var teamModel = require('./models/models').TEAM_MODEL;
var async = require('async');

module.exports = function (){
  return{
    "add":function (req,res){
      var user = req.attributes.user;
      var team = new teamModel({"name":req.body.teamName,"owner":user,members:[user]});
      team.save(function (err, ok){
        response.jsonHeaders(res);
        if(err){
          res.status(500);
          res.end(JSON.stringify(err));
        }else{
          res.status(200);
          res.end(JSON.stringify(ok));
        }
      });
    },
    "list":function(req,res){
      var user =req.attributes.user;
      teamModel.find({"owner":user._id}).populate('owner','-password').populate('members','-password').exec(function (err, ok){
        response.jsonHeaders(res);
        if(err){
          res.status(500);
          res.end();
        }else{
          res.status(200);
          res.end(JSON.stringify(ok));
        }
      });
    },
    "remove":function (req,res){
      var user = req.attributes.user;
      teamModel.findOne({"_id":req.params.teamId, "owner":user._id},function (err, ok){
        ok.remove(function (err, ok){
          res.end();
        });
      });
    },
    "update":function (req,res){

    }

  }
}
