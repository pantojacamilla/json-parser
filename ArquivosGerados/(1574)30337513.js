    function validate() {&#xD;&#xA;      var checkbox1 = document.getElementById('three').checked;&#xD;&#xA;      var checkbox2 = document.getElementById('four').checked;&#xD;&#xA;      var checkbox3 = document.getElementById('five').checked;&#xD;&#xA;      var checkbox4 = document.getElementById('six').checked;&#xD;&#xA;      if ((checkbox1 || checkbox2 || checkbox3 || checkbox4) == true) {&#xD;&#xA;        if (referenceToForm.elements["usrgrp[]"].selectedIndex == -1) {&#xD;&#xA;          alert("Please enter all the required values");&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      if ((checkbox1 || checkbox2 || checkbox3 || checkbox4) == false) {&#xD;&#xA;        if (referenceToForm.elements["usrgrp[]"].selectedIndex == -1) {&#xD;&#xA;          alert("Please enter all the required values");&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      if ((checkbox1 || checkbox2 || checkbox3 || checkbox4) == false) {&#xD;&#xA;        if (referenceToForm.elements["usrgrp[]"].selectedIndex != -1) {&#xD;&#xA;          alert("Please enter all the required values");&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }