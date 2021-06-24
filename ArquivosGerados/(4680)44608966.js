    var canvas = document.getElementById("canvas");&#xD;&#xA;    var context = canvas.getContext("2d");&#xD;&#xA;    var wabbits = {&#xD;&#xA;      wabbit1: {&#xD;&#xA;        x: 200,&#xD;&#xA;        y: 200,&#xD;&#xA;        w: 10,&#xD;&#xA;        h: 10,&#xD;&#xA;        speed: 2,&#xD;&#xA;        moving: "",&#xD;&#xA;        dead: false,&#xD;&#xA;        updateInterval: 2000&#xD;&#xA;      }&#xD;&#xA;    };&#xD;&#xA;      //make it easier to type out the object&#xD;&#xA;      var bunny = wabbits.wabbit1;&#xD;&#xA;    var movement = ["up", "down", "left", "right"];&#xD;&#xA;    var left = "left";&#xD;&#xA;    var up = "up";&#xD;&#xA;    var down = "down";&#xD;&#xA;    var right = "right";&#xD;&#xA;    var update = setInterval(function(){&#xD;&#xA;      draw();&#xD;&#xA;    }, 1);&#xD;&#xA;    canvas.style.backgroundColor = "green";&#xD;&#xA;    function draw(){&#xD;&#xA;      context.clearRect(0, 0, canvas.width, canvas.height);&#xD;&#xA;      context.fillStyle = "grey";&#xD;&#xA;      context.fillRect(bunny.x, bunny.y, bunny.w, bunny.h);&#xD;&#xA;      context.fill();&#xD;&#xA;      border();&#xD;&#xA;    }&#xD;&#xA;    function border(){&#xD;&#xA;      if(bunny.x <= 0){&#xD;&#xA;        bunny.x += bunny.speed * 2;&#xD;&#xA;      }&#xD;&#xA;      if(bunny.x >= 490){&#xD;&#xA;        bunny.x -= bunny.speed * 2;&#xD;&#xA;      }&#xD;&#xA;      if(bunny.y <= 0){&#xD;&#xA;        bunny.y += bunny.speed * 2;&#xD;&#xA;      }&#xD;&#xA;      if(bunny.y >= 490){&#xD;&#xA;        bunny.y -= bunny.speed * 2;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function bunny1move(){&#xD;&#xA;    	if(!wabbits.wabbit1.dead){&#xD;&#xA;    		var randM = Math.floor(Math.random() * 3) + 0;&#xD;&#xA;    		wabbits.wabbit1.moving = movement[randM];&#xD;&#xA;    		function mv(){&#xD;&#xA;    			switch(wabbits.wabbit1.moving){&#xD;&#xA;    				case "up":&#xD;&#xA;    					wabbits.wabbit1.y -= wabbits.wabbit1.speed;&#xD;&#xA;    				break;&#xD;&#xA;    				case "down":&#xD;&#xA;    					wabbits.wabbit1.y += wabbits.wabbit1.speed;&#xD;&#xA;    				break;&#xD;&#xA;    				case "left":&#xD;&#xA;    					wabbits.wabbit1.x -= wabbits.wabbit1.speed;&#xD;&#xA;    				break;&#xD;&#xA;    				case "right":&#xD;&#xA;    					wabbits.wabbit1.x += wabbits.wabbit1.speed;&#xD;&#xA;    				break;&#xD;&#xA;    				default: &#xD;&#xA;    					console.log("something in bunny1.mv() is not working properly, err: " + wabbits.wabbits1.moving);&#xD;&#xA;    				break;&#xD;&#xA;    			};&#xD;&#xA;    			if(wabbits.wabbit1.y <= 0){&#xD;&#xA;    				wabbits.wabbit1.y += wabbits.wabbit1.speed * 2;&#xD;&#xA;    				wabbits.wabbit1.moving = down;&#xD;&#xA;    			}&#xD;&#xA;    			if(wabbits.wabbit1.y >= 758){&#xD;&#xA;    				wabbits.wabbit1.y -= wabbits.wabbit1.speed * 2;&#xD;&#xA;    				wabbits.wabbit1.moving = up;&#xD;&#xA;    			}&#xD;&#xA;    			if(wabbits.wabbit1.x <= 0){&#xD;&#xA;    				wabbits.wabbit1.x += wabbits.wabbit1.speed * 2;&#xD;&#xA;    				wabbits.wabbit1.moving = right;&#xD;&#xA;    			}&#xD;&#xA;    			if(wabbits.wabbit1.x >= 1356){&#xD;&#xA;    				wabbits.wabbit1.x -= wabbits.wabbit1.speed * 2;&#xD;&#xA;    				wabbits.wabbit1.moving = left;&#xD;&#xA;    			}&#xD;&#xA;          //make mv repeat twice&#xD;&#xA;    			this.setTimeout(mv, wabbits.wabbit1.updateInterval / 2);&#xD;&#xA;    		}&#xD;&#xA;    		mv();&#xD;&#xA;    		&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    //update the movement function&#xD;&#xA;    setInterval(bunny1move, wabbits.wabbit1.updateInterval);