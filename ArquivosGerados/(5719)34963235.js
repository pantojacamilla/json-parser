    $(document).ready(function(){&#xD;&#xA;    	$('.link').hover(&#xD;&#xA;    		function() {&#xD;&#xA;    			var bg = $(this).data('fond');&#xD;&#xA;    &#xD;&#xA;    			// alert(bg);&#xD;&#xA;    &#xD;&#xA;    			$('body').css("backgroundImage", 'url(' + bg + ')');&#xD;&#xA;    		},&#xD;&#xA;    		function () {&#xD;&#xA;                 $('body').css("backgroundImage", 'url(http://sport-nc.com/wp-content/uploads/2015/06/India_Surf_Tours_-_17__1_.jpg)');&#xD;&#xA;            }&#xD;&#xA;    	);&#xD;&#xA;    });