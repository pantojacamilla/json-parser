    <!DOCTYPE html>&#xD;&#xA;        <html ng-app="myApp">&#xD;&#xA;        <head>&#xD;&#xA;          <link data-require="bootstrap-css@3.2.0" data-semver="3.2.0" rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />&#xD;&#xA;          <script data-require="angular.js@1.3.7" data-semver="1.3.7" src="https://code.angularjs.org/1.3.7/angular.js"></script>&#xD;&#xA;          <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-smart-table/2.1.7/smart-table.min.js"></script>&#xD;&#xA;        </head>&#xD;&#xA;        <body ng-controller="mainCtrl">&#xD;&#xA;          <div class="table-container" st-table="displayed">&#xD;&#xA;            <table class="table table-striped">&#xD;&#xA;              <thead>&#xD;&#xA;                <tr>&#xD;&#xA;                  <th st-sort="firstName">first name</th>&#xD;&#xA;                  <th st-sort="lastName">last name</th>&#xD;&#xA;                  <th st-sort="age">age</th>&#xD;&#xA;                  <th st-sort-default="{{order}}" st-sort="balance">balance</th>&#xD;&#xA;                  <th>email</th>&#xD;&#xA;                </tr>&#xD;&#xA;              </thead>&#xD;&#xA;              <tbody>&#xD;&#xA;                <tr ng-repeat="row in displayed">&#xD;&#xA;                  <td>{{row.firstName | uppercase}}</td>&#xD;&#xA;                  <td>{{row.lastName}}</td>&#xD;&#xA;                  <td>{{row.age}}</td>&#xD;&#xA;                  <td>{{row.balance | currency}}</td>&#xD;&#xA;                  <td><a ng-href="mailto:{{row.email}}">email</a>&#xD;&#xA;                  </td>&#xD;&#xA;                </tr>&#xD;&#xA;              </tbody>&#xD;&#xA;            </table>&#xD;&#xA;          </div>&#xD;&#xA;          <div ng-show="isLoading" class="loading-indicator"></div>&#xD;&#xA;        </body>&#xD;&#xA;        </html>