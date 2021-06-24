    // Local stream that will be reproduced on the video.&#xD;&#xA;    let localStream;&#xD;&#xA;    // Handles success by adding the MediaStream to the video element.&#xD;&#xA;    function gotLocalMediaStream(mediaStream) {&#xD;&#xA;      localStream = mediaStream;&#xD;&#xA;      localVideo.srcObject = mediaStream;&#xD;&#xA;    }&#xD;&#xA;    // Initializes media stream.&#xD;&#xA;    navigator.mediaDevices.getUserMedia(mediaStreamConstraints)&#xD;&#xA;      .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);&#xD;&#xA;      &#xD;&#xA;      