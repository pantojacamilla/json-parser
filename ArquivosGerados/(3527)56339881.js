    var g_donnes = '<?php echo json_encode($data); ?>';&#xD;&#xA;    Highcharts.chart('container', {&#xD;&#xA;      chart: {&#xD;&#xA;        plotBackgroundColor: null,&#xD;&#xA;        plotBorderWidth: null,&#xD;&#xA;        plotShadow: false,&#xD;&#xA;        type: 'pie'&#xD;&#xA;      },&#xD;&#xA;      title: {&#xD;&#xA;        text: 'Browser market shares in January, 2018'&#xD;&#xA;      },&#xD;&#xA;      tooltip: {&#xD;&#xA;        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'&#xD;&#xA;      },&#xD;&#xA;      plotOptions: {&#xD;&#xA;        pie: {&#xD;&#xA;          allowPointSelect: true,&#xD;&#xA;          cursor: 'pointer',&#xD;&#xA;          dataLabels: {&#xD;&#xA;            enabled: true,&#xD;&#xA;            format: '<b>{point.name}</b>: {point.percentage:.1f} %',&#xD;&#xA;            style: {&#xD;&#xA;              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      series: [{&#xD;&#xA;        name: 'Brands',&#xD;&#xA;        colorByPoint: true,&#xD;&#xA;        data: g_donnes&#xD;&#xA;      }]&#xD;&#xA;    });