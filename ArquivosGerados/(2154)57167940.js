    function toggle(object) {&#xD;&#xA;        var input;&#xD;&#xA;        var value = object.getAttribute("value");&#xD;&#xA;      &#xD;&#xA;        switch (value) {&#xD;&#xA;            case "flight":&#xD;&#xA;                input = "input1";&#xD;&#xA;                break;&#xD;&#xA;            case "hotel":&#xD;&#xA;                input = "input2";&#xD;&#xA;                break;&#xD;&#xA;            case "travel":&#xD;&#xA;                input = "input3";&#xD;&#xA;                break;&#xD;&#xA;        }&#xD;&#xA;      &#xD;&#xA;      var elements = document.getElementsByClassName(input);&#xD;&#xA;      &#xD;&#xA;      for (var i = 0; i < elements.length; i++) {&#xD;&#xA;            if (elements[i].style.display == "block") {&#xD;&#xA;                elements[i].style.display = "none";&#xD;&#xA;            } else {&#xD;&#xA;                elements[i].style.display = "block";&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        document.getElementsByTagName("button")[0].style.display = "block";&#xD;&#xA;    }