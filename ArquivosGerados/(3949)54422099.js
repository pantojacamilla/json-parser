    function startTime() {&#xD;&#xA;      today = new Date();&#xD;&#xA;      h = today.getHours();&#xD;&#xA;      m = today.getMinutes();&#xD;&#xA;      s = today.getSeconds();&#xD;&#xA;      m = checkTime(m);&#xD;&#xA;      s = checkTime(s);&#xD;&#xA;      document.getElementById('reloj').innerHTML = h + ":" + m + ":" + s;&#xD;&#xA;      t = setTimeout('startTime()', 500);&#xD;&#xA;    }&#xD;&#xA;    function checkTime(i) {&#xD;&#xA;      if (i < 10) {&#xD;&#xA;        i = "0" + i&#xD;&#xA;      }&#xD;&#xA;      return i;&#xD;&#xA;    }&#xD;&#xA;    window.onload = function() {&#xD;&#xA;      startTime();&#xD;&#xA;    }