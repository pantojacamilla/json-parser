    /* I need to make the idea of the following code work: */&#xD;&#xA;      $( window ).resize(function() {&#xD;&#xA;      	/* First get the original offset:  */&#xD;&#xA;      	orginalOffset = $(".scrollable").offset().top;&#xD;&#xA;      &#xD;&#xA;      	/* Secondly reset margin-top before getting offset again after resizing:  */&#xD;&#xA;        $(".scrollable").stop().animate({&#xD;&#xA;    				marginTop: 0&#xD;&#xA;         });&#xD;&#xA;         &#xD;&#xA;         /*Third get the current offset after reset: */&#xD;&#xA;         scrollableTopOffset = $(".scrollable").offset().top;&#xD;&#xA;         &#xD;&#xA;         /* Third it should go back to its original offset: */&#xD;&#xA;         $(".scrollable").stop().animate({&#xD;&#xA;    				marginTop: $(window).scrollTop() - scrollableTopOffset + topPadding&#xD;&#xA;    			});&#xD;&#xA;      });&#xD;&#xA;      /* End of code what needs to be answered in my question */