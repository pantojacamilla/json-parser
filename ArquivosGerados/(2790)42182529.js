    arrayA= ["vincent", "Rumpelstilzchen", "LuckeR", "Nordland", "Siegfried", "NeKrone", "Carnage", "tom59fr"];&#xD;&#xA;    arrayB= ["vincent"];&#xD;&#xA;    for (var i = 0, len = arrayA.length; i < len; i++) {&#xD;&#xA;    			&#xD;&#xA;      if($.inArray(arrayA[i], arrayB) == -1){&#xD;&#xA;        var removeName= arrayA[i];&#xD;&#xA;        console.log('Removing row of: ' + removeName);&#xD;&#xA;        /*&#xD;&#xA;        $('tr[player=\'' + removeName + '\']').find('td')&#xD;&#xA;        .wrapInner('<div style="display: block;" />')&#xD;&#xA;        .parent()&#xD;&#xA;        .find('td > div')&#xD;&#xA;        .slideUp(700, function(){&#xD;&#xA;          $(this).parent().parent().remove();&#xD;&#xA;        });&#xD;&#xA;        */&#xD;&#xA;        arrayA= $.grep(arrayA, function(value) {&#xD;&#xA;          return value != removeName;&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;        console.log('arrayA now consists of: ' + arrayA);&#xD;&#xA;      }&#xD;&#xA;    }