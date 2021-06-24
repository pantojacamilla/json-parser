    //set default degree (360*5)&#xD;&#xA;    var degree = 1800;&#xD;&#xA;    //number of clicks = 0&#xD;&#xA;    var clicks = 0;&#xD;&#xA;    &#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;    	&#xD;&#xA;    	/*WHEEL SPIN FUNCTION*/&#xD;&#xA;    	$('#spin').click(function(){&#xD;&#xA;    		&#xD;&#xA;    		//add 1 every click&#xD;&#xA;    		clicks ++;&#xD;&#xA;    		&#xD;&#xA;    		/*multiply the degree by number of clicks&#xD;&#xA;    	  generate random number between 1 - 360, &#xD;&#xA;        then add to the new degree*/&#xD;&#xA;    		var newDegree = degree*clicks;&#xD;&#xA;    		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;&#xD;&#xA;    		totalDegree = newDegree+extraDegree;&#xD;&#xA;    		&#xD;&#xA;    		/*let's make the spin btn to tilt every&#xD;&#xA;    		time the edge of the section hits &#xD;&#xA;    		the indicator*/&#xD;&#xA;    		$('#wheel .sec').each(function(){&#xD;&#xA;    			var t = $(this);&#xD;&#xA;    			var noY = 0;&#xD;&#xA;    			&#xD;&#xA;    			var c = 0;&#xD;&#xA;    			var n = 700;	&#xD;&#xA;    			var interval = setInterval(function () {&#xD;&#xA;    				c++;				&#xD;&#xA;    				if (c === n) { &#xD;&#xA;    					clearInterval(interval);				&#xD;&#xA;    				}	&#xD;&#xA;    					&#xD;&#xA;    				var aoY = t.offset().top;&#xD;&#xA;    				$("#txt").html(aoY);&#xD;&#xA;    				console.log(aoY);&#xD;&#xA;    				&#xD;&#xA;    				/*23.7 is the minumum offset number that &#xD;&#xA;    				each section can get, in a 30 angle degree.&#xD;&#xA;    				So, if the offset reaches 23.7, then we know&#xD;&#xA;    				that it has a 30 degree angle and therefore, &#xD;&#xA;    				exactly aligned with the spin btn*/&#xD;&#xA;    				if(aoY < 23.89){&#xD;&#xA;    					console.log('<<<<<<<<');&#xD;&#xA;    					$('#spin').addClass('spin');&#xD;&#xA;    					setTimeout(function () { &#xD;&#xA;    						$('#spin').removeClass('spin');&#xD;&#xA;    					}, 100);	&#xD;&#xA;    				}&#xD;&#xA;    			}, 10);&#xD;&#xA;    			&#xD;&#xA;    			$('#inner-wheel').css({&#xD;&#xA;    				'transform' : 'rotate(' + totalDegree + 'deg)'			&#xD;&#xA;    			});&#xD;&#xA;    		 &#xD;&#xA;    			noY = t.offset().top;&#xD;&#xA;    			&#xD;&#xA;    		});&#xD;&#xA;    	});&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    });//DOCUMENT READY&#xD;&#xA;    	