    var ms = false;&#xD;&#xA;    var ss;&#xD;&#xA;    var c;&#xD;&#xA;    var lc;&#xD;&#xA;    var lines = [];&#xD;&#xA;    var currset;&#xD;&#xA;    var win;&#xD;&#xA;    var sendline = 0;&#xD;&#xA;    var op = function() {&#xD;&#xA;      document.getElementById('rd').innerHTML = "Reading...";&#xD;&#xA;      ss = document.getElementById('t').innerHTML;&#xD;&#xA;      c = document.getElementById('t').innerHTML;&#xD;&#xA;      document.getElementById('t').innerHTML = "";&#xD;&#xA;      lc = 0;&#xD;&#xA;      lines = [];&#xD;&#xA;      currset = [];&#xD;&#xA;      setLines(c);&#xD;&#xA;    }&#xD;&#xA;    var setLines = function(cont) {&#xD;&#xA;      for (i = 0; i < cont.length; i++) {&#xD;&#xA;        if (cont[i] == ";") {&#xD;&#xA;          lines[lc] = currset.join("").replace("<br>", "") + " ";&#xD;&#xA;          lc++;&#xD;&#xA;          currset = [];&#xD;&#xA;        } else {&#xD;&#xA;          currset[i] = cont[i];&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      for (i = 0; i < lines.length; i++) {&#xD;&#xA;        rdline(lines[i])&#xD;&#xA;      }&#xD;&#xA;      tm();&#xD;&#xA;    }&#xD;&#xA;    var rdline = function(parg) {&#xD;&#xA;      var pl = [];&#xD;&#xA;      var toplace = [];&#xD;&#xA;      var pcount = 0;&#xD;&#xA;      for (i = 0; i < parg.length; i++) {&#xD;&#xA;        if (parg[i] == " ") {&#xD;&#xA;          pl[pcount] = toplace.join("");&#xD;&#xA;          pcount++;&#xD;&#xA;          toplace = [];&#xD;&#xA;        } else {&#xD;&#xA;          toplace[i] = parg[i];&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      //functions&#xD;&#xA;      if (pl[0] == "$setupmemes") {&#xD;&#xA;        ms = true;&#xD;&#xA;        win = window.open("", "", "height=800", "width=800")&#xD;&#xA;      }&#xD;&#xA;      if (ms == true) {&#xD;&#xA;        if (pl[0] == "expand") {&#xD;&#xA;          win.document.write('dongs')&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      document.getElementById('t').innerHTML = ss;&#xD;&#xA;    }