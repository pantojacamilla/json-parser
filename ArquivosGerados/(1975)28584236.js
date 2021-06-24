    statisticsChart = new Highcharts.Chart({&#xD;&#xA;      chart: {&#xD;&#xA;        renderTo: 'advertisements-graphic-chart',&#xD;&#xA;        type: 'line'&#xD;&#xA;      },&#xD;&#xA;      title: {&#xD;&#xA;        text: ''&#xD;&#xA;      },&#xD;&#xA;      plotOptions: {&#xD;&#xA;        series: {&#xD;&#xA;          connectNulls: true,&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      tooltip: {&#xD;&#xA;        formatter: function() {&#xD;&#xA;          return "ceva";&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      xAxis: {&#xD;&#xA;        categories: []&#xD;&#xA;      },&#xD;&#xA;      yAxis: {&#xD;&#xA;        title: {&#xD;&#xA;          text: ''&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      series: [{&#xD;&#xA;        id: CHART_SERIES_IDS.ALL_PRINTS,&#xD;&#xA;        name: "All prints",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.ALL_VIEWS,&#xD;&#xA;        name: "All views",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.ALL_CLICKS,&#xD;&#xA;        name: "All clicks",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.MY_PRINTS,&#xD;&#xA;        name: "My prints",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.MY_VIEWS,&#xD;&#xA;        name: "My views",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.MY_CLICKS,&#xD;&#xA;        name: "My clicks",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.ADVERT_PRINTS,&#xD;&#xA;        name: "Advert prints",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.ADVERT_VIEWS,&#xD;&#xA;        name: "Advert views",&#xD;&#xA;        data: []&#xD;&#xA;      }, {&#xD;&#xA;        id: CHART_SERIES_IDS.ADVERT_CLICKS,&#xD;&#xA;        name: "Advert clicks",&#xD;&#xA;        data: []&#xD;&#xA;      }, ]&#xD;&#xA;    });