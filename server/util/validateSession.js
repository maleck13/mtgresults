var models = require('../models/models');
var session = models.SESSION_MODEL;

module.exports = function (req,res,next){
  var skip = ["/api/user","/api/user/login"];
  if(req._parsedUrl.path.indexOf("api") < 0 || skip.indexOf(req._parsedUrl.path) !== -1){
    return next();
  }

  var sessionId = req.cookies.get("sessionId");
  var userSession;

  if(! sessionId){
   return invalid(res);
  }
  session.findOne({"sessionId":sessionId}).populate("user").exec(function (err,sess){
    if(err){
      invalid(res);
    }
    else if(sess && sess.user){
      if(sess.user.active){
        req.attributes = req.attributes || {};
        req.attributes.user = sess.user.toObject();
        return next();
      }else{
        return invalid(res);
      }
    }else{
      return invalid(res);
    }
  });


  function invalid(res){
    res.status(401);
    res.end();
  }

}

