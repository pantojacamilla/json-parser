    jQuery(document).ready(function($){&#xD;&#xA;    	// browser window scroll (in pixels) after which the "back to top" link is shown&#xD;&#xA;    	var offset = 300,&#xD;&#xA;    		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced&#xD;&#xA;    		offset_opacity = 1200,&#xD;&#xA;    		//duration of the top scrolling animation (in ms)&#xD;&#xA;    		scroll_top_duration = 700,&#xD;&#xA;    		//grab the "back to top" link&#xD;&#xA;    		$back_to_top = $('.cd-top');&#xD;&#xA;    	//hide or show the "back to top" link&#xD;&#xA;    	$(window).scroll(function(){&#xD;&#xA;    		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');&#xD;&#xA;    		if( $(this).scrollTop() > offset_opacity ) { &#xD;&#xA;    			$back_to_top.addClass('cd-fade-out');&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;    	//smooth scroll to top&#xD;&#xA;    	$back_to_top.on('click', function(event){&#xD;&#xA;    		event.preventDefault();&#xD;&#xA;    		$('body,html').animate({&#xD;&#xA;    			scrollTop: 0 ,&#xD;&#xA;    		 	}, scroll_top_duration&#xD;&#xA;    		);&#xD;&#xA;    	});&#xD;&#xA;    });