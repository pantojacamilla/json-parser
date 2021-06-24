    var vidElement = document.getElementById('video');&#xD;&#xA;        var vidSources = [&#xD;&#xA;          "http://www.w3schools.com/html/mov_bbb.mp4",&#xD;&#xA;          "http://www.w3schools.com/html/movie.mp4"&#xD;&#xA;          ];&#xD;&#xA;        var activeVideo = Math.floor((Math.random() * vidSources.length));&#xD;&#xA;        vidElement.src = vidSources[activeVideo];&#xD;&#xA;        vidElement.addEventListener('ended', function(e) {&#xD;&#xA;          // update the active video index&#xD;&#xA;          activeVideo = (++activeVideo) % vidSources.length;&#xD;&#xA;          if(activeVideo === vidSources.length){&#xD;&#xA;            activeVideo = 0;&#xD;&#xA;          }&#xD;&#xA;          // update the video source and play&#xD;&#xA;          vidElement.src = vidSources[activeVideo];&#xD;&#xA;          vidElement.play();&#xD;&#xA;        });