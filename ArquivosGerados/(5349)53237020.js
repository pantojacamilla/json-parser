    //1. Base save function&#xD;&#xA;    $("#save").click(function (e) {				&#xD;&#xA;      e.preventDefault();&#xD;&#xA;      //step 0 check if logged in&#xD;&#xA;      checksession();&#xD;&#xA;      console.log("teststop"); //just for testing&#xD;&#xA;      //steps x continue execution of session exists&#xD;&#xA;    });&#xD;&#xA;    //2. Session check function&#xD;&#xA;    function checksession(){	&#xD;&#xA;    	$.ajax({ &#xD;&#xA;    	type: "GET",&#xD;&#xA;    	url:"xxxx/sessioncheck.php",&#xD;&#xA;    	dataType: "text",&#xD;&#xA;    	cache: false,&#xD;&#xA;    	success: function(data){&#xD;&#xA;    			if(data == "no"){&#xD;&#xA;    				return;&#xD;&#xA;    			} else {} //continue	&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;    }&#xD;&#xA;	