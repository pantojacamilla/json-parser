    function checkpass()&#xD;&#xA;    {&#xD;&#xA;       &#xD;&#xA;        var pass1 = document.getElementById('pass1');&#xD;&#xA;        var pass2 = document.getElementById('pass2');&#xD;&#xA;       &#xD;&#xA;        var message = document.getElementById('confirmMessage');&#xD;&#xA;      &#xD;&#xA;        var goodColor = "#66cc66";&#xD;&#xA;        var badColor = "#ff6666";&#xD;&#xA;      &#xD;&#xA;        if(pass1.value == pass2.value){&#xD;&#xA;            &#xD;&#xA;            pass2.style.backgroundColor = goodColor;&#xD;&#xA;            message.style.color = goodColor;&#xD;&#xA;            message.innerHTML = "Passwords Match!"&#xD;&#xA;        }else{&#xD;&#xA;            &#xD;&#xA;            pass2.style.backgroundColor = badColor;&#xD;&#xA;            message.style.color = badColor;&#xD;&#xA;            message.innerHTML = "Passwords Do Not Match!"&#xD;&#xA;        }&#xD;&#xA;    }  