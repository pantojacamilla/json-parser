        <!DOCTYPE html>&#xD;&#xA;        <html>&#xD;&#xA;        <body>&#xD;&#xA;        &#xD;&#xA;        <h2>My First JavaScript</h2>&#xD;&#xA;        &#xD;&#xA;        <input type="text" id="txt1" >&#xD;&#xA;        <p id="msg1"></p>&#xD;&#xA;        <input type="text" id="txt2" onkeypress="myFun()">&#xD;&#xA;        <p id="msg2"></p>&#xD;&#xA;        <input type="button" value="click" >&#xD;&#xA;        &#xD;&#xA;        <p id="demo"></p>&#xD;&#xA;        <script>&#xD;&#xA;        	var a = document.getElementById("txt1");&#xD;&#xA;            var b = document.getElementById("txt2");&#xD;&#xA;           &#xD;&#xA;            function myFun()&#xD;&#xA;            {&#xD;&#xA;            	if(a.value!=b.value)&#xD;&#xA;                {&#xD;&#xA;                	document.getElementById("msg2").innerHTML = "<span style='color:red'>Did not match please recheck it</span>";&#xD;&#xA;                    &#xD;&#xA;                }&#xD;&#xA;                else if(a.value==b.value)&#xD;&#xA;                {&#xD;&#xA;                alert(a.value);&#xD;&#xA;                	document.getElementById("msg2").innerHTML = "<span style='color:green'>match please recheck it</span>";&#xD;&#xA;                    &#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            &#xD;&#xA;        </script>&#xD;&#xA;        &#xD;&#xA;        </body>&#xD;&#xA;        </html> 