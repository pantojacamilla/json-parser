    window.onscroll = function() {&#xD;&#xA;      myFunction()&#xD;&#xA;    };&#xD;&#xA;    var floating1 = document.getElementById("floating1");&#xD;&#xA;    var yOffset = 765;&#xD;&#xA;    function myFunction() {&#xD;&#xA;      if (window.pageYOffset > yOffset) {&#xD;&#xA;        floating1.classList.add("sticky");&#xD;&#xA;      } else {&#xD;&#xA;        floating1.classList.remove("sticky");&#xD;&#xA;      }&#xD;&#xA;    }