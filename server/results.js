var logger = require('./util/loggerFactory').mainLog;

module.exports = function (app){

  return{

    "add" : function (req, res){
      res.end("hello");
    },

    "list" : function (req,res){
      res.end("hello");
    },

    "remove":function (req,res){

    },

    "get":function (req,res){
     res.end("hello " + req.params.id);
    }

  };

};
