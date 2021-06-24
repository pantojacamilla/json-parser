    var chartDefault = {&#xD;&#xA;      type: 'bar',&#xD;&#xA;      data: {&#xD;&#xA;        labels: ['30', '45', '60', '90', '120', '120+'],&#xD;&#xA;        datasets: [{&#xD;&#xA;          type: 'bar',&#xD;&#xA;          label: 'Receivable',&#xD;&#xA;          data: [730, 492.5, 120, 4732.5, 2760.85, 0],&#xD;&#xA;          backgroundColor: 'rgba(75, 192, 192, 0.2)',&#xD;&#xA;          borderColor: 'rgba(75, 192, 192, 1)',&#xD;&#xA;          borderWidth: 1&#xD;&#xA;        }, {&#xD;&#xA;          type: 'bar',&#xD;&#xA;          label: 'Past Due',&#xD;&#xA;          data: [2760.85, 0, 0, 0, 0, 0],&#xD;&#xA;          backgroundColor: 'rgba(255, 99, 132, 0.2)',&#xD;&#xA;          borderColor: 'rgba(255,99,132,1)',&#xD;&#xA;          borderWidth: 1&#xD;&#xA;        }, {&#xD;&#xA;          type: 'scatter',&#xD;&#xA;          label: 'Invoice',&#xD;&#xA;          data: [{"x":106,"y":177.7},{"x":101,"y":1},{"x":92,"y":1},{"x":88,"y":120},{"x":65,"y":4},{"x":66,"y":120},{"x":59,"y":120},{"x":36,"y":372.5},{"x":35,"y":120},{"x":29,"y":120},{"x":4,"y":185},{"x":4,"y":120},{"x":1,"y":240},{"x":1,"y":65}],&#xD;&#xA;          xAxisID: 'invoice-time',&#xD;&#xA;          yAxisID: 'invoice-amount',&#xD;&#xA;          backgroundColor: 'rgba(75, 00, 150, 0.2)',&#xD;&#xA;          borderColor: 'rgba(75, 00, 150,1)',&#xD;&#xA;          borderWidth: 2&#xD;&#xA;        }]&#xD;&#xA;      },&#xD;&#xA;      options: {&#xD;&#xA;        scales: {&#xD;&#xA;          xAxes: [{&#xD;&#xA;            display: true,&#xD;&#xA;            stacked: true,&#xD;&#xA;            scaleLabel: {&#xD;&#xA;              display: true,&#xD;&#xA;              labelString: 'Days'&#xD;&#xA;            },&#xD;&#xA;          }, {&#xD;&#xA;            id: 'invoice-time',&#xD;&#xA;            display: false,&#xD;&#xA;            stacked: false,&#xD;&#xA;            scaleLabel: {&#xD;&#xA;              display: false,&#xD;&#xA;              labelString: 'Days'&#xD;&#xA;            },&#xD;&#xA;            ticks: {&#xD;&#xA;              beginAtZero: true,&#xD;&#xA;              stepSize: 1,&#xD;&#xA;              suggestedMax: 125&#xD;&#xA;            }&#xD;&#xA;          }],&#xD;&#xA;          yAxes: [{&#xD;&#xA;            display: true,&#xD;&#xA;            stacked: true,&#xD;&#xA;            scaleLabel: {&#xD;&#xA;              display: true,&#xD;&#xA;              labelString: 'Dollar Amount'&#xD;&#xA;            },&#xD;&#xA;            ticks: {&#xD;&#xA;              beginAtZero: true,&#xD;&#xA;            }&#xD;&#xA;          }, {&#xD;&#xA;            id: 'invoice-amount',&#xD;&#xA;            display: false,&#xD;&#xA;            stacked: false,&#xD;&#xA;            scaleLabel: {&#xD;&#xA;              display: false,&#xD;&#xA;              labelString: 'Dollar Amount'&#xD;&#xA;            },&#xD;&#xA;            ticks: {&#xD;&#xA;              beginAtZero: true,&#xD;&#xA;            }&#xD;&#xA;          }]&#xD;&#xA;        },&#xD;&#xA;      }&#xD;&#xA;    };&#xD;&#xA;    var chart = new Chart($('#creditSat'), chartDefault);