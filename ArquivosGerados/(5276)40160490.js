    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;      <link rel="stylesheet" href="style.css">&#xD;&#xA;      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.9/angular-material.css">&#xD;&#xA;      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">&#xD;&#xA;    </head>&#xD;&#xA;    <body ng-app='myApp' layout="column" layout-fill ng-controller="ChatCtrl as ctrl">&#xD;&#xA;      <!-- content starts here -->&#xD;&#xA;      <md-toolbar class="md-whiteframe-z2">&#xD;&#xA;        <div class="md-toolbar-tools">&#xD;&#xA;          <h2>&#xD;&#xA;              hello&#xD;&#xA;            </h2>&#xD;&#xA;        </div>&#xD;&#xA;      </md-toolbar>&#xD;&#xA;      <div style="width: 100%;height: 100%;overflow: hidden;">&#xD;&#xA;        <md-content layout="column" style="background-color: #F5F5F5;" ng-style="{'height':ctrl.messageWindowHeight}">&#xD;&#xA;          <div class="chat-box">&#xD;&#xA;            <ol class="discussion" scroll-to-bottom="ctrl.messages">&#xD;&#xA;              <li ng-repeat="message in ctrl.messages track by $index" id="msg-{{$index}}">&#xD;&#xA;                {{message}}&#xD;&#xA;              </li>&#xD;&#xA;            </ol>&#xD;&#xA;          </div>&#xD;&#xA;        </md-content>&#xD;&#xA;      </div>&#xD;&#xA;      <form name="userForm" novalidate ng-submit="ctrl.send()" layout="row" layout-padding layout-align="center center" class="message-box">&#xD;&#xA;        <div class="message" flex>&#xD;&#xA;          <md-input-container class="md-block">&#xD;&#xA;            <input type="text" name="text" ng-model="ctrl.user.text" />&#xD;&#xA;          </md-input-container>&#xD;&#xA;        </div>&#xD;&#xA;        <md-button class="md-icon-button" type="submit">&#xD;&#xA;          send&#xD;&#xA;        </md-button>&#xD;&#xA;      </form>&#xD;&#xA;      <!-- content ends here -->&#xD;&#xA;      <!-- Angular Material Dependencies -->&#xD;&#xA;      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>&#xD;&#xA;      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-animate.min.js"></script>&#xD;&#xA;      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-aria.min.js"></script>&#xD;&#xA;      <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.9/angular-material.js"></script>&#xD;&#xA;      <script src="script.js"></script>&#xD;&#xA;    </body>&#xD;&#xA;    </html>