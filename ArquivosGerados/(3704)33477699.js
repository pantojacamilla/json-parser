    $(function () {&#xD;&#xA;    $('button').on('click', function () {&#xD;&#xA;        var theText = $('textarea').val();&#xD;&#xA;        var i = 200;&#xD;&#xA;        while (theText.length > 200) {&#xD;&#xA;            console.log('looping');&#xD;&#xA;            while (theText.charAt(i) !== '.') {&#xD;&#xA;                i++;   &#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            console.log(i);&#xD;&#xA;            $("#text_land").append("<p>" + theText.substring(0, i+1) + "</p>");&#xD;&#xA;            theText = theText.substring(i+1);&#xD;&#xA;            i = 200;&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;        $('#text_land').append("<p>" + theText + "</p>");&#xD;&#xA;    })&#xD;&#xA;})