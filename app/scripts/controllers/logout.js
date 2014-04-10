'use strict';

angular.module('mtggauntletApp')
  .controller('LogoutCtrl', function ($scope, User, $location) {


    $scope.logout = function (){
      console.log("called logout ");
      User.logout(function (err){
        $location.url('/');
      });

    } ;




  });
