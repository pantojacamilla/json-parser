    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>&#xD;&#xA;    <h2>AngularJS <a href='http://www.tutorialspoint.com/angularjs/angularjs_views.htm'>ng-template example</a></h2>&#xD;&#xA;          <div ng-app = "mainApp">&#xD;&#xA;             <p><a href = "#addStudent">Add Student</a></p>&#xD;&#xA;             <p><a href = "#viewStudents">View Students</a></p>&#xD;&#xA;             <div ng-view></div>&#xD;&#xA;             &#xD;&#xA;             <script type = "text/ng-template" id = "addStudent.htm">&#xD;&#xA;                <h2> Add Student </h2>&#xD;&#xA;                {{message}}&#xD;&#xA;             </script>&#xD;&#xA;             &#xD;&#xA;             <script type = "text/ng-template" id = "viewStudents.htm">&#xD;&#xA;                <h2> View Students </h2>&#xD;&#xA;                {{message}}&#xD;&#xA;             </script>&#xD;&#xA;          </div>