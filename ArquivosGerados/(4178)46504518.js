      (function ( $ ) {&#xD;&#xA;        $.fn.readMoreFade = function(options) {&#xD;&#xA;            var settings = $.extend({&#xD;&#xA;                backgroundColor: "white",&#xD;&#xA;                buttonClass: "button"&#xD;&#xA;            }, options );&#xD;&#xA;            this.css( "height", 100 );&#xD;&#xA;            this.css( "overflow", "hidden" );&#xD;&#xA;            this.css( "position", "relative" );&#xD;&#xA;            this.append('<p class="readMoreFade"><a href="#" class="' + settings.buttonClass + '">Read More</a></p>')&#xD;&#xA;            var readMoreButton = this.find('.readMoreFade');&#xD;&#xA;            var backgroundString = settings.backgroundColor ? settings.backgroundColor : this.css('background-color');&#xD;&#xA;            readMoreButton.css('background-image', '-webkit-gradient(linear,left top,left bottom,color-stop(0, rgba(255,0,0,0)),color-stop(1, '+backgroundString+'))');&#xD;&#xA;            readMoreButton.click(function(){&#xD;&#xA;                    totalHeight = 0&#xD;&#xA;                    $el = $(this);&#xD;&#xA;                    $p  = $el;&#xD;&#xA;                    $up = $p.parent();&#xD;&#xA;                    $ps = $up.find("p:not('.readMoreFade')");&#xD;&#xA;                    $ps.each(function() {&#xD;&#xA;                        totalHeight += $(this).outerHeight();&#xD;&#xA;                    });&#xD;&#xA;                    $up&#xD;&#xA;                        .css({&#xD;&#xA;                            "max-height": 9999&#xD;&#xA;                        })&#xD;&#xA;                        .animate({&#xD;&#xA;                            "height": totalHeight&#xD;&#xA;                        });&#xD;&#xA;                    $p.fadeOut();&#xD;&#xA;                    return false;&#xD;&#xA;            })&#xD;&#xA;            return this;&#xD;&#xA;        };&#xD;&#xA;    }( jQuery ));&#xD;&#xA;    $('#fadeMe').readMoreFade({buttonClass: "btn btn-primary"});