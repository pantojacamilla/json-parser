    function Confirm(){&#xD;&#xA;    var people = document.getElementById ("people")&#xD;&#xA;    if ((people.value == "") || (food.value == "")){&#xD;&#xA;    	alert ("please select an option")&#xD;&#xA;    	return false;&#xD;&#xA;    }&#xD;&#xA;    		return true;&#xD;&#xA;    }&#xD;&#xA;    function show(){&#xD;&#xA;    var people = document.getElementById ("people")&#xD;&#xA;    if (people.value == "1"){&#xD;&#xA;    document.getElementById("here").innerHTML='<img src="images/tourism.jpg">';	&#xD;&#xA;    } &#xD;&#xA;    }