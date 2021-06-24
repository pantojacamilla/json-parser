    const video = document.getElementById("video");&#xD;&#xA;    const set = new Set();&#xD;&#xA;    const percent = .8;&#xD;&#xA;    let toWatch;&#xD;&#xA;    function mediaWatched (curr) {&#xD;&#xA;      alert(`${curr}% of media watched`)&#xD;&#xA;    }&#xD;&#xA;    function handleMetadata(e) {&#xD;&#xA;      toWatch = Math.ceil(video.duration * percent);&#xD;&#xA;      console.log(toWatch, video.duration);&#xD;&#xA;    }&#xD;&#xA;    function handleTimeupdate (e) {&#xD;&#xA;      set.add(Math.ceil(video.currentTime));&#xD;&#xA;      let watched = Array.from(set).pop();&#xD;&#xA;      if (set.has(toWatch) && watched === toWatch) {&#xD;&#xA;        video.removeEventListener("timeupdate", handleTimeupdate);&#xD;&#xA;        console.log(watched);&#xD;&#xA;        mediaWatched(&#xD;&#xA;          Math.round(watched / Math.ceil(video.duration) * 100)&#xD;&#xA;        );&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    video.addEventListener("loadedmetadata", handleMetadata);&#xD;&#xA;    video.addEventListener("timeupdate", handleTimeupdate);