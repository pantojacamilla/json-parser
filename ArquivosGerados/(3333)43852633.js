    $(function() {&#xD;&#xA;    			var item = [];&#xD;&#xA;    			var locations = [&#xD;&#xA;    			  {&#xD;&#xA;    			    "State": "Oklahoma",&#xD;&#xA;    			    "ZIP": "73169",&#xD;&#xA;    			    "City": ""&#xD;&#xA;    			  },&#xD;&#xA;    			  {&#xD;&#xA;    			    "State": "Oklahoma",&#xD;&#xA;    			    "ZIP": "73169",&#xD;&#xA;    			    "City": ""&#xD;&#xA;    			  },&#xD;&#xA;    			  {&#xD;&#xA;    			    "State": "Oklahoma",&#xD;&#xA;    			    "ZIP": "73170",&#xD;&#xA;    			    "City": ""&#xD;&#xA;    			  },&#xD;&#xA;    			  {&#xD;&#xA;    			    "State": "Oklahoma",&#xD;&#xA;    			    "ZIP": "73172",&#xD;&#xA;    			    "City": ""&#xD;&#xA;    			  },&#xD;&#xA;    			  {&#xD;&#xA;    			    "State": "Oklahoma",&#xD;&#xA;    			    "ZIP": "73173",&#xD;&#xA;    			    "City": ""&#xD;&#xA;    			  }&#xD;&#xA;    			];&#xD;&#xA;    		    $.each(locations, function(i, item) {&#xD;&#xA;    				var zip = item.ZIP;&#xD;&#xA;    				var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyA75wif8_yewifGSqVFnR3U50zuW_EnAns";&#xD;&#xA;    				$.get(url, function(loc) {&#xD;&#xA;    					for(var i=0;i<loc.results.length;i++) {&#xD;&#xA;    						var address = loc.results[i].formatted_address;&#xD;&#xA;    						var city = address.split(',', 1)[0];&#xD;&#xA;    						item.City = city;&#xD;&#xA;    						console.log(item);&#xD;&#xA;    					}&#xD;&#xA;    				});&#xD;&#xA;    		    });&#xD;&#xA;    });