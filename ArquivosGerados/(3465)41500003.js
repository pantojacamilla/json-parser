    $(".mdl-navigation__link").click(function() {&#xD;&#xA;    		&#xD;&#xA;    		var idOfSectionToShow = $(this).attr("href");&#xD;&#xA;    		//alert(idOfSectionToShow);//check&#xD;&#xA;    		&#xD;&#xA;    		$(".mdl-tabs").each(function() {&#xD;&#xA;    			if ( $(this).css("display") != "none" ) {&#xD;&#xA;    				//alert($(this).attr("class"));//check&#xD;&#xA;    				$(this).hide();&#xD;&#xA;    			}&#xD;&#xA;    		}); &#xD;&#xA;    		//alert(  typeof $(idOfSectionToShow)  );&#xD;&#xA;    		&#xD;&#xA;    		//alert( "idOfSectionToShow: " + $(idOfSectionToShow).attr("id") );&#xD;&#xA;    		&#xD;&#xA;    		$(idOfSectionToShow).show();&#xD;&#xA;    		&#xD;&#xA;    	});