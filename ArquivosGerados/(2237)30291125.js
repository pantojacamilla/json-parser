    $(function() {&#xD;&#xA;    		var $animatedEls = $('.marked');&#xD;&#xA;    &#xD;&#xA;            $(window).scroll(function(e) {&#xD;&#xA;    &#xD;&#xA;                $.each($animatedEls, function(index, item) {&#xD;&#xA;                    console.log($(item).offset());&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;    });//$(function(){