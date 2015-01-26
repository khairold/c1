'use strict';

var app = angular
.module('otwc1App',[
'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  })
  .when('/settings', {
    templateUrl: 'views/settings.html',
    controller: 'SettingsController'
  })
  .otherwise({redirectTo: '/'});
});
