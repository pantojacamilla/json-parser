    $("ul").on("click", ".init", function() {&#xD;&#xA;        $(this).closest("ul").children('li:not(.init)').slideDown();&#xD;&#xA;    });&#xD;&#xA;    var allOptions = $("ul").children('li:not(.init)');&#xD;&#xA;    $("ul").on("click", "li:not(.init)", function() {&#xD;&#xA;        allOptions.removeClass('selected');&#xD;&#xA;        $(this).addClass('selected');&#xD;&#xA;        $("ul").children('.init').html($(this).html());&#xD;&#xA;        allOptions.slideUp();&#xD;&#xA;    });