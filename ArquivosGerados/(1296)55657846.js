    $(document).ready(function() {&#xD;&#xA;      var menuStatus = true;&#xD;&#xA;      var sections = $('section');&#xD;&#xA;      var nav = $('nav');&#xD;&#xA;      //smooth scroll&#xD;&#xA;      $("nav,#arrow").find('a').on('click', function() {&#xD;&#xA;        var el = $(this),&#xD;&#xA;          id = el.attr('href');&#xD;&#xA;        $('html, body').animate({&#xD;&#xA;          scrollTop: $(id).offset().top&#xD;&#xA;        }, 500);&#xD;&#xA;      });&#xD;&#xA;      //hide the mobile nav after a link is clicked&#xD;&#xA;      if ($(window).width() < 900) {&#xD;&#xA;        $("nav li a").on('click', function() {&#xD;&#xA;          $(".menu").hide();&#xD;&#xA;          $('nav input:checkbox:checked').prop('checked', false);&#xD;&#xA;        });&#xD;&#xA;        $("nav input").on('click', function() {&#xD;&#xA;          $(".menu").show();&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;      //show desktop nav when the screen is at least 900px&#xD;&#xA;      $(window).on('resize', function() {&#xD;&#xA;        var win = $(this);&#xD;&#xA;        if (win.width() > 900) {&#xD;&#xA;          $(".menu").show();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });