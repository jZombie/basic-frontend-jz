/**
 * Main AngularJS Web Application
 */
var app = angular.module('landingPage', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'mgo-angular-wizard',
  'landingPage.home',
  'landingPage.register'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "app/partials/home.html", controller: "HomeCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "app/partials/404.html", controller: "HomeCtrl"});
}]);
