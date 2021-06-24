    $(window).on("scroll", function() {&#xD;&#xA;      function map(num, in_min, in_max, out_min, out_max) {&#xD;&#xA;        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;&#xD;&#xA;      }&#xD;&#xA;      $(".idee").each(function() {&#xD;&#xA;        var scrollBottom = $(window).scrollTop() + $(window).height(),&#xD;&#xA;          ideeHeight = $(this).offset().top;&#xD;&#xA;        if (scrollBottom >= ideeHeight) {&#xD;&#xA;            var docHeight = $(window).height(),&#xD;&#xA;            opacity = map(ideeHeight, 0, docHeight, 0.0, 1.0);&#xD;&#xA;          $(this).css("background", "rgba(255, 255, 255," + opacity + ")");&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });