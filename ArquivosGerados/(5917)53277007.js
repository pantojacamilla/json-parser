    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>&#xD;&#xA;    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"></script>&#xD;&#xA;    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-animate.js"></script>&#xD;&#xA;    <div ng-app="testApp" ng-controller="testController">&#xD;&#xA;      <ul>&#xD;&#xA;        <li class="nav-item" ng-class="{ active: isActive('/analysis/recommendation') }">&#xD;&#xA;          <a class="nav-link" ng-click="expand = !expand;">Analysis</a>&#xD;&#xA;          <ul class="slide" ng-show="expand">&#xD;&#xA;            <li>&#xD;&#xA;              <a ng-class="{active:isActive('/analysis/recommendation')}" href="#!analysis/recommendation">Recommendation</a>&#xD;&#xA;            </li>&#xD;&#xA;          </ul>&#xD;&#xA;        </li>&#xD;&#xA;        <li ng-class="{ active: isActive('/workshop/') }">&#xD;&#xA;          <a ng-click="expand2 = !expand2">Workshop </a>&#xD;&#xA;          <ul class="nav flex-column sub-menu slide" ng-show="expand2">&#xD;&#xA;            <li data-ng-repeat="workshop in workshops">&#xD;&#xA;              <a href="#!workshop/{{workshop.id}}" ng-class="{active:isActive('/workshop/'+workshop.id)}" ng-bind="workshop.name"></a>&#xD;&#xA;            </li>&#xD;&#xA;          </ul>&#xD;&#xA;        </li>&#xD;&#xA;      </ul>&#xD;&#xA;    </div>