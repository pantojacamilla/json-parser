        var textToColour = document.getElementsByClassName("menuItem");&#xD;&#xA;    &#xD;&#xA;    function changeColour() {&#xD;&#xA;      for(let i = 0; i < textToColour.length; i++) {&#xD;&#xA;        textToColour[i].style.color =  letterColors[Math.floor(Math.random() *      letterColors.length)];&#xD;&#xA;        console.log("Check");&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    window.addEventListener('load', changeColour);