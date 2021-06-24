    <script>&#xD;&#xA;	  (function(doc) {&#xD;&#xA;	    var canvas = doc.getElementById("testCanvas");&#xD;&#xA;	    var context = canvas.getContext("2d");&#xD;&#xA;          &#xD;&#xA;	    &#xD;&#xA;	     // Click event handler&#xD;&#xA;	    canvas.onclick = function(e) {&#xD;&#xA;	    	&#xD;&#xA;           // Creating array for circles &#xD;&#xA;            var circles = [];&#xD;&#xA;            &#xD;&#xA;            // Creating a circle with random color and a given radius at the &#xD;&#xA;    mouse click&#xD;&#xA;            &#xD;&#xA;                &#xD;&#xA;            var nextColor = randomColor();&#xD;&#xA;            context.fillStyle = nextColor; &#xD;&#xA;            context.beginPath();&#xD;&#xA;            context.arc(e.clientX, e.clientY, 30, 0, 2 * Math.PI);&#xD;&#xA;            context.fill();&#xD;&#xA;            context.closePath();&#xD;&#xA;                &#xD;&#xA;            &#xD;&#xA;            // Creating circle object&#xD;&#xA;            var circle = {x_coord: e.clientX, y_coord: e.clientY, color: &#xD;&#xA;    nextColor, visible: true};&#xD;&#xA;                &#xD;&#xA;            // Pushing circle object into the array of circles&#xD;&#xA;            circles.push(circle);&#xD;&#xA;            &#xD;&#xA;			//document.getElementById("demo").innerHTML = circles;&#xD;&#xA;            //console.log(circles);&#xD;&#xA;	    }&#xD;&#xA;	    &#xD;&#xA;    })(document);&#xD;&#xA;    </script>