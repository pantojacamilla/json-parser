    var app = angular.module('RIThym',['ngResource','ngRoute','ngMap']);&#xD;&#xA;    app.config(['$routeProvider', function($routeProvider){&#xD;&#xA;        $routeProvider&#xD;&#xA;        .when('/', {&#xD;&#xA;            templateUrl: 'partials/home.html',&#xD;&#xA;            controller: 'HomeCtrl'&#xD;&#xA;        })&#xD;&#xA;        .otherwise({&#xD;&#xA;            redirectTo: '/'&#xD;&#xA;        });&#xD;&#xA;    }]);&#xD;&#xA;    app.controller('HomeCtrl',['$scope','$resource', 'NgMap',&#xD;&#xA;    function($scope, $resource, NgMap){&#xD;&#xA;        var Locations = $resource('/api/locations');&#xD;&#xA;        Locations.query(function(locations){&#xD;&#xA;            $scope.locations = locations;&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;        var map = NgMap.getMap();&#xD;&#xA;        console.log(map);&#xD;&#xA;        NgMap.getMap().then(function(map){&#xD;&#xA;            console.log(map);&#xD;&#xA;        });&#xD;&#xA;    }]);