    $(document).ready(function() {&#xD;&#xA;      var api = "https://wind-bow.gomix.me/twitch-api";&#xD;&#xA;      var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", &#xD;&#xA;    "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];&#xD;&#xA;      var newStreamers = []&#xD;&#xA;  &#xD;&#xA;       for (var i = 0; i <= streamers.length-1; i++) {&#xD;&#xA;        newStreamers.push('<li>' + streamers[i] + '</li>' + '<hr>');&#xD;&#xA;      }&#xD;&#xA;      $("#streamers").html(newStreamers.join(""));&#xD;&#xA;      $(".container > .list > ul > li:not(:last-child)").css();&#xD;&#xA;      $(".container > .list > ul > li").css({'margin-left': '50px', 'padding': &#xD;&#xA;    '30px'});&#xD;&#xA;      $("#streamers:last-child hr").css({'display': 'none'});&#xD;&#xA;    }); 