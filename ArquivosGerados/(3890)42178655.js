    function sortTable(table, order) {&#xD;&#xA;      var asc = order === 'asc',&#xD;&#xA;        tbody = table.find('tbody');&#xD;&#xA;      tbody.find('tr').sort(function(a, b) {&#xD;&#xA;        if (asc) {&#xD;&#xA;          return $('td:first', a).text().localeCompare($('td:first', b).text());&#xD;&#xA;        } else {&#xD;&#xA;          return $('td:first', b).text().localeCompare($('td:first', a).text());&#xD;&#xA;        }&#xD;&#xA;      }).appendTo(tbody);&#xD;&#xA;    }&#xD;&#xA;    $('.add').click(function() {&#xD;&#xA;      $('#Class > tbody').append("<tr><td><a href=/Forum/Class/Run>run</a></td></tr>")&#xD;&#xA;      sortTable($('#Class'), 'asc');&#xD;&#xA;    });