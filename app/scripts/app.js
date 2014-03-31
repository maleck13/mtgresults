'use strict';
var AppConfig = {
  "host":"http://localhost:3000/api/"
};



var app = angular.module('mtggauntletApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'xui.table'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/match', {
        templateUrl: 'views/match.html',
        controller: 'MatchCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/dashboard/:action', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.constant('TableHeader', [{
  header: 'id',
  title: 'id',
  sortable: true
}, {
  header: 'name',
  title: 'name',
  sortable: true
}, {
  header: 'description',
  title: 'description',
  sortable: true
}, {
  header: 'field3',
  title: 'field3',
  sortable: true
}, {
  header: 'field4',
  title: 'field4',
  sortable: true
}, {
  header: 'Action',
  title: 'Action',
  sortable: false
}]);