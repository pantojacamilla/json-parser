    var html = '<p>lorem ipsum<a href="sound.mp3">Sound</a></p>';&#xD;&#xA;    &#xD;&#xA;    var $html = $('<div/>').html(html);&#xD;&#xA;    $html.find("a[href$='mp3']").filter(function () {&#xD;&#xA;        var $mp3 = $(this);&#xD;&#xA;        return $mp3.attr('href') &#xD;&#xA;    }).wrap(function () {&#xD;&#xA;        return ' <test="' + $(this).attr('href') + '">';&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    html = $html.html();&#xD;&#xA;    &#xD;&#xA;    alert(html);