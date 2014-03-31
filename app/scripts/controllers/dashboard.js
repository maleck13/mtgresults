'use strict';

angular.module('mtggauntletApp')
  .controller('DashboardCtrl', function ($scope, Results, $location, $route, $routeParams,TableHeader) {
        console.log("route params ", $routeParams);


    $scope.name = 'World';
    $scope.TableHeader = TableHeader;
    $scope.List = [];


    $scope.search = {};

    $scope.searchfn = function(input) {

      if ( !! input) {
        var tmp = false;
        angular.forEach($scope.search, function(val, key) {
          if ( !! (input[key].indexOf(val || '') !== -1)) {
            tmp = true;
          }
        });
        return tmp;
      }
    };
    $scope.open = function(input) {
      alert(input);
    };

    if($routeParams && $routeParams.action){
      console.log("action ", $routeParams.action);
      switch ($routeParams.action){
        case "results":
          actionResults($scope);
          break;
        case "teams":
          teamsAction($scope);
          break;
        default:
          break;
      }
    }

//      Results.list(function (err, ok){
//        if(err){
//          console.log("err controller ", err);
//          if(401 == err.status){
//            $location.url("/login");
//          }
//
//        }
//      });


    function actionResults($scope){
      /**
       *    <td>{{item.id}}</td>
       <td>{{item.name}}</td>
       <td>{{item.description}}</td>
       <td>{{item.field3}}</td>
       <td>{{item.field4}}</td>
       <td>{{item.field5}}</td>
       * @type {boolean}
       */
      for (var i = 1; i < 5; i++) {
        $scope.List.push({
          "id": "0" + i,
          "name": "name " + i,
          "description": "description " + i,
          "field3": "field3 " + i,
          "field4": "testme",
          "field5 ": "field5 " + i
        });
      }
      $scope.showteams = false;
      $scope.showresult = true;

    }

    function teamsAction($scope){
      $scope.showteams = true;
      $scope.showresult = false;
    }

    $scope.addTeam = function (){
      $scope.addNewTeam = true;
    }


  });
