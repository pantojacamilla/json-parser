    function Test1Controller($scope) {&#xD;&#xA;      var storeid = window.localStorage.getItem("storeid");&#xD;&#xA;        var serverData = ["Samsung Galaxy Note", "Samsung Galaxy S6", "Samsung Galaxy Avant","Samsung Galaxy Young"];&#xD;&#xA;        $scope.items= [] ;&#xD;&#xA;    	var selectedvalue = window.localStorage.getItem("selectedvalue");&#xD;&#xA;    	// here selected value Samsung Galaxy S6&#xD;&#xA;        var selectedvalue="Samsung Galaxy S6";&#xD;&#xA;        for(var i=0;i<serverData.length;i++)&#xD;&#xA;        {&#xD;&#xA;            var modal = {&#xD;&#xA;            name:serverData[i],&#xD;&#xA;            selected:false&#xD;&#xA;            };  &#xD;&#xA;    		if (selectedvalue.indexOf(serverData[i]) >= 0 || null)&#xD;&#xA;    		{&#xD;&#xA;                            modal.selected = true;&#xD;&#xA;            }&#xD;&#xA;            $scope.items.push(modal);        &#xD;&#xA;        }&#xD;&#xA;        //----------------------------Our Shop Offers----------------------------------------&#xD;&#xA;        $scope.offers = [&#xD;&#xA;        {&#xD;&#xA;            id: "as23456",&#xD;&#xA;            Store: "samsung",&#xD;&#xA;            Offer_message:"1500rs off",&#xD;&#xA;            modalname: "Samsung Galaxy Young"       &#xD;&#xA;        },{&#xD;&#xA;            id: "de34575",&#xD;&#xA;            Store: "samsung",&#xD;&#xA;            Offer_message:"20% Flat on Samsung Galaxy S6",&#xD;&#xA;            modalname: "Samsung Galaxy S6"       &#xD;&#xA;        },&#xD;&#xA;        ]&#xD;&#xA;        //-----------------------------------------------------------------------------------&#xD;&#xA;    	$scope.selection = [];&#xD;&#xA;          $scope.toggleSelection = function toggleSelection(item) {&#xD;&#xA;         $scope.gotOffers=[];&#xD;&#xA;          var idx = $scope.selection.indexOf(item);&#xD;&#xA;          // is currently selected&#xD;&#xA;          if (idx > -1) {&#xD;&#xA;            $scope.selection.splice(idx, 1);&#xD;&#xA;          }&#xD;&#xA;          // is newly selected&#xD;&#xA;          else {&#xD;&#xA;            $scope.selection.push(item);&#xD;&#xA;          }&#xD;&#xA;            for(var i=0;i<$scope.selection.length;i++){&#xD;&#xA;              for(var j=0;j<$scope.offers.length;j++){&#xD;&#xA;                console.log($scope.selection[i].name  +"   "+ $scope.offers[j].modalname)&#xD;&#xA;                if( $scope.selection[i].name  == $scope.offers[j].modalname){&#xD;&#xA;                  var idx = $scope.gotOffers.indexOf($scope.offers[j].Offer_message);&#xD;&#xA;                  if(idx == -1){&#xD;&#xA;                    console.log("inside idx")&#xD;&#xA;                    $scope.gotOffers.push($scope.offers[j]);&#xD;&#xA;                  }&#xD;&#xA;                }&#xD;&#xA;              }&#xD;&#xA;            }&#xD;&#xA;    		console.log($scope.offers);&#xD;&#xA;    		&#xD;&#xA;        };&#xD;&#xA;    	//---------------------------------------------------------------------------------------&#xD;&#xA;         $scope.check = function()&#xD;&#xA;    	 &#xD;&#xA;         {&#xD;&#xA;    	 &#xD;&#xA;    	 &#xD;&#xA;             var checkedItems = [];&#xD;&#xA;             console.log($scope.offerSelected)&#xD;&#xA;                for(var i=0;i<$scope.items.length;i++)&#xD;&#xA;                {&#xD;&#xA;                      if($scope.items[i].selected){&#xD;&#xA;                          checkedItems.push($scope.items[i].name);&#xD;&#xA;                        }&#xD;&#xA;                }&#xD;&#xA;                  console.log(checkedItems) ; &#xD;&#xA;         }&#xD;&#xA;    		&#xD;&#xA;    }