    var context = new AudioContext(); // Create audio container &#xD;&#xA;    var request = new XMLHttpRequest();&#xD;&#xA;    var dataArray = new Float32Array(bufferLength);&#xD;&#xA;    var analyser = context.createAnalyser();&#xD;&#xA;        analyser.smoothingTimeConstant = 0.3;&#xD;&#xA;        analyser.fftSize = 1024;&#xD;&#xA;        analyser.getFloatFrequencyData(dataArray);&#xD;&#xA;    var bufferLength = analyser.frequencyBinCount;&#xD;&#xA;    var audioElement = document.getElementById("player");&#xD;&#xA;    audioElement.addEventListener("canplay", function() {&#xD;&#xA;        var source = context.createMediaElementSource(audioElement);&#xD;&#xA;        source.connect(context.destination);&#xD;&#xA;    });&#xD;&#xA;    function start(){ &#xD;&#xA;        &#xD;&#xA;        request.open("GET", "tune.wav", true);&#xD;&#xA;        request.responseType = "arraybuffer"; // Read as binary data &#xD;&#xA;        request.onload = function(){ &#xD;&#xA;            var data = request.response;        &#xD;&#xA;            audioRouting(data);&#xD;&#xA;        };  &#xD;&#xA;        request.send(); &#xD;&#xA;    }&#xD;&#xA;    function stop() { &#xD;&#xA;    source.stop(context.currentTime); // stop the source immediately &#xD;&#xA;    }&#xD;&#xA;    // Create Buffered Sound Source &#xD;&#xA;    function audioRouting(data) { &#xD;&#xA;        source = context.createBufferSource(); // Create sound source &#xD;&#xA;        context.decodeAudioData(data, function(buffer){ // Create source buffer from raw binary &#xD;&#xA;        source.buffer = buffer; // Add buffered data to object &#xD;&#xA;        source.connect(context.destination); // Connect sound source to output &#xD;&#xA;        playSound(source); // Pass the object to the play function &#xD;&#xA;        }); &#xD;&#xA;    }&#xD;&#xA;    // Tell the Source when to play &#xD;&#xA;    function playSound() { &#xD;&#xA;    source.start(context.currentTime); // play the source immediately &#xD;&#xA;    }&#xD;&#xA;    console.log();&#xD;&#xA;    $( document ).ready(function() {&#xD;&#xA;        $( ".play" ).click(function() {&#xD;&#xA;        start();&#xD;&#xA;        console.log("yo");&#xD;&#xA;        });&#xD;&#xA;        $( ".stop" ).click(function() {&#xD;&#xA;        stop();&#xD;&#xA;        });&#xD;&#xA;    });