    function doSomething(){&#xD;&#xA;	var table, tr, td, i;&#xD;&#xA;	&#xD;&#xA;	table = document.getElementById("myTable");&#xD;&#xA;	tr = table.getElementsByTagName("tr");&#xD;&#xA;	for(i = 0; i < tr.length-1; i++){&#xD;&#xA;		//td = tr[i].getElementsByTagName("td")[2];&#xD;&#xA;		&#xD;&#xA;		var e = tr.getElementById("ABC");&#xD;&#xA;		&#xD;&#xA;		if(document.getElementById("cb1").checked &&  e.options[0].value == 0){&#xD;&#xA;			tr[i].style.display = "none";&#xD;&#xA;			&#xD;&#xA;		}else{&#xD;&#xA;			tr[i].style.display = "";&#xD;&#xA;		}&#xD;&#xA;	}&#xD;&#xA;}&#xD;&#xA;        <label>click me <INPUT type="checkbox" id="cb1" onclick="doSomething();"></label>&#xD;&#xA;    &#xD;&#xA;    <table id="myTable">&#xD;&#xA;    &#xD;&#xA;    <tr><td>Something</td><td>Some other Thing</td><td><select id="ABC"  name="sel1">&#xD;&#xA;    <option value=0>Default</option>&#xD;&#xA;    <option value=1>Not Default</option>&#xD;&#xA;    </select></td></tr>&#xD;&#xA;    &#xD;&#xA;    </table>&#xD;&#xA;   