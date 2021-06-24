    function searchTable() {&#xD;&#xA;      var input, filter, found, table, tr, td, i, j;&#xD;&#xA;      input = document.getElementById("search");&#xD;&#xA;      filter = input.value.toUpperCase();&#xD;&#xA;      table = document.getElementById("displaytable");&#xD;&#xA;      tr = table.getElementsByTagName("tr");&#xD;&#xA;      for (i = 0; i < tr.length; i++) {&#xD;&#xA;        td = tr[i].getElementsByTagName("td");&#xD;&#xA;        for (j = 0; j < td.length; j++) {&#xD;&#xA;          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {&#xD;&#xA;            found = true;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        if (found) {&#xD;&#xA;          tr[i].style.display = "";&#xD;&#xA;          found = false;&#xD;&#xA;        } else {&#xD;&#xA;          tr[i].style.display = "none";&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    var cls = document.getElementById("displaytable").getElementsByTagName("td");&#xD;&#xA;    var sum = 0;&#xD;&#xA;    for (var i = 0; i < cls.length; i++) {&#xD;&#xA;      if (cls[i].className == "countable") {&#xD;&#xA;        sum += isNaN(cls[i].innerHTML) ? 0 : parseInt(cls[i].innerHTML);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    document.getElementById('total').innerHTML += sum;