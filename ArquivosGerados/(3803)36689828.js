    ageChart = new Chart(document.getElementById("ageChart").getContext("2d")).Bar({&#xD;&#xA;    	   labels: ['Critical', 'Major', 'Minor'],&#xD;&#xA;    	   datasets: [{&#xD;&#xA;                           fillColor: "rgba(151,187,205,0.5)",&#xD;&#xA;                           strokeColor: "rgba(151,187,205,0.8)",&#xD;&#xA;                           highlightFill: "rgba(151,187,205,0.75)",&#xD;&#xA;                           highlightStroke: "rgba(151,187,205,1)",&#xD;&#xA;                           data: [$scope.employeeData.data1, $scope.employeeData.data2, $scope.employeeData.data3]&#xD;&#xA;    				}]&#xD;&#xA;    				  }, {showScale: false, responsive: true, barValueSpacing: 25});