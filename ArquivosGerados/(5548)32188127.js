    .controller('TestController', ['$scope','$http','$window','$location', function($scope,$http,$window,$location,$stateProvider) &#xD;&#xA;    	{&#xD;&#xA;    var serverData = ["Tamil", "Science", "English","computer"];&#xD;&#xA;    $scope.items = [];&#xD;&#xA;    for (var i = 0; i < serverData.length; i++) {&#xD;&#xA;    var modal = {&#xD;&#xA;    name: serverData[i],&#xD;&#xA;    selected: false&#xD;&#xA;     };&#xD;&#xA;    $scope.items.push(modal);&#xD;&#xA;    }&#xD;&#xA;    $scope.submit = function()&#xD;&#xA;    	{&#xD;&#xA;    	var checkedItems = [];&#xD;&#xA;        for (var i = 0; i < $scope.items.length; i++) {&#xD;&#xA;        if ($scope.items[i].selected) &#xD;&#xA;    	{&#xD;&#xA;          checkedItems.push($scope.items[i].name);&#xD;&#xA;        }&#xD;&#xA;        }&#xD;&#xA;        console.log(checkedItems);&#xD;&#xA;      //Expectation:&#xD;&#xA;    //var data = {&#xD;&#xA;    //"Subject" :[{subject0:Tamil,subject1:Science,subject3:English}]&#xD;&#xA;    //}&#xD;&#xA;    }]);&#xD;&#xA;    }