    $(document).ready(function(){&#xD;&#xA;    $('li').hover(function(){&#xD;&#xA;    $(this).find('ul>li').stop().slideToggle(250);&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    $(function () {&#xD;&#xA;        var stickyHeaderTop = $('#navigationwrap').offset().top;&#xD;&#xA;        $(window).scroll(function () {&#xD;&#xA;            if ($(window).scrollTop() > stickyHeaderTop) {&#xD;&#xA;                $('#navigationwrap').css({&#xD;&#xA;                    position: 'fixed',&#xD;&#xA;                    top: '0px'&#xD;&#xA;                });&#xD;&#xA;                $('#contentwrap').css('margin-top', $('#navigationwrap').outerHeight(true) + parseInt($('#headerwrap').css('marginBottom')));&#xD;&#xA;            } else {&#xD;&#xA;                $('#navigationwrap').css({&#xD;&#xA;                    position: 'static',&#xD;&#xA;                    top: '0px'&#xD;&#xA;                });&#xD;&#xA;                $('#contentwrap').css('margin-top', '0px');&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;    });