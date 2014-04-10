'use strict';

angular.module('mtggauntletApp')
  .service('Teams',[ "$http", function Teams($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return{
      "addTeam":function (teamName, cb){
        $http({method:"post",url:AppConfig.host + "team","data":{"teamName":teamName}})
          .success(function (ok){
            cb(undefined, ok);
          })
          .error(function (err, status){
            console.log(err, status);
            cb({status:status,message:err});
          });
      },
      "listTeams":function (cb){
        $http({method:"get",url:AppConfig.host + "teams"})
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
