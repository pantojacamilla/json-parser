    $(window).scroll(function() {&#xD;&#xA;      var scrollPos = $(window).scrollTop();&#xD;&#xA;      var page1Top = $("#sec_one").scrollTop();&#xD;&#xA;      var page1Bot = $("#sec_one").outerHeight();&#xD;&#xA;      var page2 = $("#sec_two").scrollTop();&#xD;&#xA;      var page3 = $("#sec_three").scrollTop();&#xD;&#xA;      if (scrollPos => page1Top && scrollPos < page1Bot) {&#xD;&#xA;        $('nav').css("background-color", "#ffffff");&#xD;&#xA;      }&#xD;&#xA;    });