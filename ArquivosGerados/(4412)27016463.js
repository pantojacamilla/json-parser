    $(document).ready(function(){&#xD;&#xA;      var url = 'supplyCalendarDayDetailsCharts.jsp?date=' + getEl('date').value + '&action=COG';&#xD;&#xA;      $.ajax({&#xD;&#xA;        url: url,&#xD;&#xA;        type: "GET",&#xD;&#xA;        dataType: "json",&#xD;&#xA;        success: function(data) {&#xD;&#xA;          var dataTmp = [];&#xD;&#xA;          for (var i in data) {&#xD;&#xA;            var dataPush = [data[i].cp_code, parseInt(data[i].value)];&#xD;&#xA;            dataTmp.push(dataPush);&#xD;&#xA;          }&#xD;&#xA;            var plot1 = jQuery.jqplot('chartdiv', [dataTmp], &#xD;&#xA;              { &#xD;&#xA;                seriesDefaults: {&#xD;&#xA;                  // Make this a pie chart.&#xD;&#xA;                  renderer: jQuery.jqplot.PieRenderer, &#xD;&#xA;                  rendererOptions: {&#xD;&#xA;                    // Put data labels on the pie slices.&#xD;&#xA;                    // By default, labels show the percentage of the slice.&#xD;&#xA;                    dataLabels: 'value',&#xD;&#xA;                    showDataLabels: true&#xD;&#xA;                  }&#xD;&#xA;                } &#xD;&#xA;              }&#xD;&#xA;            );&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    }); 