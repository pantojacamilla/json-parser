    const BASE_URL = "https://zagster-service.herokuapp.com"&#xD;&#xA;    const G5_TC = "/rides/count/g5"&#xD;&#xA;    const COL_TC = "/rides/count/columbia_simpson"&#xD;&#xA;    const DRAKE_TC = "/rides/count/drake_park"&#xD;&#xA;    const GALV_TC = "/rides/count/galveston"&#xD;&#xA;    const GRC_TC = "/rides/count/grc"&#xD;&#xA;    const OLD_TC = "/rides/count/old_mill"&#xD;&#xA;    const OSU_TC = "/rides/count/osu_cascades"&#xD;&#xA;    const TEN_TC = "/rides/count/ten_barrel"&#xD;&#xA;    var ChartData = [];&#xD;&#xA;    $(updateView)&#xD;&#xA;    function updateView() {&#xD;&#xA;       $.when(&#xD;&#xA;            $.getJSON(BASE_URL + G5_TC, updateChartData00), &#xD;&#xA;                &#xD;&#xA;            $.getJSON(BASE_URL + COL_TC, updateChartData01), &#xD;&#xA;                &#xD;&#xA;            $.getJSON(BASE_URL + DRAKE_TC, updateChartData02),&#xD;&#xA;             &#xD;&#xA;            $.getJSON(BASE_URL + GALV_TC, updateChartData03),&#xD;&#xA;                        &#xD;&#xA;            $.getJSON(BASE_URL + GRC_TC, updateChartData04),&#xD;&#xA;        &#xD;&#xA;            $.getJSON(BASE_URL + OLD_TC, updateChartData05),&#xD;&#xA;                   &#xD;&#xA;            $.getJSON(BASE_URL + OSU_TC, updateChartData06),&#xD;&#xA;               &#xD;&#xA;            $.getJSON(BASE_URL + TEN_TC, updateChartData07)&#xD;&#xA;            &#xD;&#xA;       ).then(displayGraph);&#xD;&#xA;    }&#xD;&#xA;    function updateChartData00(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData01(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData02(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData03(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData04(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData05(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData06(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData07(data) {&#xD;&#xA;        console.log(data);&#xD;&#xA;    ChartData.push(data.count)&#xD;&#xA;    }&#xD;&#xA;    /*&#xD;&#xA;     Console log Strings &#xD;&#xA;    function updateChartData00(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData01(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData02(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData03(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData04(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData05(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData06(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function updateChartData07(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    function ChartData(data) {&#xD;&#xA;    	console.log(data)&#xD;&#xA;    }&#xD;&#xA;    */&#xD;&#xA;    /* Visualization JS- Source:"https://www.chartjs.org/docs/latest/charts/bar.html" */&#xD;&#xA;    function displayGraph() {&#xD;&#xA;    var ctx = document.getElementById("myChart").getContext('2d')&#xD;&#xA;    var myChart = new Chart(ctx, {&#xD;&#xA;        type: 'bar',&#xD;&#xA;        data: {&#xD;&#xA;            labels: ["G5", "Columbia/Simpson", "Drake Park", "Galveston", "GRC", "Old Mill", "OSU-Cascades", "Ten Barrel"],&#xD;&#xA;            datasets: [{&#xD;&#xA;                label: 'Total Count of Rides Per Station',&#xD;&#xA;                data: ChartData,&#xD;&#xA;                backgroundColor: [&#xD;&#xA;                    'rgba(255, 99, 132, 0.2)',&#xD;&#xA;                    'rgba(54, 162, 235, 0.2)',&#xD;&#xA;                    'rgba(255, 206, 86, 0.2)',&#xD;&#xA;                    'rgba(75, 192, 192, 0.2)',&#xD;&#xA;                    'rgba(153, 102, 255, 0.2)',&#xD;&#xA;                    'rgba(255, 159, 64, 0.2)',&#xD;&#xA;                    'rgba(58,112,42,0.2)',&#xD;&#xA;                    'rgba(76,212,40,0.2)'&#xD;&#xA;                ],&#xD;&#xA;                borderColor: [&#xD;&#xA;                    'rgba(255,99,132,1)',&#xD;&#xA;                    'rgba(54, 162, 235, 1)',&#xD;&#xA;                    'rgba(255, 206, 86, 1)',&#xD;&#xA;                    'rgba(75, 192, 192, 1)',&#xD;&#xA;                    'rgba(153, 102, 255, 1)',&#xD;&#xA;                    'rgba(255, 159, 64, 1)',&#xD;&#xA;                    'rgba(54, 162, 217, 1)',&#xD;&#xA;                    'rgba(76,242,40,1)'&#xD;&#xA;                ],&#xD;&#xA;                borderWidth: 1&#xD;&#xA;            }]&#xD;&#xA;        },&#xD;&#xA;        options: {&#xD;&#xA;          &#xD;&#xA;          legend: {&#xD;&#xA;                labels: {&#xD;&#xA;                    fontColor: 'white',&#xD;&#xA;                    fontSize: 15.5&#xD;&#xA;                }&#xD;&#xA;            },&#xD;&#xA;          scales: {&#xD;&#xA;                xAxes: [{gridLines: {&#xD;&#xA;                          display: false ,&#xD;&#xA;                          color: 'rgba(255,255,255, 0.8)'&#xD;&#xA;                       },&#xD;&#xA;                        ticks: {&#xD;&#xA;                          fontColor: 'white',&#xD;&#xA;                          fontSize: 14&#xD;&#xA;                        }&#xD;&#xA;                }]  ,&#xD;&#xA;                yAxes: [{&#xD;&#xA;                    ticks: {&#xD;&#xA;                        beginAtZero:true,&#xD;&#xA;                        fontColor: 'white',&#xD;&#xA;                        fontSize: 14&#xD;&#xA;                    },&#xD;&#xA;                    gridLines: {&#xD;&#xA;                          display: false ,&#xD;&#xA;                          color: 'rgba(255,255,255, 0.8)'&#xD;&#xA;                    },  &#xD;&#xA;                }]&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;      &#xD;&#xA;    });&#xD;&#xA;    }&#xD;&#xA;    /* Drop Down Function-Nav Bar  -----**Source**:https://www.w3schools.com/css/css_dropdowns.asp" */&#xD;&#xA;    function myFunction() {&#xD;&#xA;        document.getElementById("myDropdown").classList.toggle("show");&#xD;&#xA;    }&#xD;&#xA;    // Close the dropdown if the user clicks outside of it-----**Source**:https://www.w3schools.com/css/css_dropdowns.asp" //&#xD;&#xA;    window.onclick = function(e) {&#xD;&#xA;      if (!e.target.matches('.dropbtn')) {&#xD;&#xA;        var myDropdown = document.getElementById("myDropdown");&#xD;&#xA;          if (myDropdown.classList.contains('show')) {&#xD;&#xA;            myDropdown.classList.remove('show');&#xD;&#xA;          }&#xD;&#xA;      }&#xD;&#xA;    }