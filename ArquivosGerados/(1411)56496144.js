$( "imgDiv" ).mouseover(&#xD;&#xA;	function() {&#xD;&#xA;	    $("tdiv").textContent = "hovering";&#xD;&#xA;	}, &#xD;&#xA;	function() {&#xD;&#xA;	    $("tdiv").textContent = 'title';&#xD;&#xA;	}&#xD;&#xA;);&#xD;&#xA;I've also replaced "mouseover" with "hover". I've used a variable and the actual div in place of "imgDiv".&#xD;&#xA;This is what my code looks like. Here's a JSFiddle: https://jsfiddle.net/ZEZEME/1tb7zg3s/14/&#xD;&#xA;HTML&#xD;&#xA;<div id="imgDiv">&#xD;&#xA;     <div id=titleDiv>title</div>&#xD;&#xA;</div>&#xD;&#xA;CSS&#xD;&#xA;body {&#xD;&#xA;  background: white;&#xD;&#xA;  padding: 20px;&#xD;&#xA;  font-family: Helvetica;&#xD;&#xA;}&#xD;&#xA;#imgDiv {&#xD;&#xA;  width: 100px;&#xD;&#xA;  height: 100px;&#xD;&#xA;  background-color: pink;&#xD;&#xA;}&#xD;&#xA;JS&#xD;&#xA;imgDiv = document.getElementById('imgDiv');&#xD;&#xA;tDiv = document.getElementById('titleDiv');&#xD;&#xA;$( "imgDiv" ).mouseover(&#xD;&#xA;	function() {&#xD;&#xA;	    $("tdiv").textContent = "hovering";&#xD;&#xA;	}, &#xD;&#xA;	function() {&#xD;&#xA;	    $("tdiv").textContent = 'title';&#xD;&#xA;	}&#xD;&#xA;);