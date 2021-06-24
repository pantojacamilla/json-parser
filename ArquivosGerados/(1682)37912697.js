    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.min.js"></script>&#xD;&#xA;    <body ng-app="test">&#xD;&#xA;      <h1>Test</h1>&#xD;&#xA;      <div class="container" ng-controller="hotelsController">&#xD;&#xA;        <center><a href="javascript:void(0)" ng-click="getHotels()" class="btn-grey">Load Hotels</a></center>&#xD;&#xA;        <div class="hotels" ng-cloak>&#xD;&#xA;          <div class="hotel clearfix" ng-repeat="item in hotels | limitTo:5">&#xD;&#xA;            <div class="hotel-image">&#xD;&#xA;              <img ng-src="{{item.images | limitTo:1}}" alt="">&#xD;&#xA;            </div>&#xD;&#xA;            <div class="hotel-description">&#xD;&#xA;              <div class="hotel-stars">&#xD;&#xA;                {{item.stars}} &#9733;&#xD;&#xA;              </div>&#xD;&#xA;              <h2>{{item.name}}</h2>&#xD;&#xA;              <h3>{{item.city}} - {{item.country}}</h3>&#xD;&#xA;              <p>&#xD;&#xA;                {{item.description}}&#xD;&#xA;              </p>&#xD;&#xA;              <a href="#" class="btn-grey">Show Reviews</a>&#xD;&#xA;              <div class="hotel-price">&#xD;&#xA;                {{item.price}} &euro;&#xD;&#xA;                <span class="date">&#xD;&#xA;                                  {{item.date_start | date}} - {{item.date_end | date}}&#xD;&#xA;                              </span>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;    </body>