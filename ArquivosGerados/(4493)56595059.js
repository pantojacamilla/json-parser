      $(function () {&#xD;&#xA;            var myChart = Highcharts.chart('chart1', {&#xD;&#xA;                chart: {&#xD;&#xA;                    type: 'bar'&#xD;&#xA;                },&#xD;&#xA;                title: {&#xD;&#xA;                    text: 'Monthly Statistics'&#xD;&#xA;                },&#xD;&#xA;                xAxis: {&#xD;&#xA;                    categories: ['ABC', 'DEF']&#xD;&#xA;                },&#xD;&#xA;                yAxis: {&#xD;&#xA;                    title: {&#xD;&#xA;                        text: 'Fruit eaten'&#xD;&#xA;                    }&#xD;&#xA;                },&#xD;&#xA;                series: [{&#xD;&#xA;                    name: 'This Month',&#xD;&#xA;                    data: [4, 1]&#xD;&#xA;                }, {&#xD;&#xA;                    name: 'Average',&#xD;&#xA;                    data: [3, 2]&#xD;&#xA;                }]&#xD;&#xA;            });&#xD;&#xA;    &#xD;&#xA;            var myChart2 = Highcharts.chart('chart2', {&#xD;&#xA;                chart: {&#xD;&#xA;                    type: 'pie'&#xD;&#xA;                },&#xD;&#xA;                title: {&#xD;&#xA;                    text: 'ABCDEF'&#xD;&#xA;                },&#xD;&#xA;                plotOptions: {&#xD;&#xA;                    pie: {&#xD;&#xA;                        allowPointSelect: true,&#xD;&#xA;                        cursor: 'pointer',&#xD;&#xA;                        dataLabels: {&#xD;&#xA;                            enabled: true,&#xD;&#xA;                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                },&#xD;&#xA;                  series: [{&#xD;&#xA;            name: 'Brands',&#xD;&#xA;            colorByPoint: true,&#xD;&#xA;            data: [{&#xD;&#xA;                name: 'AXD',&#xD;&#xA;                y: 67.34,&#xD;&#xA;                sliced: true,&#xD;&#xA;                selected: true&#xD;&#xA;            }, {&#xD;&#xA;                name: 'ERT',&#xD;&#xA;                y: 11.88&#xD;&#xA;            }, {&#xD;&#xA;                name: 'ASD',&#xD;&#xA;                y: 20.78&#xD;&#xA;            }]&#xD;&#xA;        }]&#xD;&#xA;            });&#xD;&#xA;        });