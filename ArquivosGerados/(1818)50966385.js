    function distanceBetween(point1, point2) {&#xD;&#xA;        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function angleBetween(point1, point2) {&#xD;&#xA;        return Math.atan2(point2.x - point1.x, point2.y - point1.y);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function draw() {&#xD;&#xA;        var img = new Image();&#xD;&#xA;        img.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';&#xD;&#xA;    &#xD;&#xA;        var el = document.getElementById('DrawingPattern');&#xD;&#xA;        var ctx = el.getContext('2d');&#xD;&#xA;        ctx.lineJoin = ctx.lineCap = 'round';&#xD;&#xA;    &#xD;&#xA;        var isDrawing, lastPoint;&#xD;&#xA;    &#xD;&#xA;        el.onmousedown = function (e) {&#xD;&#xA;            isDrawing = true;&#xD;&#xA;            lastPoint = {x: e.clientX, y: e.clientY};&#xD;&#xA;        };&#xD;&#xA;    &#xD;&#xA;        el.onmousemove = function (e) {&#xD;&#xA;            if (!isDrawing) return;&#xD;&#xA;    &#xD;&#xA;            var currentPoint = {x: e.clientX, y: e.clientY};&#xD;&#xA;            var dist = distanceBetween(lastPoint, currentPoint);&#xD;&#xA;            var angle = angleBetween(lastPoint, currentPoint);&#xD;&#xA;    &#xD;&#xA;            for (var i = 0; i < dist; i++) {&#xD;&#xA;                x = lastPoint.x + (Math.sin(angle) * i) - 25;&#xD;&#xA;                y = lastPoint.y + (Math.cos(angle) * i) - 25;&#xD;&#xA;                ctx.drawImage(img, x, y);&#xD;&#xA;            }&#xD;&#xA;    &#xD;&#xA;            lastPoint = currentPoint;&#xD;&#xA;        };&#xD;&#xA;    &#xD;&#xA;        el.onmouseup = function () {&#xD;&#xA;            isDrawing = false;&#xD;&#xA;        };&#xD;&#xA;    }