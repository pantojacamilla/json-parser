        function togglePassword(checkbox) {&#xD;&#xA;            var x = document.getElementById("staff-password");&#xD;&#xA;            if (checkbox.checked == true){&#xD;&#xA;              x.type = "text";&#xD;&#xA;            } else {&#xD;&#xA;              x.type = "password";&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        function clickRandom(){ &#xD;&#xA;          var randomPass = randomPass();&#xD;&#xA;          document.getElementById("staff-password").value(randomPass);&#xD;&#xA;          document.getElementById("show-password").checked = true;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        function randomPass() {&#xD;&#xA;          var length = 6;&#xD;&#xA;          var text = "";&#xD;&#xA;          var possible = "3907154628";&#xD;&#xA;          for (var i = 0; i < length; i++){&#xD;&#xA;            text += possible.charAt(Math.floor(Math.random() * possible.length));&#xD;&#xA;          }&#xD;&#xA;          return text;&#xD;&#xA;        }