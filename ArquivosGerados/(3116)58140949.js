    $('.button').each(function() {&#xD;&#xA;      var container = $('.list'),&#xD;&#xA;        scrollTo = $(this);&#xD;&#xA;      if (scrollTo.hasClass('focus')) {&#xD;&#xA;        var leftOffset = scrollTo.offset().left - ($(window).width() / 2 - scrollTo.width() / 2) + container.scrollLeft();&#xD;&#xA;        container.animate({&#xD;&#xA;          scrollLeft: leftOffset&#xD;&#xA;        }, 1000);&#xD;&#xA;      }&#xD;&#xA;    });