    document.querySelector("img").addEventListener("click",function(event) {&#xD;&#xA;    	/* create a new canvas element in order to edit the image */&#xD;&#xA;    	var canvas = document.createElement("canvas");&#xD;&#xA;    	canvas.width = event.target.offsetWidth;&#xD;&#xA;    	canvas.height = event.target.offsetHeight;&#xD;&#xA;    	canvas.innerHTML = event.target.alt;&#xD;&#xA;    	canvas.getContext("2d").drawImage(event.target,0,0);&#xD;&#xA;    	&#xD;&#xA;    	/* here is where we save the context state */&#xD;&#xA;    	canvas.getContext("2d").save();&#xD;&#xA;    	&#xD;&#xA;    	/* replace the img element with canvas */&#xD;&#xA;    	event.target.parentNode.replaceChild(canvas,event.target);&#xD;&#xA;    });&#xD;&#xA;    /*\&#xD;&#xA;    \*/&#xD;&#xA;    document.querySelector("aside").addEventListener("change",function(event) {&#xD;&#xA;    	var canvas = document.querySelector("canvas");&#xD;&#xA;    	&#xD;&#xA;    	if (!canvas) {&#xD;&#xA;    		return;&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	var context = canvas.getContext("2d");&#xD;&#xA;    	&#xD;&#xA;    	/* restore canvas state to reset context */&#xD;&#xA;    	context.restore();&#xD;&#xA;    	&#xD;&#xA;    	switch (event.target.value) {&#xD;&#xA;    		case "pencil" :&#xD;&#xA;    			context.lineJoin = "round";&#xD;&#xA;    			context.lineCap = "round";&#xD;&#xA;    			context.lineWidth = "6";&#xD;&#xA;    			context.strokeStyle = "rgb(0,0,0)";&#xD;&#xA;    			&#xD;&#xA;    			break;&#xD;&#xA;    		case "eraser" :&#xD;&#xA;    			context.globalCompositeOperation = "destination-out";&#xD;&#xA;    			context.lineJoin = "round";&#xD;&#xA;    			context.lineCap = "round";&#xD;&#xA;    			context.lineWidth = "20";&#xD;&#xA;    			&#xD;&#xA;    			break;&#xD;&#xA;    	}&#xD;&#xA;    	canvas.onmousedown = function(event) {&#xD;&#xA;    		context.beginPath();&#xD;&#xA;    		context.moveTo(event.offsetX,event.offsetY);&#xD;&#xA;    		canvas.onmousemove = function(event) {&#xD;&#xA;    			context.lineTo(event.offsetX,event.offsetY);&#xD;&#xA;    			context.stroke();&#xD;&#xA;    		}&#xD;&#xA;    		document.querySelector("main").onmouseup = function(event) {&#xD;&#xA;    			canvas.onmousemove = null;&#xD;&#xA;    			this.onmouseup = null;&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;    });