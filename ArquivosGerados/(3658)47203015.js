    function addRow(tableID) {&#xD;&#xA;      var table = document.getElementById(tableID);&#xD;&#xA;      var rowCount = table.rows.length;&#xD;&#xA;      var row = table.insertRow(rowCount);&#xD;&#xA;      var colCount = table.rows[0].cells.length;&#xD;&#xA;      for(var i=0; i<colCount; i++) {&#xD;&#xA;        var newcell = row.insertCell(i);&#xD;&#xA;        newcell.innerHTML = table.rows[0].cells[i].innerHTML;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;       $('.datetimepicker').datetimepicker({&#xD;&#xA;          format : "YYYY-MM-DD",&#xD;&#xA;          ignoreReadonly: true&#xD;&#xA;        });&#xD;&#xA;    })