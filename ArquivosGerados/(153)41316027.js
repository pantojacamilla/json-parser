    var firstChild = document.querySelector(".r:first-child");&#xD;&#xA;    var descendant = firstChild.querySelectorAll(".p, .p2,.p3");&#xD;&#xA;    var p, p2, p3;&#xD;&#xA;    [].forEach.call(descendant, function(itm) {&#xD;&#xA;      itm.style.backgroundColor = "green";&#xD;&#xA;      var ch = document.getElementsByClassName("p");&#xD;&#xA;      for (var i = 0; i < ch.length; i++) {&#xD;&#xA;        var ar = ['p', 'p2', 'p3']; //are the class name &#xD;&#xA;        p = ch[i].parentNode.clientHeight / 1.5; // height value for p &#xD;&#xA;        p2 = ch[i].parentNode.clientHeight + p; // height value for p2 &#xD;&#xA;        p3 = p2 / 1.5; // height value for p3 &#xD;&#xA;        var colors = {}; //using dynamic &#xD;&#xA;        colors[ar[0]] = p;&#xD;&#xA;        colors[ar[1]] = p2;&#xD;&#xA;        colors[ar[2]] = p3;&#xD;&#xA;        ch[i].style.height = colors[ch[i].className] + "px"; //problem comes here this shows undefined&#xD;&#xA;        itm.style.height = ch[i].clientHeight + "px";&#xD;&#xA;        document.getElementById('demo').innerHTML = "asfaf";&#xD;&#xA;      }&#xD;&#xA;    });