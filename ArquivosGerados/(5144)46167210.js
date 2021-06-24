    (function() {&#xD;&#xA;        "use strict";&#xD;&#xA;        var hWnd;&#xD;&#xA;        var src_vertexShader;&#xD;&#xA;        var src_fragmentShader;&#xD;&#xA;        var canvas;&#xD;&#xA;        var gl;&#xD;&#xA;        var program;&#xD;&#xA;        var vertexShader;&#xD;&#xA;        var fragmentShader;&#xD;&#xA;        var vertexBuffer;&#xD;&#xA;        var colorBuffer;&#xD;&#xA;        var PositionAttribute;&#xD;&#xA;        var ColorAttribute;&#xD;&#xA;        // | canvas container.&#xD;&#xA;        hWnd = document.createElement("div");&#xD;&#xA;        hWnd.style.position = "fixed";&#xD;&#xA;        hWnd.style.top = "0px";&#xD;&#xA;        hWnd.style.left = "0px";&#xD;&#xA;        hWnd.style.border = "1px solid #000000";&#xD;&#xA;        hWnd.addEventListener("click", function() {&#xD;&#xA;            this.outerHTML = '';&#xD;&#xA;        });&#xD;&#xA;        // | vertex shader source.&#xD;&#xA;        src_vertexShader = `&#xD;&#xA;    attribute vec3 position;&#xD;&#xA;    attribute vec4 color;&#xD;&#xA;    varying vec4 vcolor;&#xD;&#xA;    void main() {&#xD;&#xA;        gl_Position = vec4(position, 1.0);&#xD;&#xA;        vcolor = color;&#xD;&#xA;    }`;&#xD;&#xA;        // | fragment shader source.&#xD;&#xA;        src_fragmentShader = `       &#xD;&#xA;    varying lowp vec4 vcolor;&#xD;&#xA;    void main() {&#xD;&#xA;        gl_FragColor = vcolor;    &#xD;&#xA;    }`;&#xD;&#xA;        // | our WebGL canvas.&#xD;&#xA;        canvas = document.createElement('canvas');&#xD;&#xA;        canvas.width = 320;&#xD;&#xA;        canvas.height = 200;       &#xD;&#xA;        // | our WebGLRenderingContext.&#xD;&#xA;        gl = canvas.getContext('webgl', {antialias: false});&#xD;&#xA;        // | setting up our program using a Vertex and a Fragment shader.&#xD;&#xA;        program = gl.createProgram();&#xD;&#xA;        vertexShader = gl.createShader(gl.VERTEX_SHADER);&#xD;&#xA;        fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);&#xD;&#xA;        gl.shaderSource(vertexShader, src_vertexShader);&#xD;&#xA;        gl.shaderSource(fragmentShader, src_fragmentShader);&#xD;&#xA;        gl.compileShader(vertexShader);&#xD;&#xA;        console.log('Shader compiled successfully: ' + gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS));&#xD;&#xA;        console.log('Shader compiler log: ' + gl.getShaderInfoLog(vertexShader));    &#xD;&#xA;        gl.compileShader(fragmentShader);&#xD;&#xA;        console.log('Shader compiled successfully: ' + gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS));&#xD;&#xA;        console.log('Shader compiler log: ' + gl.getShaderInfoLog(fragmentShader));    &#xD;&#xA;        gl.attachShader(program, vertexShader);&#xD;&#xA;        gl.attachShader(program, fragmentShader);&#xD;&#xA;        gl.linkProgram(program);&#xD;&#xA;        gl.useProgram(program);&#xD;&#xA;        console.log(gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS));    &#xD;&#xA;        // | create and attach a vertex buffer with data for one triangle.&#xD;&#xA;        vertexBuffer = gl.createBuffer();&#xD;&#xA;        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);&#xD;&#xA;        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([&#xD;&#xA;            0, 0, 0,&#xD;&#xA;            0, 1, 0,&#xD;&#xA;            1, 1, 0&#xD;&#xA;        ]), gl.STATIC_DRAW);&#xD;&#xA;        PositionAttribute = gl.getAttribLocation(program, 'position');&#xD;&#xA;        gl.enableVertexAttribArray(PositionAttribute);&#xD;&#xA;        gl.vertexAttribPointer(PositionAttribute, 3, gl.FLOAT, false, 0, 0);&#xD;&#xA;        // | create and attach a color buffer with color data for our triangle.&#xD;&#xA;        colorBuffer = gl.createBuffer();&#xD;&#xA;        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);&#xD;&#xA;        gl.bufferData (gl.ARRAY_BUFFER, new Float32Array(&#xD;&#xA;            1, 0, 0, 1,&#xD;&#xA;            0, 1, 0, 1,&#xD;&#xA;            0, 0, 1, 1,&#xD;&#xA;        ), gl.STATIC_DRAW);&#xD;&#xA;        ColorAttribute = gl.getAttribLocation(program, 'color');&#xD;&#xA;        gl.enableVertexAttribArray(ColorAttribute);&#xD;&#xA;        gl.vertexAttribPointer(ColorAttribute, 4, gl.FLOAT, false, 0, 0);&#xD;&#xA;        // | clear the screen.&#xD;&#xA;        gl.clearColor(0.93, 0.93, 0.93, 1);&#xD;&#xA;        gl.clear(gl.COLOR_BUFFER_BIT);&#xD;&#xA;        // | draw the triangle.&#xD;&#xA;        gl.drawArrays(gl.TRIANGLES, 0, 3);&#xD;&#xA;        hWnd.appendChild(canvas)&#xD;&#xA;        document.body.appendChild(hWnd);    &#xD;&#xA;    })();