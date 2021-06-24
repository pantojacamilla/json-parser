    var chart = AmCharts.makeChart("chartdiv", {&#xD;&#xA;            "type": "serial",&#xD;&#xA;            "theme": "dark",&#xD;&#xA;            "dataLoader": {&#xD;&#xA;              "url": "data/serial2.json",&#xD;&#xA;              "showErrors": true,&#xD;&#xA;              "complete": function ( chart ) {&#xD;&#xA;                console.log( "Loading complete" );&#xD;&#xA;              },&#xD;&#xA;              "load": function ( options, chart ) {&#xD;&#xA;                console.log( "File loaded: ", options.url );&#xD;&#xA;              },&#xD;&#xA;              "error": function ( options, chart ) {&#xD;&#xA;                console.log( "Error occured loading file: ", options.url );&#xD;&#xA;              }&#xD;&#xA;            },&#xD;&#xA;            "categoryField": "year",&#xD;&#xA;            "startDuration": 1,&#xD;&#xA;            "rotate": false,&#xD;&#xA;            "categoryAxis": {&#xD;&#xA;              "gridPosition": "start"&#xD;&#xA;            },&#xD;&#xA;            "valueAxes": [{&#xD;&#xA;              "position": "top",&#xD;&#xA;              "title": "Million USD",&#xD;&#xA;              "minorGridEnabled": true&#xD;&#xA;            }],&#xD;&#xA;            "graphs": [{&#xD;&#xA;              "type": "column",&#xD;&#xA;              "title": "Income",&#xD;&#xA;              "valueField": "income",&#xD;&#xA;              "fillAlphas":1,&#xD;&#xA;              "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>"&#xD;&#xA;            }, {&#xD;&#xA;              "type": "line",&#xD;&#xA;              "title": "Expenses",&#xD;&#xA;              "valueField": "expenses",&#xD;&#xA;              "lineThickness": 2,&#xD;&#xA;              "bullet": "round",&#xD;&#xA;              "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>"&#xD;&#xA;            }],&#xD;&#xA;            "legend": {&#xD;&#xA;              "useGraphSettings": true&#xD;&#xA;            },&#xD;&#xA;            "creditsPosition": "top-right",&#xD;&#xA;            "responsive": {&#xD;&#xA;              "enabled": true&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;          function reloadData() {&#xD;&#xA;            chart.dataLoader.loadData();&#xD;&#xA;          }&#xD;&#xA;        