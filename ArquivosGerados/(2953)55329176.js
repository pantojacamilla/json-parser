    filterSelection("all")&#xD;&#xA;    function filterSelection(c) {&#xD;&#xA;      var x, i;&#xD;&#xA;      x = document.getElementsByClassName("filterDiv");&#xD;&#xA;      if (c == "all") c = "";&#xD;&#xA;      for (i = 0; i < x.length; i++) {&#xD;&#xA;        w3RemoveClass(x[i], "show");&#xD;&#xA;        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function w3AddClass(element, name) {&#xD;&#xA;      var i, arr1, arr2;&#xD;&#xA;      arr1 = element.className.split(" ");&#xD;&#xA;      arr2 = name.split(" ");&#xD;&#xA;      for (i = 0; i < arr2.length; i++) {&#xD;&#xA;        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function w3RemoveClass(element, name) {&#xD;&#xA;      var i, arr1, arr2;&#xD;&#xA;      arr1 = element.className.split(" ");&#xD;&#xA;      arr2 = name.split(" ");&#xD;&#xA;      for (i = 0; i < arr2.length; i++) {&#xD;&#xA;        while (arr1.indexOf(arr2[i]) > -1) {&#xD;&#xA;          arr1.splice(arr1.indexOf(arr2[i]), 1);     &#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      element.className = arr1.join(" ");&#xD;&#xA;    }&#xD;&#xA;    // Add active class to the current button (highlight it)&#xD;&#xA;    var btnContainer = document.getElementById("myBtnContainer");&#xD;&#xA;    var btns = btnContainer.getElementsByClassName("btn");&#xD;&#xA;    for (var i = 0; i < btns.length; i++) {&#xD;&#xA;      btns[i].addEventListener("click", function(){&#xD;&#xA;        var current = document.getElementsByClassName("active");&#xD;&#xA;        current[0].className = current[0].className.replace(" active", "");&#xD;&#xA;        this.className += " active";&#xD;&#xA;      });&#xD;&#xA;    }