    <html>&#xD;&#xA;    <head>&#xD;&#xA;      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>&#xD;&#xA;      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>&#xD;&#xA;      <script src="http://phpflow.com/demo/angular_datatable_demo/angular-datatables.min.js"></script>&#xD;&#xA;      <script src="http://phpflow.com/demo/angular_datatable_demo/jquery.dataTables.min.js"></script>&#xD;&#xA;      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">&#xD;&#xA;      <link rel="stylesheet" href="http://phpflow.com/demo/angular_datatable_demo/datatables.bootstrap.css"> &#xD;&#xA;    </head>&#xD;&#xA;    <div class="container">&#xD;&#xA;    <div ng-app="myApp" ng-controller="MyCtrl">&#xD;&#xA;    <table  class="table table-striped table-bordered" dt-options="vm.dtOptions" dt-column-defs="vm.dtColumnDefs" datatable="ng">&#xD;&#xA;        <thead>&#xD;&#xA;          <tr>&#xD;&#xA;    	 <th>Employee ID</th>&#xD;&#xA;    	<th>name</th>&#xD;&#xA;    	<th>sales</th>&#xD;&#xA;    	<th>details</th>&#xD;&#xA;    </thead>&#xD;&#xA;        <tbody>&#xD;&#xA;      &#xD;&#xA;       <tr ng-repeat="data in list">&#xD;&#xA;          <td> {{ data.eid }} </td>&#xD;&#xA;          <td> {{ data.ename }} </td>&#xD;&#xA;          <td> {{ data.sales }} </td>&#xD;&#xA;          <td>view</td>&#xD;&#xA;    </tr>&#xD;&#xA;    </tbody>&#xD;&#xA;    </table>&#xD;&#xA;    </div>