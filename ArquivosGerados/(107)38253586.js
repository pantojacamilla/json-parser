    var myApp = angular.module('myApp', []);&#xD;&#xA;    myApp.controller('Main', ['$scope',&#xD;&#xA;      function($scope) {&#xD;&#xA;        $scope.FormName = 'FormNameValidation';&#xD;&#xA;        $scope.showFormValidation = function(statusValid, statusDirty) {&#xD;&#xA;          console.log(statusValid, statusDirty);&#xD;&#xA;          $scope.FormNameValidationStatus = statusValid;&#xD;&#xA;          $scope.FormNameDirtyStatus = statusDirty;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    ]);