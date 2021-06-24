    window.requestAnimationFrame = window.requestAnimationFrame&#xD;&#xA;                                   || window.mozRequestAnimationFrame&#xD;&#xA;                                   || window.webkitRequestAnimationFrame&#xD;&#xA;                                   || window.msRequestAnimationFrame&#xD;&#xA;                                   || function (f) { return setTimeout(f, 1000 / 50) }&#xD;&#xA;    window.cancelAnimationFrame = window.cancelAnimationFrame&#xD;&#xA;                                  || window.mozCancelAnimationFrame&#xD;&#xA;    var canvas = document.getElementById("canV"); //obtain the content &#xD;&#xA;    var ctx = canvas.getContext("2d");&#xD;&#xA;    var angle = 0;&#xD;&#xA;    var rect = []; //initialize for predefined width purposes.&#xD;&#xA;    var mouse = {&#xD;&#xA;        x: 0,&#xD;&#xA;        y: 0,&#xD;&#xA;        w: 0,&#xD;&#xA;        alt: false,&#xD;&#xA;        shift: false,&#xD;&#xA;        ctrl: false,&#xD;&#xA;        buttonLastRaw: 0, // user modified value&#xD;&#xA;        buttonRaw: 0,&#xD;&#xA;        over: false,&#xD;&#xA;        buttons: [1, 2, 4, 6, 5, 3], // masks for setting and clearing button raw bits;&#xD;&#xA;    };&#xD;&#xA;    function mouseMove(event) {&#xD;&#xA;        mouse.x = event.offsetX;&#xD;&#xA;        mouse.y = event.offsetY;&#xD;&#xA;        if (mouse.x === undefined) {&#xD;&#xA;            mouse.x = event.clientX;&#xD;&#xA;            mouse.y = event.clientY;&#xD;&#xA;        }&#xD;&#xA;        mouse.alt = event.altKey;&#xD;&#xA;        mouse.shift = event.shiftKey;&#xD;&#xA;        mouse.ctrl = event.ctrlKey;&#xD;&#xA;        if (event.type === "mousedown") {&#xD;&#xA;            event.preventDefault();&#xD;&#xA;            //console.log("this is mouse.buttonRaw before (mousedown): " + mouse.buttonRaw);&#xD;&#xA;            console.log("this is event.which (mousedown): " + event.which);&#xD;&#xA;            var valu = mouse.buttonRaw |= mouse.buttons[event.which - 1]; //bitwise AND operator (convert to binary and do the operation)&#xD;&#xA;            //console.log("this is value value: " + value);&#xD;&#xA;        } else if (event.type === "mouseup") {&#xD;&#xA;            //console.log("this is mouse.buttonRaw before (mouseup): " + mouse.buttonRaw);&#xD;&#xA;            //console.log("this is event.which (mouseup): " + event.which);&#xD;&#xA;            mouse.buttonRaw &= mouse.buttons[event.which + 2]; //bitwise OR operator (convert to binary and do the operation)&#xD;&#xA;        } else if (event.type === "mouseout") {&#xD;&#xA;            mouse.buttonRaw = 0;&#xD;&#xA;            mouse.over = false;&#xD;&#xA;        } else if (event.type === "mouseover") {&#xD;&#xA;            mouse.over = true;&#xD;&#xA;        } else if (event.type === "mousewheel") {&#xD;&#xA;            event.preventDefault();&#xD;&#xA;            mouse.w = event.wheelDelta;&#xD;&#xA;        } else if (event.type === "DOMMouseScroll") { // FF you pedantic doffus&#xD;&#xA;            mouse.w = -event.detail;&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function setupMouse(e) {&#xD;&#xA;        //syntax addEventListener (event, function, useCapture)&#xD;&#xA;        e.addEventListener('mousemove', mouseMove);&#xD;&#xA;        e.addEventListener('mousedown', mouseMove);&#xD;&#xA;        e.addEventListener('mouseup', mouseMove);&#xD;&#xA;        e.addEventListener('mouseout', mouseMove);&#xD;&#xA;        e.addEventListener('mouseover', mouseMove);&#xD;&#xA;        e.addEventListener('mousewheel', mouseMove);&#xD;&#xA;        e.addEventListener('DOMMouseScroll', mouseMove); // fire fox&#xD;&#xA;        e.addEventListener("contextmenu", function(e) {&#xD;&#xA;            e.preventDefault();&#xD;&#xA;        }, false);&#xD;&#xA;    }&#xD;&#xA;    setupMouse(canvas);&#xD;&#xA;    // terms.&#xD;&#xA;    // Real space, real, r (prefix) refers to the transformed canvas space.&#xD;&#xA;    // c (prefix), chase is the value that chases a required value&#xD;&#xA;    var displayTransform = {&#xD;&#xA;        x: 0,&#xD;&#xA;        y: 0,&#xD;&#xA;        ox: 0,&#xD;&#xA;        oy: 0,&#xD;&#xA;        scale: 6,&#xD;&#xA;        rotate: 0,&#xD;&#xA;        cx: 0, // chase values Hold the actual display&#xD;&#xA;        cy: 0,&#xD;&#xA;        cox: 0,&#xD;&#xA;        coy: 0,&#xD;&#xA;        cscale: 1,&#xD;&#xA;        crotate: 0,&#xD;&#xA;        dx: 0, // deltat values&#xD;&#xA;        dy: 0,&#xD;&#xA;        dox: 0,&#xD;&#xA;        doy: 0,&#xD;&#xA;        dscale: 1,&#xD;&#xA;        drotate: 0,&#xD;&#xA;        drag: 0.2, // drag for movements&#xD;&#xA;        accel: 0.5, // acceleration&#xD;&#xA;        matrix: [0, 0, 0, 0, 0, 0], // main matrix&#xD;&#xA;        invMatrix: [0, 0, 0, 0, 0, 0], // invers matrix;&#xD;&#xA;        mouseX: 0,&#xD;&#xA;        mouseY: 0,&#xD;&#xA;        ctx: ctx,&#xD;&#xA;        setTransform: function() {&#xD;&#xA;            var m = this.matrix;&#xD;&#xA;            var i = 0;&#xD;&#xA;            this.ctx.setTransform(m[i++], m[i++], m[i++], m[i++], m[i++], m[i++]);&#xD;&#xA;        },&#xD;&#xA;        setHome: function() {&#xD;&#xA;            this.ctx.setTransform(1, 0, 0, 1, 0, 0);&#xD;&#xA;        },&#xD;&#xA;        update: function() {&#xD;&#xA;            // smooth all movement out. drag and accel control how this moves&#xD;&#xA;            // acceleration &#xD;&#xA;            this.dx += (this.x - this.cx) * this.accel;&#xD;&#xA;            console.log("this is dx: " + this.dx);&#xD;&#xA;            this.dy += (this.y - this.cy) * this.accel;&#xD;&#xA;            this.dox += (this.ox - this.cox) * this.accel;&#xD;&#xA;            this.doy += (this.oy - this.coy) * this.accel;&#xD;&#xA;            this.dscale += (this.scale - this.cscale) * this.accel;&#xD;&#xA;            // drag&#xD;&#xA;            this.dx *= this.drag;&#xD;&#xA;            this.dy *= this.drag;&#xD;&#xA;            this.dox *= this.drag;&#xD;&#xA;            this.doy *= this.drag;&#xD;&#xA;            this.dscale *= this.drag;&#xD;&#xA;            // set the chase values. Chase chases the requiered values&#xD;&#xA;            this.cx += this.dx;&#xD;&#xA;            this.cy += this.dy;&#xD;&#xA;            this.cox += this.dox;&#xD;&#xA;            this.coy += this.doy;&#xD;&#xA;            this.cscale += this.dscale;&#xD;&#xA;            // create the display matrix&#xD;&#xA;            this.matrix[0] = Math.cos(this.crotate) * this.cscale;&#xD;&#xA;            this.matrix[1] = Math.sin(this.crotate) * this.cscale;&#xD;&#xA;            this.matrix[2] = -this.matrix[1];&#xD;&#xA;            this.matrix[3] = this.matrix[0];&#xD;&#xA;            // set the coords relative to the origin&#xD;&#xA;            this.matrix[4] = -(this.cx * this.matrix[0] + this.cy * this.matrix[2]) + this.cox;&#xD;&#xA;            this.matrix[5] = -(this.cx * this.matrix[1] + this.cy * this.matrix[3]) + this.coy;&#xD;&#xA;            // create invers matrix&#xD;&#xA;            var det = (this.matrix[0] * this.matrix[3] - this.matrix[1] * this.matrix[2]);&#xD;&#xA;            this.invMatrix[0] = this.matrix[3] / det;&#xD;&#xA;            this.invMatrix[1] = -this.matrix[1] / det;&#xD;&#xA;            this.invMatrix[2] = -this.matrix[2] / det;&#xD;&#xA;            this.invMatrix[3] = this.matrix[0] / det;&#xD;&#xA;            // check for mouse. Do controls and get real position of mouse.&#xD;&#xA;            if (mouse !== undefined) { // if there is a mouse get the real canvas coordinates of the mouse&#xD;&#xA;                if (mouse.oldX !== undefined && (mouse.buttonRaw & 1) === 1) { // check if panning (middle button)&#xD;&#xA;                    var mdx = mouse.x - mouse.oldX; // get the mouse movement&#xD;&#xA;                    var mdy = mouse.y - mouse.oldY;&#xD;&#xA;                    // get the movement in real space&#xD;&#xA;                    var mrx = (mdx * this.invMatrix[0] + mdy * this.invMatrix[2]);&#xD;&#xA;                    var mry = (mdx * this.invMatrix[1] + mdy * this.invMatrix[3]);&#xD;&#xA;                    this.x -= mrx;&#xD;&#xA;                    this.y -= mry;&#xD;&#xA;                }&#xD;&#xA;                // do the zoom with mouse wheel&#xD;&#xA;                if (mouse.w !== undefined && mouse.w !== 0) {&#xD;&#xA;                    //this.ox = mouse.x;&#xD;&#xA;                    //this.oy = mouse.y;&#xD;&#xA;                    //this.x = this.mouseX;&#xD;&#xA;                    //this.y = this.mouseY;&#xD;&#xA;                    /* Special note from answer */&#xD;&#xA;                    // comment out the following is you change drag and accel&#xD;&#xA;                    // and the zoom does not feel right (lagging and not &#xD;&#xA;                    // zooming around the mouse &#xD;&#xA;                    /*&#xD;&#xA;                    this.cox = mouse.x;&#xD;&#xA;                    this.coy = mouse.y;&#xD;&#xA;                    this.cx = this.mouseX;&#xD;&#xA;                    this.cy = this.mouseY;&#xD;&#xA;                    */&#xD;&#xA;                    if (mouse.w > 0) { // zoom in&#xD;&#xA;                        this.scale *= 1.1;&#xD;&#xA;                        console.log(this.scale);&#xD;&#xA;                        mouse.w -= 20;&#xD;&#xA;                        if (mouse.w < 0) {&#xD;&#xA;                            mouse.w = 0;&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                    if (mouse.w < 0) { // zoom out&#xD;&#xA;                            this.scale *= 1/1.1;&#xD;&#xA;                            mouse.w += 20;&#xD;&#xA;                            if(this.scale <=0.5){&#xD;&#xA;                                this.scale = 0.5;&#xD;&#xA;                            }&#xD;&#xA;                        if (mouse.w > 0) {&#xD;&#xA;                            mouse.w = 0;&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;                // get the real mouse position &#xD;&#xA;                var screenX = (mouse.x - this.cox);&#xD;&#xA;                var screenY = (mouse.y - this.coy);&#xD;&#xA;                this.mouseX = this.cx + (screenX * this.invMatrix[0] + screenY * this.invMatrix[2]);&#xD;&#xA;                this.mouseY = this.cy + (screenX * this.invMatrix[1] + screenY * this.invMatrix[3]);&#xD;&#xA;                mouse.rx = this.mouseX; // add the coordinates to the mouse. r is for real&#xD;&#xA;                mouse.ry = this.mouseY;&#xD;&#xA;                // save old mouse position&#xD;&#xA;                mouse.oldX = mouse.x;&#xD;&#xA;                mouse.oldY = mouse.y;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    // set up font&#xD;&#xA;    ctx.font = "14px verdana";&#xD;&#xA;    ctx.textAlign = "center";&#xD;&#xA;    ctx.textBaseline = "middle";&#xD;&#xA;    // timer for stuff&#xD;&#xA;    var timer = 0;&#xD;&#xA;    var w = 1000,&#xD;&#xA;        h = 500;&#xD;&#xA;    setInterval(update, 6);&#xD;&#xA;    //requestAnimationFrame(update);&#xD;&#xA;    function update() {&#xD;&#xA;        timer += 1; // update timer&#xD;&#xA;        console.log("this is timer" + timer);&#xD;&#xA;        if(timer > 1000){&#xD;&#xA;            timer = 0;&#xD;&#xA;            console.log("clear");&#xD;&#xA;            clearInterval(update);&#xD;&#xA;        }&#xD;&#xA;        // update the transform&#xD;&#xA;        displayTransform.update();&#xD;&#xA;        ctx.clearRect(0, 0, canvas.width, canvas.height);&#xD;&#xA;        // set home transform to clear the screen&#xD;&#xA;        displayTransform.setHome();&#xD;&#xA;        ctx.clearRect(0, 0, canvas.width, canvas.height);&#xD;&#xA;        displayTransform.setTransform();&#xD;&#xA;        ctx.clearRect(0, 0, canvas.width, canvas.height);&#xD;&#xA;            //first segment&#xD;&#xA;            this.width = 23300;&#xD;&#xA;            this.height = 150;&#xD;&#xA;            this.x = 0;&#xD;&#xA;            this.y = 150;&#xD;&#xA;            this.color = "#605A4C"; //light grey (road)&#xD;&#xA;            ctx.save(); //save the unrotated context of the canvas&#xD;&#xA;            ctx.fillStyle = this.color;&#xD;&#xA;            ctx.fillRect(this.x, this.y, this.width / 8, this.height);&#xD;&#xA;            ctx.fillStyle = "#DCDCDC"; //white grey&#xD;&#xA;            ctx.fillRect(this.x, this.y + ((this.height / 2) - 1), this.width / 8, 2); //middle white line&#xD;&#xA;            ctx.fillStyle = "ffffff";&#xD;&#xA;            ctx.beginPath();&#xD;&#xA;            ctx.setLineDash([2, 6]);&#xD;&#xA;            ctx.moveTo(this.x, this.y + ((this.height / 4) - 1));&#xD;&#xA;            ctx.lineTo((this.x + this.width / 8), this.y + ((this.height / 4) - 1));&#xD;&#xA;            ctx.closePath();&#xD;&#xA;            ctx.strokeStyle = "#A09383"; //lighter grey&#xD;&#xA;            ctx.lineWidth = 1;&#xD;&#xA;            ctx.fill();&#xD;&#xA;            ctx.stroke();&#xD;&#xA;            ctx.beginPath();&#xD;&#xA;            ctx.setLineDash([2, 6]);&#xD;&#xA;            ctx.moveTo(this.x, this.y + ((this.height / (4 / 3)) - 1));&#xD;&#xA;            ctx.lineTo((this.x + this.width / 8), this.y + ((this.height / (4 / 3)) - 1));&#xD;&#xA;            ctx.closePath();&#xD;&#xA;            ctx.strokeStyle = "#A09383"; //lighter grey&#xD;&#xA;            ctx.lineWidth = 1;&#xD;&#xA;            ctx.fill();&#xD;&#xA;            ctx.stroke();&#xD;&#xA;            ctx.fillStyle = "#A09383"; //lighter grey&#xD;&#xA;            ctx.fillRect(this.x, this.y - 10, this.width / 8, 10);&#xD;&#xA;            ctx.fillStyle = "#A09383"; //lighter grey&#xD;&#xA;            ctx.fillRect(this.x, this.y + this.height, this.width / 8 + 2 /*a little long to cover up white region)*/ , 10);&#xD;&#xA;            //requestAnimationFrame(update);&#xD;&#xA;    }