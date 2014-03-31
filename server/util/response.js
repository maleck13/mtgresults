module.exports = function(){
  return {
    jsonHeaders : function (res){
      res.headers = res.headers || {};
      res.headers["Content-Type"] = "application/json";
    }

  };
}
