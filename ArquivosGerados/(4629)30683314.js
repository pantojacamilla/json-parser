    $( "#button1" ).click(function() { hide('table1'); });&#xD;&#xA;    $( "#button2" ).click(function() { show('table1'); });&#xD;&#xA;    function hide(tableid)&#xD;&#xA;    {&#xD;&#xA;    	$('#'+tableid+' th').each(function(i) {&#xD;&#xA;    		var bool = true;&#xD;&#xA;        		var tds = $(this).parents('table').find('tr td:nth-child(' + (i + 1) + ')');&#xD;&#xA;       	 	tds.each( function(j) { &#xD;&#xA;    			if (this.innerHTML != '') {bool=false;return false;}; &#xD;&#xA;    		});&#xD;&#xA;    		if (bool) &#xD;&#xA;    		{&#xD;&#xA;                $(this).hide();&#xD;&#xA;    			tds.hide();&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;    }&#xD;&#xA;    function show(tableid)&#xD;&#xA;    {&#xD;&#xA;    	$('#'+tableid+' th').each(function(i) {&#xD;&#xA;    		var bool = true;&#xD;&#xA;        		var tds = $(this).parents('table').find('tr td:nth-child(' + (i + 1) + ')');&#xD;&#xA;       	 	tds.each( function(j) { &#xD;&#xA;    			if (this.innerHTML != '') {bool=false;return false;}; &#xD;&#xA;    		});&#xD;&#xA;    		if (bool) &#xD;&#xA;    		{&#xD;&#xA;                $(this).show();&#xD;&#xA;    			tds.show();&#xD;&#xA;    		}		&#xD;&#xA;    	});&#xD;&#xA;    }