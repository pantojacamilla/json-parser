    var a = Ajax();&#xD;&#xA;    function st() &#xD;&#xA;    	{ &#xD;&#xA;    		if (a.readyState==4)&#xD;&#xA;    		{ &#xD;&#xA;    		document.getElementById('acv').innerHTML=a.responseText;&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;    function update() {&#xD;&#xA;    		&#xD;&#xA;    	url='ball.php';&#xD;&#xA;    	mango = document.getElementById("mango_input").value;&#xD;&#xA;    	orange = document.getElementById("orange_input").value;&#xD;&#xA;    	&#xD;&#xA;    	***var q = "?mango=" + mango + "&orange=" + orange  + ;***&#xD;&#xA;    	a.onreadystatechange=st;&#xD;&#xA;    	a.open("GET",url + q,true);&#xD;&#xA;    	a.send(null);&#xD;&#xA;    	} &#xD;&#xA;    	&#xD;&#xA;Can someone please explain me the snippet of the code or else just tell me what exactly is var q doing.