    angular.module('test', ['ngMessages'])&#xD;&#xA;      .directive('formGroupT', function() {&#xD;&#xA;        return {&#xD;&#xA;          scope: {&#xD;&#xA;            classList: '='&#xD;&#xA;          },&#xD;&#xA;          replace: true,&#xD;&#xA;          template: '<div class=\"container\" ng-class=\"{{classList}}\" ng-form=\"fg_{{$id}}\"><input type=\"text\" name=\"testInput\" ng-model=\"testValue\"  required><div ng-messages=\"fg_$id.$error\"><p ng-message=\"required\">Something is wrong!<\/p><\/div><\/div>'&#xD;&#xA;        }&#xD;&#xA;      });