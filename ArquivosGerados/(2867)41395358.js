    $(document).ready(function(){&#xD;&#xA;    	/*$(".item:nth-child(2)").css("dispaly", "none");&#xD;&#xA;            $(".item:nth-child(2)").css("height", window.innerHeight);&#xD;&#xA;    		*/$(".item:nth-child(1)").click(function(){&#xD;&#xA;    			 $(".item:nth-child(2)").show();&#xD;&#xA;    		});/*&#xD;&#xA;    		$(".item:nth-child(2)").click(function(){&#xD;&#xA;    			 $(".item:nth-child(2)").hide();&#xD;&#xA;    		});&#xD;&#xA;    	*/&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	  $(".menu").find('.item').click(function(){&#xD;&#xA;    		var index = $(this).index();&#xD;&#xA;    		$('select[name=size]')&#xD;&#xA;    		.find('option:eq(' + index + ')')&#xD;&#xA;    		.attr('selected',true);&#xD;&#xA;    		$(this).prependTo('.menu');&#xD;&#xA;    	});&#xD;&#xA;    	&#xD;&#xA;    });