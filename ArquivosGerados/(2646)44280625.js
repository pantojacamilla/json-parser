    $(document).ready(function() {&#xD;&#xA;      $('.lightbox').click(function() {&#xD;&#xA;        $('.backdrop, .box').animate({&#xD;&#xA;          'opacity': '.50'&#xD;&#xA;        }, 300, 'linear');&#xD;&#xA;        $('.box').animate({&#xD;&#xA;          'opacity': '1.00'&#xD;&#xA;        }, 300, 'linear');&#xD;&#xA;        $('.backdrop, .box').css('display', 'block');&#xD;&#xA;      });&#xD;&#xA;      $('.close').click(function() {&#xD;&#xA;        close_box();&#xD;&#xA;      });&#xD;&#xA;      $('.backdrop').click(function() {&#xD;&#xA;        close_box();&#xD;&#xA;      });&#xD;&#xA;    	//SlideShow&#xD;&#xA;    	$('.next').click(function(){&#xD;&#xA;    		clickNext();&#xD;&#xA;    	});&#xD;&#xA;    	$('.prev').click(function(){&#xD;&#xA;    		clickPrev();&#xD;&#xA;    	});&#xD;&#xA;    });&#xD;&#xA;    function close_box() {&#xD;&#xA;      $('.backdrop, .box').animate({&#xD;&#xA;        'opacity': '0'&#xD;&#xA;      }, 300, 'linear', function() {&#xD;&#xA;        $('.backdrop, .box').css('display', 'none');&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    //PREVIOUS&#xD;&#xA;    function clickPrev() {&#xD;&#xA;    	$('.img_1').css('display', 'block');&#xD;&#xA;    	//Move to the prev Image&#xD;&#xA;    	$('.img_2').css('display', 'none');&#xD;&#xA;    }&#xD;&#xA;    //NEXT&#xD;&#xA;    function clickNext() {&#xD;&#xA;    	$('.img_1').css('display', 'none');&#xD;&#xA;    	//Move to the next Image&#xD;&#xA;    	$('.img_2').css('display', 'block');&#xD;&#xA;    }