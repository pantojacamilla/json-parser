          function show() {&#xD;&#xA;        $(".overlay").css("z-index", 1);&#xD;&#xA;        $(".overlay").css("opacity", 1);&#xD;&#xA;          if ($("#circleMenu").hasClass("open") == true) {&#xD;&#xA;           $("#circleMenu").removeClass("open");&#xD;&#xA;           $("#left").css("left", "-100px");&#xD;&#xA;           $("#right").css("right", "-100px");&#xD;&#xA;        } else if ($("#circleMenu").hasClass("open") == false) {&#xD;&#xA;           $("#circleMenu").addClass("open");&#xD;&#xA;           $("#left").css("left", "100px");&#xD;&#xA;           $("#right").css("right", "100px");&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    $(".show").on("click", function() {&#xD;&#xA;       show();&#xD;&#xA;     });