    var a = prompt("Provide nick");&#xD;&#xA;    while (a === "") {&#xD;&#xA;      a = prompt("Provide nick");&#xD;&#xA;    }&#xD;&#xA;    document.write("<p>Nick: " + a + "</p>");&#xD;&#xA;    /* -------- */ &#xD;&#xA;    var ground = document.getElementsByClassName('play-ground')[0];&#xD;&#xA;    var player = document.getElementsByClassName('player')[0];&#xD;&#xA;    var points = document.getElementsByClassName('numba')[0];&#xD;&#xA;    var thing = document.getElementsByClassName('thing-tocatch')[0];&#xD;&#xA;    document.onkeydown = move;&#xD;&#xA;    var lefts = 0;&#xD;&#xA;    var tops = 0;&#xD;&#xA;    function move(e) {&#xD;&#xA;      console.log(e.keyCode);&#xD;&#xA;      if (e.keyCode == 68) {&#xD;&#xA;        lefts += 100;&#xD;&#xA;        player.style.left = lefts + "px";&#xD;&#xA;        points.innerHTML = lefts;&#xD;&#xA;      }&#xD;&#xA;      if (e.keyCode == 65) {&#xD;&#xA;        lefts -= 100;&#xD;&#xA;        player.style.left = lefts + "px";&#xD;&#xA;      }&#xD;&#xA;      if (e.keyCode == 83) {&#xD;&#xA;        tops += 100;&#xD;&#xA;        player.style.top = tops + "px";&#xD;&#xA;      }&#xD;&#xA;      if (e.keyCode == 87) {&#xD;&#xA;        tops -= 100;&#xD;&#xA;        player.style.top = tops + "px";&#xD;&#xA;      }&#xD;&#xA;    }