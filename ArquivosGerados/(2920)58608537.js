    (function(){&#xD;&#xA;        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;&#xD;&#xA;        window.requestAnimationFrame = requestAnimationFrame;&#xD;&#xA;    })();&#xD;&#xA;    window.addEventListener("keydown", onKeyDown, false);&#xD;&#xA;    window.addEventListener("keyup", onKeyUp, false);&#xD;&#xA;    function onKeyDown(event) {&#xD;&#xA;        var keyCode = event.keyCode;&#xD;&#xA;        switch(keyCode) {&#xD;&#xA;            case 87:&#xD;&#xA;                keyW = true;&#xD;&#xA;                break;&#xD;&#xA;            case 65:&#xD;&#xA;                keyA = true;&#xD;&#xA;                break;&#xD;&#xA;            case 83:&#xD;&#xA;                keyS = true;&#xD;&#xA;                break;&#xD;&#xA;            case 68:&#xD;&#xA;                keyD = true;&#xD;&#xA;                break;&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function onKeyUp(event) {&#xD;&#xA;        var keyCode = event.keyCode;&#xD;&#xA;        switch(keyCode) {&#xD;&#xA;            case 87:&#xD;&#xA;                keyW = false;&#xD;&#xA;                break;&#xD;&#xA;            case 65:&#xD;&#xA;                keyA = false;&#xD;&#xA;                break;&#xD;&#xA;            case 83:&#xD;&#xA;                keyS = false;&#xD;&#xA;                break;&#xD;&#xA;            case 68:&#xD;&#xA;                keyD = false;&#xD;&#xA;                break;&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    var tickX = 10;&#xD;&#xA;    var tickY = 10;&#xD;&#xA;    var keyW = false;&#xD;&#xA;    var keyA = false;&#xD;&#xA;    var keyS = false;&#xD;&#xA;    var keyD = false;&#xD;&#xA;    var motion = 2.5;&#xD;&#xA;    var mycanvas = document.createElement("canvas");&#xD;&#xA;    mycanvas.id = "c";&#xD;&#xA;    document.getElementById("animation-window").appendChild(mycanvas);&#xD;&#xA;    var ctx = mycanvas.getContext("2d");&#xD;&#xA;    function drawPlayer() {&#xD;&#xA;        window.requestAnimationFrame(drawPlayer);&#xD;&#xA;        ctx.clearRect(0, 0, 5000, 5000);&#xD;&#xA;        ctx.fillRect(tickX, tickY, 100, 100);&#xD;&#xA;        ctx.fillStyle="#403393";&#xD;&#xA;        if(keyW === true) {&#xD;&#xA;            tickY -= motion;&#xD;&#xA;        }&#xD;&#xA;        if(keyA === true) {&#xD;&#xA;            tickX -= motion;&#xD;&#xA;        }&#xD;&#xA;        if(keyS === true) {&#xD;&#xA;            tickY += motion;&#xD;&#xA;        }&#xD;&#xA;        if(keyD === true) {&#xD;&#xA;            tickX += motion;&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    window.requestAnimationFrame(drawPlayer);