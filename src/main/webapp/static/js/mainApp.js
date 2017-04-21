//List modules which it uses
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.controllers'
]);

app.config(['$routeProvider', function ($routeProvider) {
    var urlBase='partials/';
    $routeProvider.when('/', {
        templateUrl: urlBase + 'basicView.html',
        controller: 'masterCtrl'
    }).when('/view1', {
        templateUrl: urlBase + 'basicView.html',
        controller: 'masterCtrl'
    }).when('/view2', {
        templateUrl: urlBase + 'dataView.html',
        controller: 'masterCtrl'
    });
}]);

app.run(function ($rootScope) {
    //Root bag object; put objects which should persist between views here
    $rootScope.R = {};
    //Global properties
    $rootScope.R.URL = 'https://localhost:8443';

    //Using references and objects...
    $rootScope.users = [
        {nazwisko:'Xilan', imie:'Wu', studentid:1},
        {nazwisko:'Xi', imie:'Jinping', studentid:2},
        {nazwisko:'Hu', imie:'Jintao', studentid:3}
    ];
    $rootScope.R.selUser = $rootScope.users[0];
});