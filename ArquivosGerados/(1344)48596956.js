    $(document).ready(function(){&#xD;&#xA;            var $nav = $('.first-nav');//Caching element&#xD;&#xA;            &#xD;&#xA;            // fade in .navbar&#xD;&#xA;            $(function () {&#xD;&#xA;                $(window).scroll(function () {&#xD;&#xA;                    // set distance user needs to scroll before we start fadeIn&#xD;&#xA;                    if ($(this).scrollTop() > 275) { &#xD;&#xA;                        $nav.fadeOut("fast");&#xD;&#xA;                    } else {&#xD;&#xA;                        $nav.fadeIn();&#xD;&#xA;                    }&#xD;&#xA;                    &#xD;&#xA;                });&#xD;&#xA;            });&#xD;&#xA;        });