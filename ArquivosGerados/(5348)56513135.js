    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.9/angular.min.js"></script>&#xD;&#xA;    <div ng-app="myApp" ng-controllre="productController">&#xD;&#xA;    <form class="from-control" name="addProductForm">&#xD;&#xA;        <input type="button" class="btn btn-info" id="addTax" ng-click="add()"&#xD;&#xA;               value="Add Tax">&#xD;&#xA;            <div ng-repeat='item in items' class="margin-top:10px;margin-bottom-10px;">&#xD;&#xA;                <div class="col-lg-6 col-md-6">&#xD;&#xA;                    <select name="items[$index].name"&#xD;&#xA;                            ng-model="items[$index].name"&#xD;&#xA;                            ng-options="e as e.name for e in taxes"&#xD;&#xA;                            class="form-control" ng-required>&#xD;&#xA;                    </select>&#xD;&#xA;                </div>&#xD;&#xA;                <div class="col-lg-4 col-md-4">&#xD;&#xA;                    <input type="text" name="items[$index].value"&#xD;&#xA;                           ng-model="items[$index].value" class="form-control"&#xD;&#xA;                           ng-required="true"/>&#xD;&#xA;                    <input type="hidden" name="items[$index].value"&#xD;&#xA;                           ng-model="items[$index].value" class="form-control" &#xD;&#xA;                           ng-required="true"/>&#xD;&#xA;                </div>&#xD;&#xA;                <div class="col-lg-2 col-md-2">&#xD;&#xA;                    <button type="button" class="btn btn-default btn-sm" &#xD;&#xA;                            ng-click="del($index)">&#xD;&#xA;                        <span class="glyphicon glyphicon-minus"></span> REMOVE&#xD;&#xA;                    </button>&#xD;&#xA;                </div>&#xD;&#xA;            </div>&#xD;&#xA;            <span id="sellingPriceLarge"></span>&#xD;&#xA;            <button class=" form-control btn btn-success"&#xD;&#xA;                    ng-disabled="addProductForm.$invalid" &#xD;&#xA;                    ng-click="addProduct()">Add Product</button>&#xD;&#xA;        </form>&#xD;&#xA;        </div>