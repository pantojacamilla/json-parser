    var count = 1;&#xD;&#xA;    var drawCounter = function(x, y) {&#xD;&#xA;      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');&#xD;&#xA;      text.setAttribute('x', x);&#xD;&#xA;      text.setAttribute('y', y);&#xD;&#xA;      text.setAttribute('text-anchor', 'middle');&#xD;&#xA;      text.setAttribute('font-size', '12px');&#xD;&#xA;      text.setAttribute('stroke', '#51c5cf');&#xD;&#xA;      text.setAttribute('stroke-width', '1px');&#xD;&#xA;      text.setAttribute('dy', '.3em');&#xD;&#xA;      text.innerHTML = count;&#xD;&#xA;      count += 1;&#xD;&#xA;      window.svgP.appendChild(text);&#xD;&#xA;    };&#xD;&#xA;    var strokeWidth = 10;&#xD;&#xA;    var scallopSize = strokeWidth * 4;&#xD;&#xA;    function distance(x1, y1, x2, y2) {&#xD;&#xA;      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));&#xD;&#xA;    }&#xD;&#xA;    function findNewPoint(x, y, angle, distance) {&#xD;&#xA;      var result = {};&#xD;&#xA;      result.x = Math.round(Math.cos(angle) * distance + x);&#xD;&#xA;      result.y = Math.round(Math.sin(angle) * distance + y);&#xD;&#xA;      return result;&#xD;&#xA;    }&#xD;&#xA;    function getAngle(x1, y1, x2, y2) {&#xD;&#xA;      return Math.atan2(y2 - y1, x2 - x1);&#xD;&#xA;    }&#xD;&#xA;    function scapolledLine(points, strokeWidth) {&#xD;&#xA;      var scallopSize = strokeWidth * 7;&#xD;&#xA;      points.push(points[0]);&#xD;&#xA;      var d = 0,&#xD;&#xA;        start, end, dArr = [],&#xD;&#xA;        t;&#xD;&#xA;      // get the distance of all points together&#xD;&#xA;      for (var i = 0; i < points.length; i++) {&#xD;&#xA;        start = points[i];&#xD;&#xA;        end = points[i + 1] || points[0];&#xD;&#xA;        t = Math.abs(distance(start.x, start.y, end.x, end.y));&#xD;&#xA;        dArr.push(t);&#xD;&#xA;        d += t;&#xD;&#xA;      }&#xD;&#xA;      // Number of possible scallops&#xD;&#xA;      var numW = Math.round(d / scallopSize);&#xD;&#xA;      numW = numW === 0 ? 1 : numW;&#xD;&#xA;      // Each scallop width&#xD;&#xA;      var stepW = (d / numW);&#xD;&#xA;      var path = [];&#xD;&#xA;      var angle = getAngle(points[0].x, points[0].y, points[1].x, points[1].y);&#xD;&#xA;      // Start path&#xD;&#xA;      var newP = findNewPoint(points[0].x, points[0].y, angle, stepW / 2);&#xD;&#xA;      path.push("M", newP.x, newP.y);&#xD;&#xA;      drawCounter(newP.x, newP.y);&#xD;&#xA;      var rem = stepW / 2;&#xD;&#xA;      points.forEach(function(s, i) {&#xD;&#xA;        var e = points[i + 1];&#xD;&#xA;        if (!e) {&#xD;&#xA;          // Joining the end with start.&#xD;&#xA;          path.push('C', newP.x, newP.y, points[0].x, points[0].y, path[1], path[2]);&#xD;&#xA;          drawCounter(path[1], path[2]);&#xD;&#xA;          return;&#xD;&#xA;        }&#xD;&#xA;        var angle = getAngle(s.x, s.y, e.x, e.y);&#xD;&#xA;        if (rem > 0) {&#xD;&#xA;          var ox = newP.x,&#xD;&#xA;            oy = newP.y;&#xD;&#xA;          // If Remaining distance is found, connecting it.&#xD;&#xA;          newP = findNewPoint(s.x, s.y, angle, (stepW - rem));&#xD;&#xA;          drawCounter(newP.x, newP.y);&#xD;&#xA;          path.push('C', ox, oy, s.x, s.y, newP.x, newP.y);&#xD;&#xA;        }&#xD;&#xA;        if (!e) return;&#xD;&#xA;        // newP = findNewPoint(s.x, s.y, angle, rem);&#xD;&#xA;        var betD = dArr[i] - rem;&#xD;&#xA;        // Number of possible scallops between current points&#xD;&#xA;        var n = betD / stepW;&#xD;&#xA;        // Remaining distance between current points, to be picked by next iteration&#xD;&#xA;        rem = betD % stepW;&#xD;&#xA;        for (var i = 1; i < n; i++) {&#xD;&#xA;          var ox = newP.x,&#xD;&#xA;            oy = newP.y;&#xD;&#xA;          newP = findNewPoint(newP.x, newP.y, angle, stepW);&#xD;&#xA;          drawCounter(newP.x, newP.y);&#xD;&#xA;          path.push('C', ox, oy, ox + stepW / 2, oy + stepW / 2, newP.x, newP.y);&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      return path.join(' ');&#xD;&#xA;    }&#xD;&#xA;    var points = [];&#xD;&#xA;    document.addEventListener('mousedown', function(event) {&#xD;&#xA;      points.push({&#xD;&#xA;        x: event.clientX,&#xD;&#xA;        y: event.clientY&#xD;&#xA;      });&#xD;&#xA;      if (points.length > 2) {&#xD;&#xA;        var str = scapolledLine(JSON.parse(JSON.stringify(points)), strokeWidth);&#xD;&#xA;        window.test.setAttribute('d', str);&#xD;&#xA;      }&#xD;&#xA;    });