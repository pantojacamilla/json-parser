    var app = angular.module('testApp',[]);&#xD;&#xA;    app.controller('testController', function($scope){&#xD;&#xA;    $scope.items = ['stage-1','stage-2','stage-3','stage-4','stage-5','stage-6']&#xD;&#xA;    $scope.active = 0;&#xD;&#xA;    $scope.nxtClicked = function(){&#xD;&#xA;    	if($scope.active  < $scope.items.length-1){&#xD;&#xA;      $scope.active++;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    $scope.bckClicked = function(){&#xD;&#xA;    if($scope.active > 0){&#xD;&#xA;      $scope.active--;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    })