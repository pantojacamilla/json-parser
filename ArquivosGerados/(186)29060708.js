    var url = "http://192.168.1.100/test.php";&#xD;&#xA;    var xhr = Titanium.Network.createHTTPClient();&#xD;&#xA;    xhr.onerror = function(e) {&#xD;&#xA;    swim.lib.err('' + e.error);&#xD;&#xA;    alert('HTTP ERR...');&#xD;&#xA;    };&#xD;&#xA;    xhr.onload = function(e) {&#xD;&#xA;    Ti.API.info(this.responseText);&#xD;&#xA;    alert('success');&#xD;&#xA;    };&#xD;&#xA;    xhr.open("POST", url);&#xD;&#xA;    //post/get and your URL&#xD;&#xA;    xhr.setRequestHeader("content-type", "application/json");&#xD;&#xA;    var param = {&#xD;&#xA;    "user" : {&#xD;&#xA;    "email" : "someone@email.com",&#xD;&#xA;    "password" : "secure"&#xD;&#xA;    }&#xD;&#xA;    };&#xD;&#xA;    xhr.send(JSON.stringify(param));