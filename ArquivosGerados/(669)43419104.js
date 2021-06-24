    $(function() {&#xD;&#xA;      "use strict";&#xD;&#xA;      var $sidebar = $("#artist"),&#xD;&#xA;        $window = $(window),&#xD;&#xA;        $footer = $("#contact-box"), // use your footer ID here&#xD;&#xA;        offset = $sidebar.offset(),&#xD;&#xA;        foffset = $footer.height(),&#xD;&#xA;        threshold = foffset.height - $sidebar.height() - offset.top,&#xD;&#xA;        topPadding = 15;&#xD;&#xA;      $window.scroll(function() {&#xD;&#xA;        if ($window.scrollTop() > threshold) {&#xD;&#xA;          $sidebar.stop().animate({&#xD;&#xA;            marginTop: threshold&#xD;&#xA;          }, 900);&#xD;&#xA;        } else if ($window.scrollTop() > offset.top) {&#xD;&#xA;          $sidebar.stop().animate({&#xD;&#xA;            marginTop: $window.scrollTop() - offset.top + topPadding&#xD;&#xA;          }, 900);&#xD;&#xA;        } else {&#xD;&#xA;          $sidebar.stop().animate({&#xD;&#xA;            marginTop: 0&#xD;&#xA;          }, 1000);&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });