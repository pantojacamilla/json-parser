    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>&#xD;&#xA;    <!DOCTYPE html>&#xD;&#xA;        <html ng-app="myAppModule">&#xD;&#xA;          <head>&#xD;&#xA;            <title>Angular JS</title>&#xD;&#xA;    	    <script src="js/angular.min.js"></script>&#xD;&#xA;            <script src="js/myAppModule.js"></script>&#xD;&#xA;    	    <style>&#xD;&#xA;    		    body {&#xD;&#xA;    		        font-family: "Lucida Grande", "Lucida Sans Unicode", Helvetica,     Arial,     sans-serif;&#xD;&#xA;    		    }&#xD;&#xA;    		    div {&#xD;&#xA;    			    margin: 20px;&#xD;&#xA;    			    padding: 20px;&#xD;&#xA;    			    font-size: 16px;&#xD;&#xA;    			    color:#ffffff;&#xD;&#xA;    		    }&#xD;&#xA;    		    #red {&#xD;&#xA;    			    background-color: red;&#xD;&#xA;    		    }&#xD;&#xA;    		    #green {&#xD;&#xA;    			    background-color: green;&#xD;&#xA;    		    }&#xD;&#xA;    		    #blue {&#xD;&#xA;    			    background-color: blue;&#xD;&#xA;    		    }&#xD;&#xA;    		    #purple {&#xD;&#xA;    			    background-color: purple;&#xD;&#xA;    		    }&#xD;&#xA;    		    #gray {&#xD;&#xA;    			    background-color: gray;&#xD;&#xA;    		    }&#xD;&#xA;    		    #olive {&#xD;&#xA;    			    background-color: olive;&#xD;&#xA;    		    }&#xD;&#xA;    	    </style>	&#xD;&#xA;          </head>&#xD;&#xA;      &#xD;&#xA;          <body ng-controller="myController">&#xD;&#xA;    		    <h2>AngularJS Socks</h2>&#xD;&#xA;    		    <p>Keep warm this winter with our 100% wool, 100% cool, AngularJS  socks!</p> &#xD;&#xA;    		&#xD;&#xA;    		    <button ng-click="showHideColors()" type="button">&#xD;&#xA;    			    {{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}&#xD;&#xA;    		    </button>&#xD;&#xA;    		    <div id="red" ng-hide="isHidden">Red</div>&#xD;&#xA;    		    <div id="green" ng-hide="isHidden">Green</div>&#xD;&#xA;    		    <div id="blue" ng-hide="isHidden">Blue</div>&#xD;&#xA;    		    <div id="purple" ng-hide="isHidden">Purple</div>&#xD;&#xA;    		    <div id="gray" ng-hide="isHidden">Dark Slate Gray</div>&#xD;&#xA;    		    <div id="olive" ng-hide="isHidden">Olive</div>&#xD;&#xA;          </body>&#xD;&#xA;        </html>