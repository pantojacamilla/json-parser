    <body>&#xD;&#xA;    <div id="wrapper">&#xD;&#xA;    <div id="cnt" class="question">this is content of page 1 <br></div>&#xD;&#xA;    <div id="cnt2" class="question">this is content of page 2 </div>&#xD;&#xA;    <div id="cnt3" class="question">this is content of page 3 </div>&#xD;&#xA;    <div id="cnt4" class="question">this is content of page 4 <br>&#xD;&#xA;    <div id="bar"></div>&#xD;&#xA;    </div>&#xD;&#xA;    <div id="table">&#xD;&#xA;      <div id="row">&#xD;&#xA;        <div class="button">CLICK HERE</div><div class="button last">CLICK HERE</div>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    </div>&#xD;&#xA;    &#xD;&#xA;    <script>&#xD;&#xA;    $(document).ready(function (){&#xD;&#xA;    &#xD;&#xA;    	$('#cnt2, #cnt3, #cnt4, #cnt5').hide();&#xD;&#xA;    	$('.button').click(function(){&#xD;&#xA;    		 //code&#xD;&#xA;    		var curr = $(".question:visible");&#xD;&#xA;    		var next = curr.next(".question");&#xD;&#xA;    		next.delay(300).fadeIn(300);&#xD;&#xA;    		curr.fadeOut(300);&#xD;&#xA;    		if (!next.next(".question").length) {&#xD;&#xA;    		//Begin Bar Transition&#xD;&#xA;    		$(".button").hide(function(){&#xD;&#xA;    		$("#bar").width(0);&#xD;&#xA;    		$("#bar").delay(500).animate({width: '+=50%'},'slow').delay(600).animate({width: '+=20%'},'slow').delay(60).animate({width: '+=10%'}).delay(2000).animate({width: '+=20%'},'slow');&#xD;&#xA;    			});&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;    &#xD;&#xA;    });&#xD;&#xA;    </script>&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    </body>