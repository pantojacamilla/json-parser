    $(function() {&#xD;&#xA;      $('#container').highcharts({&#xD;&#xA;        yAxis: {&#xD;&#xA;          // if you include the lines below, the metric prefixes disappear&#xD;&#xA;          /*&#xD;&#xA;          labels: {&#xD;&#xA;              format: '${value}'&#xD;&#xA;          }&#xD;&#xA;          */&#xD;&#xA;        },&#xD;&#xA;        series: [{&#xD;&#xA;          data: [15000, 20000, 30000]&#xD;&#xA;        }]&#xD;&#xA;      });&#xD;&#xA;    });