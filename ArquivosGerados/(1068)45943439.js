    var answer = 0;&#xD;&#xA;    var areaFromLength = function() {&#xD;&#xA;      var a = document.getElementById("a").value;&#xD;&#xA;      var b = document.getElementById("b").value;&#xD;&#xA;      var c = document.getElementById("c").value;&#xD;&#xA;      var x = (a + b + c) / 2;&#xD;&#xA;      var answer = Math.sqrt(x * ((x - a) * (x - b) * (x - c)));&#xD;&#xA;      document.getElementById("result").innerHTML = "<p>The area of the triangle is " + answer + "</p>";&#xD;&#xA;      return false;&#xD;&#xA;    };