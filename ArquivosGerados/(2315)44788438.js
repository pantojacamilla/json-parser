    //	GMAIL----------------------------&#xD;&#xA;    function gmailArray() {&#xD;&#xA;      var gmaildocLink = ['link1', 'link2'];&#xD;&#xA;      var gmaildocTitle = ["title1", "title2"];&#xD;&#xA;      var gmaildocAlt = ["Google Cheat Sheet For Gmail", "Google&nbsp;10-Minute&nbsp;Training&nbsp;For&nbsp;Gmail"];&#xD;&#xA;      var gmailvidLink = [];&#xD;&#xA;      var gmailvidTitle = [];&#xD;&#xA;      var gmailvidAlt = [];&#xD;&#xA;      if (document.getElementById("gmailList").innerHTML == "") {&#xD;&#xA;        for (i = 0; i < gmaildocTitle.length; i++) {&#xD;&#xA;          arrayGmail = "<a href=" + gmaildocLink[i] + " " + "title=" + gmaildocAlt[i] + ">" + gmaildocTitle[i] + "</a>" + "<br>";&#xD;&#xA;          document.getElementById("gmailList").innerHTML += arrayGmail;&#xD;&#xA;        }&#xD;&#xA;        for (i = 0; i < gmailvidTitle.length; i++) {&#xD;&#xA;          arrayGmail1 = "";&#xD;&#xA;          document.getElementById("").innerHTML += arrayGmail1;&#xD;&#xA;        }&#xD;&#xA;      } else {&#xD;&#xA;        document.getElementById("gmailList").innerHTML = "";&#xD;&#xA;      }&#xD;&#xA;    }