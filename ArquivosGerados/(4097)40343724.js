    var svgns = 'http://www.w3.org/2000/svg';&#xD;&#xA;    var path = document.getElementById('path-element');&#xD;&#xA;    var angle = 0;&#xD;&#xA;    function getRotationPoint() {&#xD;&#xA;      var bRect = path.getBoundingClientRect();&#xD;&#xA;      var rotationPoint = [bRect.left + (bRect.width / 2), bRect.top - 20];&#xD;&#xA;      return rotationPoint;&#xD;&#xA;    }&#xD;&#xA;    var rotationPoint = getRotationPoint();&#xD;&#xA;    var circle = document.createElementNS(svgns, 'circle');&#xD;&#xA;    circle.setAttribute('style', 'fill: #DCDCDC; stroke: red; stroke-width: 2; pointer-events: visiblePainted');&#xD;&#xA;    circle.setAttribute('cx', rotationPoint[0]);&#xD;&#xA;    circle.setAttribute('cy', rotationPoint[1]);&#xD;&#xA;    circle.setAttribute('r', 4);&#xD;&#xA;    document.querySelector('svg').appendChild(circle);&#xD;&#xA;    var mousedown = false, mouse_start = null;&#xD;&#xA;    circle.addEventListener('mousedown', function(event) {&#xD;&#xA;      mousedown = true;&#xD;&#xA;      initial_position = getRotationPoint();&#xD;&#xA;      mouse_start = {&#xD;&#xA;        x: event.clientX,&#xD;&#xA;        y: event.clientY&#xD;&#xA;      };&#xD;&#xA;    });&#xD;&#xA;    document.addEventListener('mousemove', function(event) {&#xD;&#xA;      if (mousedown) {&#xD;&#xA;        var x = event.clientX,&#xD;&#xA;          y = event.clientY;&#xD;&#xA;        var _angle = Math.atan2(y - mouse_start.y, x - mouse_start.x) * 180 / Math.PI;&#xD;&#xA;        var transform = "rotate(" + _angle + "," + rotationPoint[0] + "," + rotationPoint[1] + ")";&#xD;&#xA;        path.setAttribute('transform', transform);&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    document.addEventListener('mouseup', function(event) {&#xD;&#xA;      mousedown = false;&#xD;&#xA;    });