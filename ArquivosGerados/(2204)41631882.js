        <!DOCTYPE html>&#xD;&#xA;        <html>&#xD;&#xA;        <head>&#xD;&#xA;    	<meta charset="utf-8">	&#xD;&#xA;      	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">&#xD;&#xA;    	<script>&#xD;&#xA;       //This is here work properly.&#xD;&#xA;       console.log("addPostmanUser");&#xD;&#xA;    		var data = JSON.stringify({&#xD;&#xA;    			  "email": "holahola@local.es",&#xD;&#xA;    			  "password": "12345",&#xD;&#xA;    			  "username": "holahola",&#xD;&#xA;    			  "name": "holahola",&#xD;&#xA;    			  "surname": "toledo",&#xD;&#xA;    			  "birthDate": 687045600000,&#xD;&#xA;    			  "enabled": true,&#xD;&#xA;    			  "authorities": [],&#xD;&#xA;    			  "groups": [],&#xD;&#xA;    			  "character": null,&#xD;&#xA;    			  "locale": null,&#xD;&#xA;    			  "registrationToken": null,&#xD;&#xA;    			  "facebookId": null,&#xD;&#xA;    			  "pushToken": null,&#xD;&#xA;    			  "termsDate": null&#xD;&#xA;    			});&#xD;&#xA;    		var xhr = new XMLHttpRequest();&#xD;&#xA;    		xhr.withCredentials = true;&#xD;&#xA;    		xhr.addEventListener("readystatechange", function (e) {&#xD;&#xA;    		  if (xhr.readyState === 4) {&#xD;&#xA;    		    console.log("addPostmanUser response: ");&#xD;&#xA;    		    console.log(xhr);&#xD;&#xA;    		  }&#xD;&#xA;    		});&#xD;&#xA;    		xhr.open("POST", "http://IP/user",true);&#xD;&#xA;    		xhr.setRequestHeader("accept", "application/json");&#xD;&#xA;    		xhr.setRequestHeader("content-type", "application/json");&#xD;&#xA;    		xhr.setRequestHeader("cache-control", "no-cache");		&#xD;&#xA;    		xhr.send(data);&#xD;&#xA;        //this one doesn't work&#xD;&#xA;    	function inSameFile(){&#xD;&#xA;    		console.log("addPostmanUser");&#xD;&#xA;    		var data = JSON.stringify({&#xD;&#xA;    			  "email": "holahola@local.es",&#xD;&#xA;    			  "password": "12345",&#xD;&#xA;    			  "username": "holahola",&#xD;&#xA;    			  "name": "holahola",&#xD;&#xA;    			  "surname": "toledo",&#xD;&#xA;    			  "birthDate": 687045600000,&#xD;&#xA;    			  "enabled": true,&#xD;&#xA;    			  "authorities": [],&#xD;&#xA;    			  "groups": [],&#xD;&#xA;    			  "character": null,&#xD;&#xA;    			  "locale": null,&#xD;&#xA;    			  "registrationToken": null,&#xD;&#xA;    			  "facebookId": null,&#xD;&#xA;    			  "pushToken": null,&#xD;&#xA;    			  "termsDate": null&#xD;&#xA;    			});&#xD;&#xA;    		var xhr = new XMLHttpRequest();&#xD;&#xA;    		xhr.withCredentials = true;&#xD;&#xA;    		xhr.addEventListener("readystatechange", function (e) {&#xD;&#xA;    		  if (xhr.readyState === 4) {&#xD;&#xA;    		    console.log("addPostmanUser response: ");&#xD;&#xA;    		    console.log(xhr);&#xD;&#xA;    		  }&#xD;&#xA;    		});&#xD;&#xA;    		xhr.open("POST", "http://IP/user",true);&#xD;&#xA;    		xhr.setRequestHeader("accept", "application/json");&#xD;&#xA;    		xhr.setRequestHeader("content-type", "application/json");&#xD;&#xA;    		xhr.setRequestHeader("cache-control", "no-cache");		&#xD;&#xA;    		xhr.send(data);&#xD;&#xA;    	}&#xD;&#xA;    	</script>&#xD;&#xA;        </head>&#xD;&#xA;        <body>&#xD;&#xA;       <form>&#xD;&#xA;       <div>	&#xD;&#xA;    	 <a class="enter" href="" onClick="inSameFile();" id="btn_register"   >Registrarme</a><br>&#xD;&#xA;    	<a class="enter" href="" id="btn_cancel" >Cancelar</a><br>&#xD;&#xA;      </div>&#xD;&#xA;      <div>&#xD;&#xA;    	  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>&#xD;&#xA;      	  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>&#xD;&#xA;    </div>&#xD;&#xA;    </form>&#xD;&#xA;    </body>&#xD;&#xA;    </html>