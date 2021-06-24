    	&#xD;&#xA;    	//Updating z-index in css duo to more than 1 note&#xD;&#xA;    	var zIndex = 10000;&#xD;&#xA;    	function updateIndex(element){&#xD;&#xA;    		zIndex = zIndex+1; //Counter, '++' = +1&#xD;&#xA;    		$(element).css('z-index', zIndex);&#xD;&#xA;    		}&#xD;&#xA;    		&#xD;&#xA;    		&#xD;&#xA;    	$("div .makeNew").on("click", function(e) {&#xD;&#xA;    		updateIndex(this);&#xD;&#xA;    	});&#xD;&#xA;    	$(".note input textarea").on("click", function(e) {&#xD;&#xA;    		updateIndex(this);&#xD;&#xA;    	});&#xD;&#xA;    	&#xD;&#xA;    	function MakeNewNote(){&#xD;&#xA;    		zIndex = zIndex + 1;&#xD;&#xA;    		$('#content').css('z-index', zIndex).append("<div class="note" ><div id="controlsTop"><div class="deleteNote">X</div><div class="makeNew">+</div></div><input value="My Note" /><textarea value="I Have something to save" cols="20" name="S1" rows="1"></textarea><div id="controlsExtra hidden"><div class="controlBold"></div><div class="controlItalic"></div><div class="controlUnderlined"></div><div class="controlLeft"></div><div class="controlCenter"></div><div class="controlRight"></div><div class="controlBigFont"></div><div class="controlSmallFont"></div></div> <!-- controlsExtra --></div> <!-- note -->");&#xD;&#xA;    		$('.note').draggable();&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	function DeleteThisNote(){&#xD;&#xA;    		$('.note').remove();&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	$(document).ready(MakeNewNote); // Creates a note just at startup&#xD;&#xA;    	&#xD;&#xA;    	$(document).ready(function(){&#xD;&#xA;    		$('div .makeNew').on('click', MakeNewNote); // Creates a new note, enables button press inside the note &#xD;&#xA;    		&#xD;&#xA;    		$('div .deleteNote').one('click', DeleteThisNote); // Removes current note&#xD;&#xA;    		&#xD;&#xA;    	});