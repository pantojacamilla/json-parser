    $("ul.AAA").click(function() {&#xD;&#xA;      $(this).css("background-color", "yellow");&#xD;&#xA;      $(this).removeClass("AAA");&#xD;&#xA;      $(this).addClass("BBB");&#xD;&#xA;    })&#xD;&#xA;    $("ul.BBB").click(function() {&#xD;&#xA;      $(this).css("background-color", "blue");&#xD;&#xA;      $(this).removeClass("BBB");&#xD;&#xA;      $(this).addClass("AAA");&#xD;&#xA;    })