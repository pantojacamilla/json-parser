    function displayList()&#xD;&#xA;    {&#xD;&#xA;    	var arr1=["apple", "banana", "grapes", "orange", "kiwi", "guava"];&#xD;&#xA;    	var arr2=["apple", "orange", "kiwi"];&#xD;&#xA;    	var arrData;&#xD;&#xA;    	var output="";&#xD;&#xA;    	&#xD;&#xA;    for (var i = 0; i < arr1.length; i++) {&#xD;&#xA;        for (var j = 0; j < arr2.length; j++) {&#xD;&#xA;    		if ( arr1[i]== arr2[i])&#xD;&#xA;    		{&#xD;&#xA;    		arrData=arr2[j];&#xD;&#xA;            output+= '<input type="checkbox" value='+arrData+' name="box2" checked >'  + '   ' + arrData+'   '+'<br><br>'; &#xD;&#xA;    		document.getElementById("demo2").innerHTML=output;&#xD;&#xA;    		}&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    }