    $(document).ready(function() {&#xD;&#xA;       $(document).on("scroll", onScroll);&#xD;&#xA;        //smoothscroll&#xD;&#xA;        $('a[href^="#"]').on('click', function(e) {&#xD;&#xA;            e.preventDefault();&#xD;&#xA;            $(document).off("scroll");&#xD;&#xA;            $('a').each(function() {&#xD;&#xA;                $(this).removeClass('actve');&#xD;&#xA;            })&#xD;&#xA;            $(this).addClass('actve');&#xD;&#xA;            var target = this.hash,&#xD;&#xA;                menu = target;&#xD;&#xA;            $target = $(target);&#xD;&#xA;            $('html, body').stop().animate({&#xD;&#xA;                'scrollTop': $target.offset().top + 2&#xD;&#xA;            }, 500, 'swing', function() {&#xD;&#xA;                window.location.hash = target;&#xD;&#xA;                $(document).on("scroll", onScroll);&#xD;&#xA;                var scroll_start = 0;&#xD;&#xA;                var startchange = $('.q-intro-text');&#xD;&#xA;                var offset = startchange.offset();&#xD;&#xA;                // $(document).scroll(function() {&#xD;&#xA;                //     scroll_start = $(this).scrollTop();&#xD;&#xA;                //     if (scroll_start > offset.top) {&#xD;&#xA;                //         $('#q-nav').css('background-color', 'black');&#xD;&#xA;                //     } else {&#xD;&#xA;                //         $('#q-nav').css('background-color', 'transparent');&#xD;&#xA;                //     }&#xD;&#xA;                // });&#xD;&#xA;            });&#xD;&#xA;        });&#xD;&#xA;    });&#xD;&#xA;    function onScroll(event) {&#xD;&#xA;        var scrollPos = $(document).scrollTop();&#xD;&#xA;        $('#q-nav a').each(function() {&#xD;&#xA;            var currLink = $(this);&#xD;&#xA;            var refElement = $(currLink.attr("href"));&#xD;&#xA;            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {&#xD;&#xA;                $('#q-nav ul li a').removeClass("actve");&#xD;&#xA;                currLink.addClass("actve");&#xD;&#xA;                $('.actve').css('color', '#4d4d4d');&#xD;&#xA;                $('.actve').css('border-bottom', '1px solid #ff363f');&#xD;&#xA;            } else {&#xD;&#xA;                currLink.removeClass("actve");&#xD;&#xA;                currLink.css('color', '#898989');&#xD;&#xA;                currLink.css('border-bottom', '1px solid white');&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;    }