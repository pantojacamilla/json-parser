     var app = angular.module("billModule", []);&#xD;&#xA;            app.controller("billController", function ($scope) {&#xD;&#xA;                $scope.total = 0.0;&#xD;&#xA;            });&#xD;&#xA;            app.directive("menu", function ($document) {&#xD;&#xA;                return {&#xD;&#xA;                    restrict: "EA",&#xD;&#xA;                    replace: true,&#xD;&#xA;                    link: function (scope, element, attr) {&#xD;&#xA;                        element.on("mousedown", function () {&#xD;&#xA;                            scope.total += Number(attr.cost);&#xD;&#xA;                          console.log("total is "+ scope.total);&#xD;&#xA;                        });&#xD;&#xA;                    },&#xD;&#xA;                    template: function (element, attr) {&#xD;&#xA;                        return "<div class='box' title='$" + attr.cost + "'>" + attr.item + "</div>";&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            })