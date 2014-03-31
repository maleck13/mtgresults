'use strict';

angular.module('mtggauntletApp')
  .controller('MatchCtrl', function ($scope,Match) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.registerMatch = function (){
        console.log("called register match");
        return false;
    }
  });
