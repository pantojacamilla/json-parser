     function changeClass() {&#xD;&#xA;      var classVariations = ["red", "blue", "yellow,", "pink", "purple"];&#xD;&#xA;      for (var i = 0; i < classVariations.length; i++) {&#xD;&#xA;      document.getElementById&#xD;&#xA;      ("differentColors").classList.add(classVariations[i]);}}&#xD;&#xA;    &#xD;&#xA;    function changeColor() {&#xD;&#xA;      document.getElementById&#xD;&#xA;      ("differentColors").addEventListener("click", changeClass);&#xD;&#xA;      document.getElementById&#xD;&#xA;      ("differentColors").classList.remove(classVariations[i]);}&#xD;&#xA;     window.addEventListener("load", changeColor);