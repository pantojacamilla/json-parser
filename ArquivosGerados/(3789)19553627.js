    var app = angular.module('myApp', []);&#xD;&#xA;    app.controller('myCtrl', function($scope) {&#xD;&#xA;      $scope.open = false;&#xD;&#xA;      $scope.items = [{&#xD;&#xA;          name: 'A',&#xD;&#xA;          value: 1&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          name: 'B',&#xD;&#xA;          value: 2&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          name: 'C',&#xD;&#xA;          value: 3&#xD;&#xA;        }&#xD;&#xA;      ];&#xD;&#xA;    });&#xD;&#xA;    app.directive('myDirective', ['$compile', function($compile) {&#xD;&#xA;      return {&#xD;&#xA;        restrict: 'A',&#xD;&#xA;        link: function(scope, element, attrs) {&#xD;&#xA;          var items = attrs.items;&#xD;&#xA;          console.log('items %o', items);&#xD;&#xA;          var itemLabelField = attrs.itemLabelField&#xD;&#xA;          var template =&#xD;&#xA;            '<ul>' +&#xD;&#xA;            '<li data-ng-repeat="item in ' + items + '">' +&#xD;&#xA;            '{{item.' + itemLabelField + '}}' +&#xD;&#xA;            '</li>' +&#xD;&#xA;            '</ul>';&#xD;&#xA;          // Render the template.&#xD;&#xA;          element.html('').append($compile(template)(scope));&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }]);