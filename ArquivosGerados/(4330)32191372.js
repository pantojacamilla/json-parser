    <!doctype html>&#xD;&#xA;    <html lang="en" ng-app="riotApiApp">&#xD;&#xA;    <head>&#xD;&#xA;      <meta charset="utf-8">&#xD;&#xA;      <title>Angular JS Controller</title>&#xD;&#xA;      <script src="angularjs/angular.min.js"></script>&#xD;&#xA;      <script src="angularjs/angular-resource.min.js"></script>&#xD;&#xA;      <script src="api_call.js"></script>&#xD;&#xA;    </head>&#xD;&#xA;    <!-- <body ng-controller="getSummonerbyName"> -->&#xD;&#xA;    <body>&#xD;&#xA;    <div ng-controller="getSummonerbyName">&#xD;&#xA;    	First Name: <input type="text" ng-model="summonerName"><br>&#xD;&#xA;    	  <ul ng-repeat="post in posts">&#xD;&#xA;    		<li>&#xD;&#xA;    			{{post}}&#xD;&#xA;    		</li>&#xD;&#xA;    		<!-- <div ng-controller="alternateSummonerRetrieve"> ng-model={{post.id}}></div> -->&#xD;&#xA;    	  </ul>&#xD;&#xA;    </div>&#xD;&#xA;    </body>&#xD;&#xA;    </html>