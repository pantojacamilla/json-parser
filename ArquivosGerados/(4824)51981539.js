    $('.a_bttn_inner_action').click(function() {&#xD;&#xA;    	&#xD;&#xA;    	if($(this).children().find('.button')) {&#xD;&#xA;    		&#xD;&#xA;    		$(this).parent().find('.button').queue(function(next){ $(this).addClass('o'); next(); });&#xD;&#xA;    	&#xD;&#xA;    		$(this).parent().find('.confirm.yes').delay(300).queue(function(next){ $(this).removeClass('o'); next(); });&#xD;&#xA;    		$(this).parent().find('.confirm.no').delay(100).queue(function(next){ $(this).removeClass('o'); next(); });&#xD;&#xA;    	&#xD;&#xA;    	} else if($(this).children().find('.confirm.no')) {&#xD;&#xA;    		&#xD;&#xA;    		$(this).parent().find('.confirm.yes').delay(300).queue(function(next){ $(this).addClass('o'); next(); });&#xD;&#xA;    		$(this).parent().find('.confirm.no').delay(100).queue(function(next){ $(this).addClass('o'); next(); });&#xD;&#xA;    		&#xD;&#xA;    		$(this).parent().find('.button').queue(function(next){ $(this).removeClass('o'); next(); });&#xD;&#xA;    	}&#xD;&#xA;    }