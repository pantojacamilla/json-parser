    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>&#xD;&#xA;    <div ng-app="myApp" ng-controller="myController">&#xD;&#xA;      <div class="wrapper">&#xD;&#xA;        <div class="box" ng-repeat="box in myList1" ng-class="{fillBox: myList1.length == 1}">&#xD;&#xA;          {{box.name}}&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <div class="wrapper">&#xD;&#xA;        <div class="box" ng-repeat="box in myList2" ng-class="{fillHalfBox: myList2.length > 1}">&#xD;&#xA;          {{box.name}}&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;    </div>