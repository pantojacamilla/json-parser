    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>&#xD;&#xA;    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.23/angular-animate.js"></script>&#xD;&#xA;    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">&#xD;&#xA;    <form data-ng-controller="TestCtrl">&#xD;&#xA;      <div class="form-group" data-ng-repeat="prop in profile">&#xD;&#xA;        <label class="control-label">{{prop.key}}</label>&#xD;&#xA;        <div class="input-group">&#xD;&#xA;          <span class="input-group-addon">&#xD;&#xA;            <input type="checkbox" data-ng-model="prop.local" />&#xD;&#xA;          </span>&#xD;&#xA;          <input class="form-control" type="text" readonly="readonly"&#xD;&#xA;                 data-ng-if="!prop.local" data-ng-model="prop.value" />&#xD;&#xA;          <input class="form-control" type="text"&#xD;&#xA;                 data-ng-if="prop.local" data-ng-model="prop.localValue" />&#xD;&#xA;          <span class="input-group-addon" data-ng-if="!prop.local">(inherited)</span>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;    </form>