    var s, SmoothScroll = {&#xD;&#xA;      Selectors: {&#xD;&#xA;        Link: $('a[href*="#"]:not([href="#"])')&#xD;&#xA;      },&#xD;&#xA;      scroll: function() {&#xD;&#xA;        if (location.pathname.replace(/^\//,'') == this.Selectors.Link.pathname.replace(/^\//,'') && location.hostname == this.hostname && $(".classes .section").has(this).length == 0 ) {&#xD;&#xA;          var target = $(this.hash);&#xD;&#xA;          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');&#xD;&#xA;          if (target.length) {&#xD;&#xA;            $('html, body').animate({&#xD;&#xA;              scrollTop: target.offset().top&#xD;&#xA;            }, 1000);&#xD;&#xA;            return false;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      bindEvents: function() { &#xD;&#xA;        s.Link.click(function() {&#xD;&#xA;          SmoothScroll.scroll();&#xD;&#xA;        });&#xD;&#xA;      },&#xD;&#xA;      init: function(){&#xD;&#xA;        s = this.Selectors;&#xD;&#xA;        this.bindEvents();&#xD;&#xA;      }&#xD;&#xA;    };&#xD;&#xA;    SmoothScroll.init();