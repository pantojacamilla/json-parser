    var myObjs = null;&#xD;&#xA;    $(function() {&#xD;&#xA;      $("#myHeader").on("change", "#mySelect", function() {&#xD;&#xA;        // perform Ajax Call&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    function ajaxCallback(data) {&#xD;&#xA;      myObjs = data;&#xD;&#xA;    }&#xD;&#xA;    var myModule = angular.module("GetObjsModule", []);&#xD;&#xA;    myModule.controller("MyController", function($scope) {&#xD;&#xA;      $scope.objs = myObjs;&#xD;&#xA;    });&#xD;&#xA;    angular.element(document).ready(function() {&#xD;&#xA;      var myDiv = $("#myDiv");&#xD;&#xA;      angular.bootstrap(myDiv, ["GetObjsModule"]);&#xD;&#xA;    });