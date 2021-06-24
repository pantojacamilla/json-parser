        var canvas = ctx = false;&#xD;&#xA;        var frameRate = 1/40;&#xD;&#xA;        var frameDelay = frameRate * 1000;&#xD;&#xA;        /*used to change the angle and the velocity of the pendulum*/&#xD;&#xA;        var arcSlider = document.getElementById("arc");&#xD;&#xA;        var velocitySlider = document.getElementById('velocity');&#xD;&#xA;        var arcNumber = document.getElementById("arcNum");&#xD;&#xA;        var velocityNumber = document.getElementById("velocityNum");&#xD;&#xA;        var arc = (arcSlider.value / 100);&#xD;&#xA;        var velocity = velocitySlider.value;&#xD;&#xA;        /*sets the values for the pendulum*/&#xD;&#xA;        var pendulum = {mass: 100, length:300, theta: (Math.PI/2) - arc , omega: 0, alpha:0, J:0};&#xD;&#xA;        /*listener for angl slider*/&#xD;&#xA;        arcSlider.addEventListener("change", function(){&#xD;&#xA;            arcNumber.innerHTML = "arc: " + (arcSlider.value / 100);&#xD;&#xA;            arc = arcSlider.value / 100;&#xD;&#xA;            init();&#xD;&#xA;        });&#xD;&#xA;        /*listener for velocity slider*/&#xD;&#xA;        velocitySlider.addEventListener("change", function(){&#xD;&#xA;            velocityNumber.innerHTML = "velocity: " + velocitySlider.value;&#xD;&#xA;            velocity = velocitySlider.value;&#xD;&#xA;            init();&#xD;&#xA;        });&#xD;&#xA;        window.requestAnimFrame = (function(){&#xD;&#xA;            return  window.requestAnimationFrame   || &#xD;&#xA;                window.webkitRequestAnimationFrame || &#xD;&#xA;                window.mozRequestAnimationFrame    || &#xD;&#xA;                window.oRequestAnimationFrame      || &#xD;&#xA;                window.msRequestAnimationFrame     || &#xD;&#xA;                function( callback ){&#xD;&#xA;                    window.setTimeout(callback, 1000 / 60);&#xD;&#xA;                };&#xD;&#xA;        })();&#xD;&#xA;        function init() {&#xD;&#xA;            pendulum.J = pendulum.mass * pendulum.length * pendulum.length / velocity;&#xD;&#xA;            lastTime = new Date();&#xD;&#xA;            requestAnimFrame(draw);  &#xD;&#xA;        }&#xD;&#xA;        /*loop for pendulum*/&#xD;&#xA;    	function draw(){  &#xD;&#xA;            var width = 1000, height = 600;&#xD;&#xA;    	    var len = 150;&#xD;&#xA;            var timeMs = (new Date()).getTime();&#xD;&#xA;            var deltaT = (timeMs - lastTime.getTime()) / 1000; &#xD;&#xA;          &#xD;&#xA;            canvas = document.getElementById("myCanvas");&#xD;&#xA;    	    let ctx = canvas.getContext("2d");&#xD;&#xA;        &#xD;&#xA;            if (deltaT > 0.050)&#xD;&#xA;            {&#xD;&#xA;                deltaT = 0.050;&#xD;&#xA;            }&#xD;&#xA;        &#xD;&#xA;            deltaT = 0.01;&#xD;&#xA;          &#xD;&#xA;            /* Calculate current position*/&#xD;&#xA;            pendulum.theta += pendulum.omega * deltaT + (.5 * pendulum.alpha * deltaT * deltaT );  &#xD;&#xA;          &#xD;&#xA;            /* calculates force */&#xD;&#xA;            var T = pendulum.mass * 9.81 * Math.cos(pendulum.theta) * pendulum.length;  &#xD;&#xA;          &#xD;&#xA;            /* Current acceleration */&#xD;&#xA;            var alpha = T / pendulum.J;   &#xD;&#xA;          &#xD;&#xA;            /*Calculate current velocity*/&#xD;&#xA;            pendulum.omega += .5 * (alpha + pendulum.alpha) * deltaT;   &#xD;&#xA;          &#xD;&#xA;            /* Update acceleration */&#xD;&#xA;            pendulum.alpha = alpha;    &#xD;&#xA;          &#xD;&#xA;            /*sets the current x and y for the pendulum*/&#xD;&#xA;            var bobX = width/2 + pendulum.length * Math.cos(pendulum.theta);&#xD;&#xA;            var bobY = pendulum.length * Math.sin(pendulum.theta);&#xD;&#xA;        &#xD;&#xA;            /*clears the canvas*/&#xD;&#xA;    	    ctx.clearRect(0,0,width,height)&#xD;&#xA;        &#xD;&#xA;            /*canvas line*/&#xD;&#xA;            ctx.strokeStyle = "green";&#xD;&#xA;    	    ctx.beginPath();&#xD;&#xA;    	    ctx.moveTo(width/2,0);&#xD;&#xA;    	    ctx.lineTo(bobX,bobY);&#xD;&#xA;            ctx.stroke();&#xD;&#xA;            ctx.closePath();&#xD;&#xA;            ctx.fillStyle = "red";&#xD;&#xA;        &#xD;&#xA;            /*canvas pendulum*/&#xD;&#xA;            ctx.beginPath();&#xD;&#xA;    	    ctx.arc(bobX,bobY,16,0 ,Math.PI * 2 , false);&#xD;&#xA;    	    ctx.fill();&#xD;&#xA;            ctx.closePath();&#xD;&#xA;        &#xD;&#xA;    	    requestAnimationFrame(draw);  &#xD;&#xA;        }&#xD;&#xA;        init();