    function match(str1, str2){&#xD;&#xA;        var tmpValue = 0;&#xD;&#xA;        var minLength = str1.length;&#xD;&#xA;    	if(str1.length > str2.length){&#xD;&#xA;    		var minLength = str2.length;&#xD;&#xA;    	}	&#xD;&#xA;        var maxLength = str1.length;&#xD;&#xA;    	if(str1.length < str2.length){&#xD;&#xA;    		var maxLength = str2.length;&#xD;&#xA;    	}&#xD;&#xA;        for(var i = 0; i < minLength; i++) {&#xD;&#xA;            if(str1[i] == str2[i]) {&#xD;&#xA;                tmpValue++;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        var weight = tmpValue / maxLength;&#xD;&#xA;        return (weight * 100);&#xD;&#xA;    }&#xD;&#xA;    $(document).on('click','li a',function(e){&#xD;&#xA;       e.preventDefault();&#xD;&#xA;       console.log('hello world');&#xD;&#xA;       var page =        $(this).closest('li').data('page');&#xD;&#xA;       $('#content_show').html(page);&#xD;&#xA;    });&#xD;&#xA;    $(document).bind('keypress', function(e){&#xD;&#xA;       // if(e.ctrlKey && e.keyCode == 32){&#xD;&#xA;       //    console.log('control + space');&#xD;&#xA;       // }    &#xD;&#xA;       $('.search-area').show(); &#xD;&#xA;       var searchTerm = $('#search_term').val();&#xD;&#xA;       &#xD;&#xA;      var originalSearchTree = [];&#xD;&#xA;      var foundItem = [];&#xD;&#xA;       $('.main-navigation li:not(.dropdown)').each(function(){&#xD;&#xA;          originalSearchTree.push($(this).data('page'));&#xD;&#xA;       });&#xD;&#xA;      console.log(originalSearchTree);&#xD;&#xA;      originalSearchTree.forEach(function(item){&#xD;&#xA;         if(match(searchTerm,item) >= 30){&#xD;&#xA;           foundItem.push(item);&#xD;&#xA;         }&#xD;&#xA;      });&#xD;&#xA;      console.log('found items',foundItem);&#xD;&#xA;      var f = '';&#xD;&#xA;      foundItem.forEach(function(found){&#xD;&#xA;         f += `<div class="found-items">${found}</div>`;&#xD;&#xA;        $('.search-results').html(f);&#xD;&#xA;      });&#xD;&#xA;    });