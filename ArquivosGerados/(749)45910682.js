     $(document).on('click','#addList', function(){&#xD;&#xA;            		var lines = $('#list').val().split(/\n/);&#xD;&#xA;            		var texts = []&#xD;&#xA;            		for (var i=0; i < lines.length; i++) {&#xD;&#xA;            		  if (/\S/.test(lines[i])) {&#xD;&#xA;            		    texts.push($.trim(lines[i]));&#xD;&#xA;            		  }&#xD;&#xA;            		}&#xD;&#xA;            		var list = JSON.stringify(texts);&#xD;&#xA;            		for(var e=0; e<list.length; e++){&#xD;&#xA;            			var li = li+'<li class="c1_2v">'+list[e]+'</li>'; &#xD;&#xA;            		}&#xD;&#xA;            		$('.content').append($('<ul>'+li+'</ul>'));&#xD;&#xA;        });