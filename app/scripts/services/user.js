'use strict';

angular.module('mtggauntletApp')
  .service('User',['$http', function User($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
      register : function (userName, password, email, cb){
        $http({method:"post",url:AppConfig.host + "user","data":{"username":userName,"password":password,"email":email}})
          .success(function (ok){
            cb(undefined, ok);
          })
          .error(function (err, status){
            console.log(err, status);
            cb({status:status,message:err});
          });
      },
      login : function (email, password, cb){
        $http({method:"post",url:AppConfig.host + "user/login","data":{"password":password,"email":email}})
          .success(function (ok){
            cb(undefined, ok);
          })
          .error(function (err, status){
            console.log(err, status);
            cb({status:status,message:err});
          });
      },
      "logout": function (cb){
        $http({method:"post",url:AppConfig.host + "user/logout"})
          .success(function (ok){
            cb(undefined, ok);
          })
          .error(function (err, status){
            console.log(err, status);
            cb({status:status,message:err});
          });
      }
    }
  }]);
