    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>&#xD;&#xA;    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>&#xD;&#xA;    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">&#xD;&#xA;    <html>&#xD;&#xA;    <body ng-app="MyApp">&#xD;&#xA;      <div class="box-body no-padding main_table eval_student_list" demo ng-controller="MyController">&#xD;&#xA;        <div class="custom" demo>&#xD;&#xA;          <table width="100%">&#xD;&#xA;            <thead>&#xD;&#xA;              <tr>&#xD;&#xA;                <th>no</th>&#xD;&#xA;                <th>object</th>&#xD;&#xA;                <th>value</th>&#xD;&#xA;              </tr>&#xD;&#xA;            </thead>&#xD;&#xA;            <tbody class="table_body" ng-repeat="row in headings" ng-controller="customController">&#xD;&#xA;              <tr class="details_header">&#xD;&#xA;                <td>{{ row.order }}</td>&#xD;&#xA;                <td><a class="accordion_td" style="margin-right:10px;" changeicon ng-click="showing()"><i class="fa fa-lg fa-angle-down"></i></a> &#xD;&#xA;                  <input ng-model="isAllSelected" type="checkbox">{{ row.title }}</td>&#xD;&#xA;                <td>{{ row.mark }}</td>&#xD;&#xA;              </tr>&#xD;&#xA;              <tr class="details_info" ng-show="showingContent" ng-repeat="col in row.rows.dept">&#xD;&#xA;                <td>{{ col.id1 }}</td>&#xD;&#xA;                <td>&#xD;&#xA;                  <input type="checkbox" ng-model="all" ng-checked="isAllSelected">{{ col.name }}</td>&#xD;&#xA;                <td>{{ col.mark }}</td>&#xD;&#xA;              </tr>&#xD;&#xA;            </tbody>&#xD;&#xA;          </table>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;    </body>&#xD;&#xA;    </html>