    function checkbox_checked() {&#xD;&#xA;      var chks = document.querySelectorAll('input[name^=cb_system1_]')&#xD;&#xA;      if (chks[0].checked && chks[1].checked)&#xD;&#xA;        document.getElementById("b_system1").style.backgroundColor = 'green';&#xD;&#xA;      else&#xD;&#xA;        document.getElementById("b_system1").style.backgroundColor = 'red';&#xD;&#xA;      var chks = document.querySelectorAll('input[name^=cb_echo_01_]')&#xD;&#xA;      if (chks[0].checked && chks[1].checked)&#xD;&#xA;        document.getElementById("b_echo_01").style.backgroundColor = 'green';&#xD;&#xA;      else&#xD;&#xA;        document.getElementById("b_echo_01").style.backgroundColor = 'red';&#xD;&#xA;    }&#xD;&#xA;    function checkGC_POD1() {&#xD;&#xA;      var btnSYS = document.getElementById('b_system1');&#xD;&#xA;      var btnE1 = document.getElementById('b_echo_01');&#xD;&#xA;      var color = ((btnSYS.classList.contains('green')) && (btnE1.classList.contains('green'))) ? "green" : "red";&#xD;&#xA;      console.log(btnSYS.classList, btnE1.classList, color)&#xD;&#xA;      var btn = document.getElementById('buttonPOD1');&#xD;&#xA;      btn.classList.remove("green", "red");&#xD;&#xA;      btn.classList.add(color);&#xD;&#xA;      if (btnSYS.style.backgroundColor = 'green' && btnE1.style.backgroundColor = 'green')&#xD;&#xA;        document.getElementById("buttonPOD1").style.backgroundColor = 'green';&#xD;&#xA;      else&#xD;&#xA;        document.getElementById("buttonPOD1").style.backgroundColor = 'red';&#xD;&#xA;    }