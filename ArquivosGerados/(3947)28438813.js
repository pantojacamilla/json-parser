    function muteEvent(id) {&#xD;&#xA;      var button = "#muteBox".concat(id.charAt(id.length - 1));&#xD;&#xA;      var value = $(button).css("background-color");&#xD;&#xA;      var slider = "#sliderKnob".concat(id.charAt(id.length - 1));&#xD;&#xA;      var animation = function() {&#xD;&#xA;        if ($(slider).css("background-color") == 'rgb(0, 128, 0)') {&#xD;&#xA;          $(slider).css("background-color", "red")&#xD;&#xA;        } else {&#xD;&#xA;          $(slider).css("background-color", "green")&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      if (value == 'rgb(128, 128, 128)') {&#xD;&#xA;        $(button).css("background-color", "red");&#xD;&#xA;        setInterval(animation, 1500)&#xD;&#xA;      } else {&#xD;&#xA;        alert("here");&#xD;&#xA;        clearInterval(animation);&#xD;&#xA;        $(button).css("background-color", "#808080");&#xD;&#xA;      }&#xD;&#xA;    }