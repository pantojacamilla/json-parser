    var selector1 = '#menu_item1';&#xD;&#xA;    var selector2 = '#menu_item2';&#xD;&#xA;    var selector3 = '#menu_item3';&#xD;&#xA;    var selector3 = '#menu_item4';&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;      $(".nav li a").removeClass("active");&#xD;&#xA;    });&#xD;&#xA;    $('.nav li a').on('click', function() {&#xD;&#xA;      var scrollAnchor = $(this).attr('data-scroll'),&#xD;&#xA;        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;&#xD;&#xA;      $('body,html').animate({&#xD;&#xA;        scrollTop: scrollPoint&#xD;&#xA;      }, 500);&#xD;&#xA;      return false;&#xD;&#xA;    })&#xD;&#xA;    $(window).scroll(function() {&#xD;&#xA;      var windscroll = $(window).scrollTop();&#xD;&#xA;      if (windscroll >= 100) {&#xD;&#xA;        $(selector1).addClass('custom_active1');&#xD;&#xA;        $(selector2).addClass('custom_active2');&#xD;&#xA;        $(selector3).addClass('custom_active3');&#xD;&#xA;        $(selector4).addClass('custom_active4');&#xD;&#xA;        $('.wrapper section').each(function(i) {&#xD;&#xA;          if ($(this).position().top <= windscroll - 20) {&#xD;&#xA;            $('nav a.active').removeClass('active');&#xD;&#xA;            $('nav a').eq(i).addClass('active');&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      } else {&#xD;&#xA;        $(selector1).removeClass('custom_active1');&#xD;&#xA;        $(selector2).removeClass('custom_active2');&#xD;&#xA;        $(selector3).removeClass('custom_active3');&#xD;&#xA;        $(selector4).removeClass('custom_active4');&#xD;&#xA;        $('nav a.active').removeClass('active');&#xD;&#xA;        $('nav a:first').addClass('custom_active1');&#xD;&#xA;      }&#xD;&#xA;    }).scroll();