    var verteces = [1,1, 0,-1, -1,0];&#xD;&#xA;    var vBuffer = gl.createBuffer(gl.ARRAY_BUFFER);&#xD;&#xA;    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);&#xD;&#xA;    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verteces), gl.DYNAMIC_DRAW);&#xD;&#xA;    gl.enableVertexAttribArray(0);&#xD;&#xA;    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);&#xD;&#xA;    var colors = [1,0,0,1, 0,1,0,1, 0,0,1,1];&#xD;&#xA;    var cBuffer = gl.createBuffer(gl.ARRAY_BUFFER);&#xD;&#xA;    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);&#xD;&#xA;    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);&#xD;&#xA;    gl.enableVertexAttribArray(1);&#xD;&#xA;    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 0, 0);&#xD;&#xA;    var indices = [0,3,2];&#xD;&#xA;    var elBuffer = gl.createBuffer(gl.ELEMENT_ARRAY_BUFFER);&#xD;&#xA;    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elBuffer);&#xD;&#xA;    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);