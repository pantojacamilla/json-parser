    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js"></script>&#xD;&#xA;    <div ng-app="myApp">&#xD;&#xA;      <div ng-controller="TodoCtrl">&#xD;&#xA;        <table>&#xD;&#xA;          <tr ng-repeat="data in comments">&#xD;&#xA;            <td ng-if="data.type == 'five' ">five</td>&#xD;&#xA;            <td ng-if="data.type == 'three' ">Three</td>&#xD;&#xA;          </tr>&#xD;&#xA;        </table>&#xD;&#xA;      </div>&#xD;&#xA;    </div>