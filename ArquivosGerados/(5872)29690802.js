    $(".hideBtn").click(function() {&#xD;&#xA;      var element = $("div.buttons").next(".hideable:first");&#xD;&#xA;      if (element.hasClass("hidden")) {&#xD;&#xA;        element.removeClass("hidden");&#xD;&#xA;        element.slideDown("slow");&#xD;&#xA;      } else {&#xD;&#xA;        element.addClass("hidden");&#xD;&#xA;        element.slideUp("slow");&#xD;&#xA;      }&#xD;&#xA;    });