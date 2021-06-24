    var canvas = [];&#xD;&#xA;    canvas.push(new fabric.Canvas('c0'));&#xD;&#xA;    for (i = 1; i <= 7; i++) {&#xD;&#xA;      canvas.push(new fabric.StaticCanvas('sc' + i));&#xD;&#xA;    }&#xD;&#xA;    function dropText() {&#xD;&#xA;      var text = new fabric.IText('Type here...', {&#xD;&#xA;        fontSize: 27,&#xD;&#xA;        top: 10,&#xD;&#xA;        left: 10,&#xD;&#xA;        lockUniScaling: true&#xD;&#xA;      });&#xD;&#xA;      canvas[0].add(text);&#xD;&#xA;    }&#xD;&#xA;    var rect = new fabric.Rect({&#xD;&#xA;      fill: '#ff0000',&#xD;&#xA;      width: 100,&#xD;&#xA;      height: 100,&#xD;&#xA;      id: 1&#xD;&#xA;    });&#xD;&#xA;    var circle = new fabric.Circle({&#xD;&#xA;      fill: '#ffff00',&#xD;&#xA;      radius: 50,&#xD;&#xA;      left: 150,&#xD;&#xA;      top: 150,&#xD;&#xA;      originX: 'center',&#xD;&#xA;      originY: 'center',&#xD;&#xA;      id: 2&#xD;&#xA;    });&#xD;&#xA;    canvas[0].on('object:added', onModified);&#xD;&#xA;    canvas[0].on('object:modified', onModified);&#xD;&#xA;    canvas[0].on('object:scaling', onModified);&#xD;&#xA;    canvas[0].on('object:moving', onModified);&#xD;&#xA;    canvas[0].add(rect, circle);&#xD;&#xA;    function onModified(option) {&#xD;&#xA;      var ob = option.target;&#xD;&#xA;      var index = canvas[0].getObjects().indexOf(ob);&#xD;&#xA;      for (i = 1; i <= 7; i++) {&#xD;&#xA;        if (!ob) {&#xD;&#xA;          canvas[i].remove(ob);&#xD;&#xA;          canvas[i].insertAt(option.target, index);&#xD;&#xA;        } else {&#xD;&#xA;          canvas[i].add(option.target);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    };&#xD;&#xA;    $('#update').click(function() {&#xD;&#xA;      var json = JSON.stringify(canvas[0]);&#xD;&#xA;      for (i = 1; i <= 7; i++) {&#xD;&#xA;        canvas[i].loadFromJSON(json);&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    $('#save').click(function() {&#xD;&#xA;      html2canvas($('#imagesave'), {&#xD;&#xA;        onrendered: function(canvas) {&#xD;&#xA;          var a = document.createElement('a');&#xD;&#xA;          // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.&#xD;&#xA;          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");&#xD;&#xA;          a.download = 'myfile.jpg';&#xD;&#xA;          a.click();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });