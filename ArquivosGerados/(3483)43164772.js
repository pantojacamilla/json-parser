    var pageSize = document.getElementById("innerSize");&#xD;&#xA;    window.onload = function() {&#xD;&#xA;      var w = document.documentElement.clientWidth;&#xD;&#xA;      var h = document.documentElement.clientHeight;&#xD;&#xA;      pageSize.innerHTML = "Width: " + w + "<br>" + " Height: " + h;&#xD;&#xA;    }&#xD;&#xA;    window.onresize = function() {&#xD;&#xA;      var w = document.documentElement.clientWidth;&#xD;&#xA;      var h = document.documentElement.clientHeight;&#xD;&#xA;      pageSize.innerHTML = "Width: " + w + "<br>" + " Height: " + h;&#xD;&#xA;    }