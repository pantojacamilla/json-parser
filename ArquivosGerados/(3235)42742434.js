       var index = 1;&#xD;&#xA;       var testNum =1;&#xD;&#xA;       var slideLen = $('.slide-container').length;&#xD;&#xA;       $('.slide-thumb').click(function (event) {&#xD;&#xA;          var slideNum = $(this).attr('data-slide');&#xD;&#xA;          var el = $('.slide-container[data-slide=' + slideNum + ']');&#xD;&#xA;          index = slideNum;&#xD;&#xA;          $(el).addClass('show-slide');&#xD;&#xA;          $(el).siblings('.slide-container').removeClass('show-slide');&#xD;&#xA;          $(this).siblings('.slide-thumb').removeClass('show-slide-thumb');&#xD;&#xA;          $(this).addClass('show-slide-thumb');&#xD;&#xA;    });&#xD;&#xA;    function autoSlide() {&#xD;&#xA;        timer = setInterval(function () {&#xD;&#xA;            if (index >= slideLen) {&#xD;&#xA;                index = 0;&#xD;&#xA;            }&#xD;&#xA;            $('.slide-thumb[data-slide=' + ++index + ']').click();&#xD;&#xA;            testNum++;&#xD;&#xA;        }, 6000);&#xD;&#xA;    }&#xD;&#xA;    autoSlide();