var models = require('../models/models');
var session = models.SESSION_MODEL;
var user = models.USER_MODEL;

module.exports = function (req,res,next){
  var skip = ["/api/user","/api/user/login"];
  if(req._parsedUrl.path.indexOf("api") < 0 || skip.indexOf(req._parsedUrl.path) !== -1){
    return next();
  }

  if(req.session && true == req.session.loggedin){
    user.findOne({"_id":req.session.userId},function (err, user){
      if(err) return invalid(res);
      else{
        req.attributes = req.attributes || {};
        console.log(req.attributes);
        req.attributes.user = user.toObject()
      }
      return next()
    });

  }else{
    return invalid(res);
  }




  function invalid(res){
    res.status(401);
    res.end();
  }

}

