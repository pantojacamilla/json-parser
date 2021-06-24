    var chart = AmCharts.makeChart( "chartdiv", {&#xD;&#xA;        "type": "serial",&#xD;&#xA;    	"theme": "light",&#xD;&#xA;      "addClassNames": true,&#xD;&#xA;      "marginRight": 70,&#xD;&#xA;      "panEventsEnabled": false,&#xD;&#xA;      "titles": [{&#xD;&#xA;        "text": "Click on Country to see Visitor details"&#xD;&#xA;      }],&#xD;&#xA;         "dataProvider": [&#xD;&#xA;          {&#xD;&#xA;        "country": "USA",&#xD;&#xA;        "visits": 3025,&#xD;&#xA;        "color": "#FF0F00",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "China",&#xD;&#xA;        "visits": 1882,&#xD;&#xA;        "color": "#FF6600",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "Japan",&#xD;&#xA;        "visits": 1809,&#xD;&#xA;        "color": "#FF9E01",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "Germany",&#xD;&#xA;        "visits": 1322,&#xD;&#xA;        "color": "#FCD202",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "UK",&#xD;&#xA;        "visits": 1122,&#xD;&#xA;        "color": "#F8FF01",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "France",&#xD;&#xA;        "visits": 1114,&#xD;&#xA;        "color": "#B0DE09",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "India",&#xD;&#xA;        "visits": 984,&#xD;&#xA;        "color": "#04D215",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "Spain",&#xD;&#xA;        "visits": 711,&#xD;&#xA;        "color": "#0D8ECF",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "Netherlands",&#xD;&#xA;        "visits": 665,&#xD;&#xA;        "color": "#0D52D1",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "Russia",&#xD;&#xA;        "visits": 580,&#xD;&#xA;        "color": "#2A0CD0",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "South Korea",&#xD;&#xA;        "visits": 443,&#xD;&#xA;        "color": "#8A0CCF",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }, {&#xD;&#xA;        "country": "Canada",&#xD;&#xA;        "visits": 441,&#xD;&#xA;        "color": "#CD0D74",&#xD;&#xA;        "url": "https://codepen.io/"&#xD;&#xA;      }&#xD;&#xA;      ],&#xD;&#xA;        "responsive": {&#xD;&#xA;        "enabled": true,&#xD;&#xA;    	"rules": [&#xD;&#xA;    	{&#xD;&#xA;          "maxWidth": 600,&#xD;&#xA;          "overrides": {&#xD;&#xA;            "rotate": true,&#xD;&#xA;    		"creditsPosition": "bottom-right",&#xD;&#xA;    		 "columnSpacing": 20,&#xD;&#xA;    		"minMarginLeft": 38,&#xD;&#xA;    		   "depth3D": 0,&#xD;&#xA;    		"angle": 0,&#xD;&#xA;    		"legend": {&#xD;&#xA;    			"enabled": true,&#xD;&#xA;    			"useGraphSettings": true,&#xD;&#xA;    			"labelText": "Country",&#xD;&#xA;    			"fontSize": 14&#xD;&#xA;    		},&#xD;&#xA;    		"categoryAxis": {&#xD;&#xA;    			"inside": true,&#xD;&#xA;    			"fontSize": 13,&#xD;&#xA;    			"gridPosition": "start",&#xD;&#xA;    			"startOnAxis": true,&#xD;&#xA;    			"gridAlpha": 0,&#xD;&#xA;    			"minVerticalGap": 5&#xD;&#xA;    		}&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;    	]&#xD;&#xA;      },&#xD;&#xA;      "valueAxes": [{&#xD;&#xA;        "axisAlpha": 0,&#xD;&#xA;        "position": "left",&#xD;&#xA;        "title": "No. of Visitors"&#xD;&#xA;      }],&#xD;&#xA;      "startDuration": 1,&#xD;&#xA;      "graphs": [{&#xD;&#xA;        "balloonText": "[[category]]: <b>[[value]]</b>",&#xD;&#xA;    	"fillColorsField": "color",&#xD;&#xA;        "fillAlphas": 0.9,&#xD;&#xA;        "lineAlpha": 0.2,&#xD;&#xA;        "type": "column",&#xD;&#xA;    	"urlField": "url",&#xD;&#xA;    	"urlTarget": "_blank",&#xD;&#xA;        "valueField": "visits"&#xD;&#xA;      }],&#xD;&#xA;      "depth3D": 10,&#xD;&#xA;    	"angle": 45,&#xD;&#xA;      "chartCursor": {&#xD;&#xA;        "categoryBalloonEnabled": false,&#xD;&#xA;        "cursorAlpha": 0,&#xD;&#xA;        "zoomable": false&#xD;&#xA;      },&#xD;&#xA;      "categoryField": "country",&#xD;&#xA;      "categoryAxis": {&#xD;&#xA;        "gridPosition": "start",&#xD;&#xA;    	"classNameField": "Ctglabel",&#xD;&#xA;    	"labelRotation": 45,&#xD;&#xA;    	"minHorizontalGap": 50,&#xD;&#xA;    	"title": "Country",&#xD;&#xA;    	"urlTarget": "_blank",&#xD;&#xA;        "listeners": [{&#xD;&#xA;          "event": "clickItem",&#xD;&#xA;          "method": function(event) {&#xD;&#xA;    		window.open(event.serialDataItem.dataContext.url, '_blank');&#xD;&#xA;          }&#xD;&#xA;        }]&#xD;&#xA;      },&#xD;&#xA;      "export": {&#xD;&#xA;        "enabled": true&#xD;&#xA;      }&#xD;&#xA;      } );