    (function (app) {&#xD;&#xA;        'use strict';&#xD;&#xA;        app.directive('dropdown', dropdown);&#xD;&#xA;        function dropdown() {&#xD;&#xA;            return {&#xD;&#xA;                restrict: 'E',&#xD;&#xA;                scope: {&#xD;&#xA;                    ddmodel: '=',&#xD;&#xA;                    ngModel: '=',&#xD;&#xA;                    message: "@",&#xD;&#xA;                    id: '@'&#xD;&#xA;                },&#xD;&#xA;                templateUrl: '/App/directives/dropdown.html',&#xD;&#xA;                link: function (scope, element, attrs) {&#xD;&#xA;                    scope.isOpened = false;&#xD;&#xA;                 &#xD;&#xA;                   &#xD;&#xA;                }&#xD;&#xA;            };&#xD;&#xA;        }&#xD;&#xA;    })(angular.module("IIU"));