    function fire(n) {&#xD;&#xA;        console.log(n);&#xD;&#xA;    }&#xD;&#xA;    for (var i = 1; i <= 4; ++i) {&#xD;&#xA;        $("#fire" + i).on("click", fire(i));&#xD;&#xA;    }&#xD;&#xA;    /*&#xD;&#xA;    $("#fire" + 1).on("click", function(){fire(1)});&#xD;&#xA;    $("#fire" + 2).on("click", function(){fire(2)});&#xD;&#xA;    $("#fire" + 3).on("click", function(){fire(3)});&#xD;&#xA;    $("#fire" + 4).on("click", function(){fire(4)});&#xD;&#xA;    */