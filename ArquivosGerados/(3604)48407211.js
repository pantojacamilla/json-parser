    function setup() {&#xD;&#xA;        var canvasDiv = document.getElementById('myCanvas');&#xD;&#xA;        var divWidth = canvasDiv.getBoundingClientRect().width;&#xD;&#xA;        var divHeight = canvasDiv.getBoundingClientRect().height;&#xD;&#xA;        var sketchCanvas = createCanvas(divWidth,divHeight);&#xD;&#xA;        sketchCanvas.parent("myCanvas");&#xD;&#xA;        background(0)&#xD;&#xA;       &#xD;&#xA;    }&#xD;&#xA;    function windowResized() {&#xD;&#xA;      	var canvasDiv = document.getElementById('myCanvas');&#xD;&#xA;        var divWidth = canvasDiv.getBoundingClientRect().width;&#xD;&#xA;        var divHeight = canvasDiv.getBoundingClientRect().height;&#xD;&#xA;        resizeCanvas(divWidth, divHeight);&#xD;&#xA;         background(0)&#xD;&#xA;    }&#xD;&#xA;    function draw(){&#xD;&#xA;    	&#xD;&#xA;      &#xD;&#xA;     &#xD;&#xA;    }