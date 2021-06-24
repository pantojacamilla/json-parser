    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;      <title>Geo</title>&#xD;&#xA;      <meta http-equiv="content-type" content="text/html; charset=utf-8" />&#xD;&#xA;      <link rel="stylesheet" type="text/css" href="style.css" />&#xD;&#xA;    </head>&#xD;&#xA;    <body onload="start()">&#xD;&#xA;      <canvas id="canvasGL">&#xD;&#xA;                Your browser does not support the HTML5 canvas tag.&#xD;&#xA;            </canvas>&#xD;&#xA;      <script id="shader-vs" type="x-shader/x-vertex">&#xD;&#xA;        attribute vec3 aVertexPosition; attribute vec4 aVertexColor; uniform mat4 uMVMatrix; uniform mat4 uPMatrix; varying lowp vec4 vColor; void main(void) { gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0); vColor = aVertexColor; }&#xD;&#xA;      </script>&#xD;&#xA;      <script id="shader-fs" type="x-shader/x-fragment">&#xD;&#xA;        varying lowp vec4 vColor; void main(void) { gl_FragColor = vColor; }&#xD;&#xA;      </script>&#xD;&#xA;      <script src="https://mdn.github.io/webgl-examples/tutorial/sylvester.js"></script>&#xD;&#xA;    </body>&#xD;&#xA;    </html>