    //code block time tests&#xD;&#xA;    var i = 0;&#xD;&#xA;    var start = new Date().getTime()/1000;&#xD;&#xA;    while(i < 100000){&#xD;&#xA;      (function(){i++;})()&#xD;&#xA;    }&#xD;&#xA;    console.log((new Date().getTime()/1000)-start);&#xD;&#xA;    //function call test 0.016000032424926758&#xD;&#xA;    var j = 0;&#xD;&#xA;    var start = new Date().getTime()/1000;&#xD;&#xA;    while(j < 100000){&#xD;&#xA;      do {j++;}while(false);&#xD;&#xA;    }&#xD;&#xA;    console.log((new Date().getTime()/1000)-start);&#xD;&#xA;    //do once test 0.002000093460083008