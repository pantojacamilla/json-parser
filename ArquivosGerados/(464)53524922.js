    function WidgetThing(className) {&#xD;&#xA;    	&#xD;&#xA;      var items = [];&#xD;&#xA;      &#xD;&#xA;      function removeItem(e) {&#xD;&#xA;        var idx = parseInt($(e.target).attr('data-index'));&#xD;&#xA;        items.splice(idx, 1);&#xD;&#xA;        updateItems();&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;    	function updateItems() {&#xD;&#xA;      	var ul = $('.' + className + ' .items ul');&#xD;&#xA;        ul.html('');&#xD;&#xA;      	items.forEach(function(item, idx) {&#xD;&#xA;        	ul.append('<li data-index="' + idx + '">' + item + '</li>');&#xD;&#xA;        });&#xD;&#xA;        ul.on('click', 'li', removeItem);&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      $('.' + className + ' .add-button').click(function(e) {&#xD;&#xA;      	var input = $('.' + className + ' input');&#xD;&#xA;      	items.push(input.val());&#xD;&#xA;        input.val('');&#xD;&#xA;        updateItems();&#xD;&#xA;      });&#xD;&#xA;    &#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;    	WidgetThing('widget1');&#xD;&#xA;      WidgetThing('widget2');&#xD;&#xA;    });