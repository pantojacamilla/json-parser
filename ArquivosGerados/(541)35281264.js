    var check = 0;&#xD;&#xA;        setInterval(loop,1000);&#xD;&#xA;        function wait(){&#xD;&#xA;        	document.write("waiting 2seconds");&#xD;&#xA;        }&#xD;&#xA;        function loop(){&#xD;&#xA;        	if(check == 1){&#xD;&#xA;        		setTimeout(wait,2000); // here at this point I want to pause function loop for 2seconds&#xD;&#xA;        		check = 0;&#xD;&#xA;        	}&#xD;&#xA;        	document.write("doing something every 1sec")&#xD;&#xA;        }&#xD;&#xA;        function btnPress(){&#xD;&#xA;        	check = 1;&#xD;&#xA;        }