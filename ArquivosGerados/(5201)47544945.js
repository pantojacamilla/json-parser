    var app=angular.module('myApp',[])&#xD;&#xA;    app.controller('myController',function($scope){&#xD;&#xA;    $scope.init = function(){&#xD;&#xA;      $('.sameAddress').change(function () {debugger&#xD;&#xA;                if ($(this).prop('checked')) {&#xD;&#xA;                 $scope.data.permanantAddress = $scope.data.address;&#xD;&#xA;                }&#xD;&#xA;                })&#xD;&#xA;    }&#xD;&#xA;    })