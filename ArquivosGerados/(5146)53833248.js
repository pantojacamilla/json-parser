    var welcomeMovie1 = "http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4";&#xD;&#xA;    var welcomeMovie2 = "http://mirrors.standaloneinstaller.com/video-sample/TRA3106.mp4"&#xD;&#xA;    var welcomeMovie3 = "http://mirrors.standaloneinstaller.com/video-sample/Panasonic_HDC_TM_700_P_50i.mp4";&#xD;&#xA;    var messageTime;&#xD;&#xA;    //function to play a video1 to iframe using post messages&#xD;&#xA;    function welcomeMessage1() {&#xD;&#xA;      document.getElementById('videoframe').contentWindow.postMessage(&#xD;&#xA;        JSON.stringify({&#xD;&#xA;          event: 'playVideo(welcomeMovie1)'&#xD;&#xA;        }),&#xD;&#xA;        '*'&#xD;&#xA;      )&#xD;&#xA;    }&#xD;&#xA;    //function to play a video2 to iframe using post messages&#xD;&#xA;    function welcomeMessage2() {&#xD;&#xA;      document.getElementById('videoframe').contentWindow.postMessage(&#xD;&#xA;        JSON.stringify({&#xD;&#xA;          event: 'playVideo(welcomeMovie2)'&#xD;&#xA;        }),&#xD;&#xA;        '*'&#xD;&#xA;      )&#xD;&#xA;    }&#xD;&#xA;    //function to play a video3 to iframe using post messages&#xD;&#xA;    function welcomeMessage3() {&#xD;&#xA;      document.getElementById('videoframe').contentWindow.postMessage(&#xD;&#xA;        JSON.stringify({&#xD;&#xA;          event: 'playVideo(welcomeMovie2)'&#xD;&#xA;        }),&#xD;&#xA;        '*'&#xD;&#xA;      )&#xD;&#xA;    }&#xD;&#xA;    //function to play a video1 to iframe using post messages at Specific time&#xD;&#xA;    setInterval(function() {&#xD;&#xA;      var messageTime = new Date().getHours();&#xD;&#xA;      if (messageTime >= 5 && messageTime < 10) {&#xD;&#xA;        welcomeMessage1();&#xD;&#xA;        console.log(welcomeMessage2());&#xD;&#xA;      }&#xD;&#xA;    }, 1000 * 60);&#xD;&#xA;    //function to play a video2 to iframe using post messages at Specific time&#xD;&#xA;    setInterval(function() {&#xD;&#xA;      var messageTime = new Date().getHours();&#xD;&#xA;      console.log(date.toLocaleString('en-GB'));&#xD;&#xA;      if (messageTime >= 10 && messageTime < 22) {&#xD;&#xA;        welcomeMessage2();&#xD;&#xA;        console.log(welcomeMessage2());&#xD;&#xA;      }&#xD;&#xA;    }, 1000 * 60);&#xD;&#xA;    //function to play a video3 to iframe using post messages at Specific time&#xD;&#xA;    setInterval(function() {&#xD;&#xA;      var messageTime = new Date().getHours();&#xD;&#xA;      if (messageTime >= 22 && messageTime < 5) {&#xD;&#xA;        welcomeMessage3();&#xD;&#xA;      }&#xD;&#xA;    }, 1000 * 60);&#xD;&#xA;    // promise function to create custom video controls and play functions&#xD;&#xA;    function playVideo(src) {&#xD;&#xA;      $("#playervideo").attr("src", src);&#xD;&#xA;      $("#playervideo")[0].muted = false;&#xD;&#xA;      if (autoplay == true) {&#xD;&#xA;        var playPromise = $("#playervideo")[0].play();&#xD;&#xA;        if (playPromise !== undefined) {&#xD;&#xA;          playPromise.then(function() {}).catch(function() {&#xD;&#xA;            if (autoplay == true) {&#xD;&#xA;              $("#video-unmute-button").addClass("show");&#xD;&#xA;              $("#playervideo")[0].muted = true;&#xD;&#xA;              var playPromise2 = $("#playervideo")[0].play();&#xD;&#xA;              playPromise2.then(function() {&#xD;&#xA;              }).catch(function() {&#xD;&#xA;                $("#video-start-button").addClass("show");&#xD;&#xA;                $("#video-start-button").on("click", function() {&#xD;&#xA;                  $("#playervideo")[0].muted = false;&#xD;&#xA;                  $("#playervideo")[0].play();&#xD;&#xA;                  $("#video-start-button").removeClass("show");&#xD;&#xA;                });&#xD;&#xA;              });&#xD;&#xA;              console.log("pause force");&#xD;&#xA;            } else {&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;        } else {}&#xD;&#xA;      } else {&#xD;&#xA;      }&#xD;&#xA;    }