  var app = angular.module('app', []);&#xD;&#xA;  app.controller('Ctrl', ['$scope', function($scope) {&#xD;&#xA;  $scope.items = [{&#xD;&#xA;  name: "item #1"&#xD;&#xA;  }, {&#xD;&#xA;  name: "item #2"&#xD;&#xA;  }, {&#xD;&#xA;  name: "item #3"&#xD;&#xA;  }];&#xD;&#xA;  $scope.eEditable = -1;&#xD;&#xA;  }])