    $(function() {&#xD;&#xA;    	&#xD;&#xA;    var height =1000;&#xD;&#xA;    var animSpeed=1000;&#xD;&#xA;    var topArrowbtn = $('.arrowTop');&#xD;&#xA;    var bottomArrowbtn = $('.arrowBottom');&#xD;&#xA;    var $slider = $('.projectorganizer');&#xD;&#xA;    var $slideContainer = $('.SlideContainer',$slider);&#xD;&#xA;    var $projects = $('.projectC', $slider); &#xD;&#xA;    var $p1 = $('.pro1');&#xD;&#xA;    var $p2 = $('.pro2');&#xD;&#xA;    var $project = $('.videoSel');&#xD;&#xA;    var $project2 = $('.videoSel2');&#xD;&#xA;    var $project3 = $('.videoSel3');&#xD;&#xA;    var interval;&#xD;&#xA;    	function startSlidingUp() {&#xD;&#xA;    	&#xD;&#xA;    	$slideContainer.animate({'margin-top': '+=' +50},animSpeed, function(){&#xD;&#xA;    		&#xD;&#xA;    		&#xD;&#xA;    		&#xD;&#xA;    		&#xD;&#xA;    		}&#xD;&#xA;    	&#xD;&#xA;    		);&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	function changeProject1() {&#xD;&#xA;    		$("div.videoSel").replaceWith($project2);&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	function changeProject2() {&#xD;&#xA;    		$("div.videoSel2").replaceWith($project3);&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	/*$p1&#xD;&#xA;    	.on('click',changeProject1);*/&#xD;&#xA;    	&#xD;&#xA;    	$p2&#xD;&#xA;    	.on('click',changeProject2);&#xD;&#xA;      &#xD;&#xA;      $p1&#xD;&#xA;    	.on('click',startSlidingUp);&#xD;&#xA;    	&#xD;&#xA;    	/*check if&#xD;&#xA;    3&#xD;&#xA;    4&#xD;&#xA;    5&#xD;&#xA;    6&#xD;&#xA;    7&#xD;&#xA;    // Attach a delegated event handler&#xD;&#xA;    $( "#list" ).on( "click", "a", function( event ) {&#xD;&#xA;        var elem = $( this );&#xD;&#xA;        if ( elem.is( "[here I will check if class name equals to desired]" ) ) {&#xD;&#xA;            elem.attr( "target", "_blank" );&#xD;&#xA;        }&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    	*/&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    });