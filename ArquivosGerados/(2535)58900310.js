    <!doctype html>&#xD;&#xA;    <html lang="en">&#xD;&#xA;    <head>&#xD;&#xA;      <meta charset="utf-8">&#xD;&#xA;      <title>WebGL Demo</title>&#xD;&#xA;      <script src="https://mdn.github.io/webgl-examples/tutorial/gl-matrix.js"></script>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;      <canvas id="glcanvas" width="640" height="480"></canvas>&#xD;&#xA;    </body>&#xD;&#xA;    </html>&#xD;&#xA;**Solution:&#xD;&#xA;current the normal vector to this solved my problem:**&#xD;&#xA;      const normals = [&#xD;&#xA;    0.0, 0.0, 1.0,&#xD;&#xA;    0.0, 0.0, 1.0,&#xD;&#xA;    0.0, 0.0, 1.0,&#xD;&#xA;    0.0, 0.0, 1.0,&#xD;&#xA;    0.0, 0.0, -1.0,&#xD;&#xA;    0.0, 0.0, -1.0,&#xD;&#xA;    0.0, 0.0, -1.0,&#xD;&#xA;    0.0, 0.0, -1.0,&#xD;&#xA;    0.0, 1.0, 0.0,&#xD;&#xA;    0.0, 1.0, 0.0,&#xD;&#xA;    0.0, 1.0, 0.0,&#xD;&#xA;    0.0, 1.0, 0.0,&#xD;&#xA;    &#xD;&#xA;    0.0, -1.0, 0.0,&#xD;&#xA;    0.0, -1.0, 0.0,&#xD;&#xA;    0.0, -1.0, 0.0,&#xD;&#xA;    0.0, -1.0, 0.0,&#xD;&#xA;    1.0, 0.0, 0.0,&#xD;&#xA;    1.0, 0.0, 0.0,&#xD;&#xA;    1.0, 0.0, 0.0,&#xD;&#xA;    1.0, 0.0, 0.0,&#xD;&#xA;    -1.0, 0.0, 0.0,&#xD;&#xA;    -1.0, 0.0, 0.0,&#xD;&#xA;    -1.0, 0.0, 0.0,&#xD;&#xA;    -1.0, 0.0, 0.0,&#xD;&#xA;  ];&#xD;&#xA;  [1]: https://i.stack.imgur.com/ZYy4y.png&#xD;&#xA;  [2]: https://i.stack.imgur.com/SvXWl.png