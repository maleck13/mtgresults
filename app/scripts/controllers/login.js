'use strict';

angular.module('mtggauntletApp')
  .controller('LoginCtrl', function ($scope, User, $location) {


    $scope.loginUser = function (){
      console.log("called",this);
      User.login(this.email, this.password, function (err,ok){
        if(err){

        }else{
          $location.url('/dashboard');
        }
      });
      return false;
    };

  });
