    $(window).scroll('scroll', function() { &#xD;&#xA;      // add your functions &#xD;&#xA;      (function($) {&#xD;&#xA;        // headerStyle();&#xD;&#xA;        factCounter();&#xD;&#xA;      })(jQuery);&#xD;&#xA;    });&#xD;&#xA;    function factCounter() {&#xD;&#xA;      if ($('.fact-counter').length) {&#xD;&#xA;        $('.fact-counter .counter-column.animated').each(function() {&#xD;&#xA;          var $t = $(this),&#xD;&#xA;            n = $t.find(".count-text").attr("data-stop"),&#xD;&#xA;            r = parseInt($t.find(".count-text").attr("data-speed"), 10);&#xD;&#xA;          if (!$t.hasClass("counted")) {&#xD;&#xA;            $t.addClass("counted");&#xD;&#xA;            $({&#xD;&#xA;              countNum: $t.find(".count-text").text()&#xD;&#xA;            }).animate({&#xD;&#xA;              countNum: n&#xD;&#xA;            }, {&#xD;&#xA;              duration: r,&#xD;&#xA;              easing: "linear",&#xD;&#xA;              step: function() {&#xD;&#xA;                $t.find(".count-text").text(Math.floor(this.countNum));&#xD;&#xA;              },&#xD;&#xA;              complete: function() {&#xD;&#xA;                $t.find(".count-text").text(this.countNum);&#xD;&#xA;              }&#xD;&#xA;            });&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    }