    function turn1() {&#xD;&#xA;      $('#front').css({transform: 'rotateY(180deg)'}, 1000);&#xD;&#xA;      $('#back').css({transform: 'rotateY(360deg)'}, 1000).delay(2000).text('Back1').promise().then(turn2);&#xD;&#xA;    };&#xD;&#xA;    function turn2() {&#xD;&#xA;      $('#front').css({transform: 'rotateY(360deg)'}, 1000).text('Front2'); &#xD;&#xA;      $('#back').css({transform: 'rotateY(540deg)'}, 1000).delay(2000).promise().then(turn3); &#xD;&#xA;    };&#xD;&#xA;    function turn3() {&#xD;&#xA;      $('#front').css({transform: 'rotateY(540deg)'}, 1000); &#xD;&#xA;      $('#back').css({transform: 'rotateY(720deg)'}, 1000).delay(2000).text('Back2').promise().then(turn4); &#xD;&#xA;    };&#xD;&#xA;    function turn4() {&#xD;&#xA;      $('#front').css({transform: 'rotateY(720deg)'}, 1000).text('Front1'); &#xD;&#xA;      $('#back').css({transform: 'rotateY(900deg)'}, 1000).delay(2000).promise().then(turn1); &#xD;&#xA;    };&#xD;&#xA;    $('#go').on('click', turn1);