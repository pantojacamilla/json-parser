    <body>&#xD;&#xA;            <div ng-app="app" ng-controller="ctrl">&#xD;&#xA;                <select ng-model="selectedname" ng-options="x.id for x in names"></select>&#xD;&#xA;                <table>&#xD;&#xA;                    <tr ng-repeat="x in names">&#xD;&#xA;                        <td>{{ x.id }}</td>&#xD;&#xA;                    </tr>&#xD;&#xA;                </table>&#xD;&#xA;                <!--<p>You selected : {{ selectedname.id }}</p><p>with color {{selectedname.id }}</p>-->&#xD;&#xA;                <p>{{ names }}</p>&#xD;&#xA;            </div>        &#xD;&#xA;              &#xD;&#xA;        </body>&#xD;&#xA;This is the function returning the response array.