    var places2beObj = $('#blokken_clubinfo > div');&#xD;&#xA;    $.makeArray(places2beObj);&#xD;&#xA;    console.log(places2beObj);&#xD;&#xA;    function randomPlace2be1() {&#xD;&#xA;      var randomPlace = places2beObj[Math.floor(Math.random() * places2beObj.length)];&#xD;&#xA;      $(randomPlace).addClass("kaolo", function() {&#xD;&#xA;        places2beObj.splice(randomPlace, 1);&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    function randomPlace2be2() {&#xD;&#xA;      var randomPlace = places2beObj[Math.floor(Math.random() * places2beObj.length)];&#xD;&#xA;      $(randomPlace).addClass("goon", function() {&#xD;&#xA;        places2beObj.splice(randomPlace, 1);&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    randomPlace2be1()&#xD;&#xA;    randomPlace2be2()