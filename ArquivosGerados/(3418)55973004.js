    $('.drag').draggable({&#xD;&#xA;    	axis: 'x',&#xD;&#xA;    	containment: 'parent',&#xD;&#xA;    	drag: function() {&#xD;&#xA;    		var largura = $('.bar').width();&#xD;&#xA;    		var posicaoX = $(this).position().left;&#xD;&#xA;    		posicaoX = (posicaoX*100)/largura;&#xD;&#xA;    		var l = (100 * parseFloat($(this).position().left / parseFloat($(this).parent().width())));&#xD;&#xA;    		$('#show').val(l);&#xD;&#xA;    	}&#xD;&#xA;    });