    var obj = {&#xD;&#xA;        	key1: 'value1',&#xD;&#xA;        	key2: 'value2',&#xD;&#xA;        	key3: 'value3'&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        $('#myTable thead tr').append('<th>Key Column</th>');&#xD;&#xA;        $('#myTable thead tr').append('<th>Value Column</th>');&#xD;&#xA;        var markup = '';&#xD;&#xA;        for (var i in obj) {&#xD;&#xA;        	markup = "<tr><td>" + i + "</td></td><td>" + obj[i] + "</td></tr>";&#xD;&#xA;        	$("#myTable tbody #first-col").append(markup);&#xD;&#xA;        }