    document.getElementById("d1").onmouseover = function() {&#xD;&#xA;      mouseOver1()&#xD;&#xA;    };&#xD;&#xA;    document.getElementById("d2").onmouseover = function() {&#xD;&#xA;      mouseOver2()&#xD;&#xA;    };&#xD;&#xA;    document.getElementById("d3").onmouseover = function() {&#xD;&#xA;      mouseOver3()&#xD;&#xA;    };&#xD;&#xA;    document.getElementById("d1").onmouseout = function() {&#xD;&#xA;      mouseOut1()&#xD;&#xA;    };&#xD;&#xA;    document.getElementById("d2").onmouseout = function() {&#xD;&#xA;      mouseOut2()&#xD;&#xA;    };&#xD;&#xA;    document.getElementById("d3").onmouseout = function() {&#xD;&#xA;      mouseOut3()&#xD;&#xA;    };&#xD;&#xA;    function mouseOver1() {&#xD;&#xA;      document.getElementById("dogs").style.background = "blue";&#xD;&#xA;      document.getElementById("tooltiptext1").style.visibility = "visible";&#xD;&#xA;    }&#xD;&#xA;    function mouseOut1() {&#xD;&#xA;      document.getElementById("dogs").style.background = "black";&#xD;&#xA;      document.getElementById("tooltiptext1").style.visibility = "hidden";&#xD;&#xA;    }&#xD;&#xA;    function mouseOver2() {&#xD;&#xA;      document.getElementById("dogs").style.background = "green";&#xD;&#xA;      document.getElementById("tooltiptext2").style.visibility = "visible";&#xD;&#xA;    }&#xD;&#xA;    function mouseOut2() {&#xD;&#xA;      document.getElementById("dogs").style.background = "black";&#xD;&#xA;      document.getElementById("tooltiptext2").style.visibility = "hidden";&#xD;&#xA;    }&#xD;&#xA;    function mouseOver3() {&#xD;&#xA;      document.getElementById("dogs").style.background = "red";&#xD;&#xA;      document.getElementById("tooltiptext3").style.visibility = "visible";&#xD;&#xA;    }&#xD;&#xA;    function mouseOut3() {&#xD;&#xA;      document.getElementById("dogs").style.background = "black";&#xD;&#xA;      document.getElementById("tooltiptext3").style.visibility = "hidden";&#xD;&#xA;    }