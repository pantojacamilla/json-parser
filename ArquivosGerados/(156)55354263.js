     jQuery(document).ready(function($){&#xD;&#xA;     var tickerSpeed = $('.news-ticker').attr('data-speed');&#xD;&#xA;     $('.news-ticker ul li').hide();&#xD;&#xA;     $('.news-ticker ul li:first').show();&#xD;&#xA;     var currentSlide = 0;&#xD;&#xA;     var slideCount = ($('.news-ticker li').length) - 1;&#xD;&#xA;     var startTicker = setInterval(function(){&#xD;&#xA; &#xD;&#xA;     $('.news-ticker ul li').eq(currentSlide).fadeOut(500)&#xD;&#xA;     if (currentSlide < slideCount) {&#xD;&#xA;      currentSlide += 1;&#xD;&#xA;     } else {&#xD;&#xA;      currentSlide = 0;&#xD;&#xA;     }&#xD;&#xA;     $('.news-ticker ul li').eq(currentSlide).fadeIn(500)&#xD;&#xA;     }, tickerSpeed);&#xD;&#xA;     });