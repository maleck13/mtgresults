'use strict';

angular.module('mtggauntletApp')
  .service('Results',[ '$http', function Results($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return{
      "list":function (cb){
        $http({method:"get",url:AppConfig.host + "results"})
          .success(function (ok){
            console.log("results ", ok);
            cb(undefined, ok);
          })
          .error(function (err, status){
            console.log(err, status);
            cb({status:status,message:err});
          });
      }
    }

  }]);
