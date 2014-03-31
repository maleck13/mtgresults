'use strict';

angular.module('mtggauntletApp')
  .controller('RegisterCtrl',  function ($scope,User ) {




    function showWarning(message){
      $scope.warning = true;
      $scope.message = message;
      setTimeout(function (){
        $scope.warning = false;
        $scope.message = "";
      },1000);
    }

    $scope.registerUser = function (){
      console.log("this ", this.email);
      User.register(this.userName,this.password,this.email, function (err, ok){
        console.log("post register ", err, ok);
        if(err && 409 == err.status){
          console.log("conflict");
          showWarning("email address already registered");


        }
      });
      return false;
    }

  });
