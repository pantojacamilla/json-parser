    var class1 = document.getElementsByClassName("class1");&#xD;&#xA;    var img = document.getElementsByTagName("img");&#xD;&#xA;    function openFullscreen() {&#xD;&#xA;        if (class1[0].requestFullscreen) {&#xD;&#xA;            class1[0].requestFullscreen();&#xD;&#xA;          } &#xD;&#xA;        else if (class1[0].mozRequestFullScreen) {&#xD;&#xA;            class1[0].mozRequestFullScreen();&#xD;&#xA;          } &#xD;&#xA;        else if (class1[0].webkitRequestFullscreen) {&#xD;&#xA;            class1[0].webkitRequestFullscreen();&#xD;&#xA;          } &#xD;&#xA;        else if (class1[0].msRequestFullscreen) {&#xD;&#xA;            class1[0].msRequestFullscreen();&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;    function closeFullscreen() {&#xD;&#xA;        if (document.exitFullscreen) {&#xD;&#xA;            document.exitFullscreen();&#xD;&#xA;        } &#xD;&#xA;        else if (document.mozCancelFullScreen) {&#xD;&#xA;            document.mozCancelFullScreen();&#xD;&#xA;        } &#xD;&#xA;        else if (document.webkitExitFullscreen) {&#xD;&#xA;            document.webkitExitFullscreen();&#xD;&#xA;        } &#xD;&#xA;        else if (document.msExitFullscreen) {&#xD;&#xA;            document.msExitFullscreen();&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    // Open fullscreen mode&#xD;&#xA;    class1[0].addEventListener("click", function() {&#xD;&#xA;        openFullscreen();&#xD;&#xA;        class1[0].setAttribute("id", "whileFullscreen");&#xD;&#xA;    });&#xD;&#xA;    //"ESC" key closes fullscreen&#xD;&#xA;    document.addEventListener("keydown", function() {&#xD;&#xA;        var x = event.keyCode;&#xD;&#xA;        if (x === 27) {&#xD;&#xA;            class1[0].removeAttribute("id", "whileFullscreen");&#xD;&#xA;        }&#xD;&#xA;    })