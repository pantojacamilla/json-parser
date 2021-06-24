    // Add image from local&#xD;&#xA;    var canvas = new fabric.Canvas('c');&#xD;&#xA;    // display/hide controls on double click&#xD;&#xA;    fabric.util.addListener(canvas.upperCanvasEl, 'dblclick', function(e) {&#xD;&#xA;       if (canvas.findTarget(e)) {&#xD;&#xA;          let objType = canvas.findTarget(e).type;&#xD;&#xA;          if (objType === 'i-text') {&#xD;&#xA;             document.getElementById('textControls').hidden = false;&#xD;&#xA;          }&#xD;&#xA;       }&#xD;&#xA;    });&#xD;&#xA;    canvas.on('before:selection:cleared', function(e) {&#xD;&#xA;       document.getElementById('trash').hidden = true;&#xD;&#xA;       document.getElementById('forward').hidden = true;&#xD;&#xA;       document.getElementById('back').hidden = true;&#xD;&#xA;       if (e.target.type === 'i-text') {&#xD;&#xA;          document.getElementById('textControls').hidden = true;&#xD;&#xA;       }&#xD;&#xA;    });&#xD;&#xA;    document.getElementById('file').addEventListener("change", function(e) {&#xD;&#xA;       var file = e.target.files[0];&#xD;&#xA;       var reader = new FileReader();&#xD;&#xA;       reader.onload = function(f) {&#xD;&#xA;          var data = f.target.result;&#xD;&#xA;          fabric.Image.fromURL(data, function(img) {&#xD;&#xA;             var oImg = img.set({&#xD;&#xA;                left: 0,&#xD;&#xA;                top: 0,&#xD;&#xA;                angle: 00,&#xD;&#xA;                stroke: '#F0F0F0', //<-- set this&#xD;&#xA;                strokeWidth: 40 //<-- set this&#xD;&#xA;             }).scale(0.2);&#xD;&#xA;             canvas.add(oImg).renderAll();&#xD;&#xA;             //var a = canvas.setActiveObject(oImg);&#xD;&#xA;             var dataURL = canvas.toDataURL({&#xD;&#xA;                format: 'png',&#xD;&#xA;                quality: 1&#xD;&#xA;             });&#xD;&#xA;          });&#xD;&#xA;       };&#xD;&#xA;       reader.readAsDataURL(file);&#xD;&#xA;    });&#xD;&#xA;    // Delete selected object&#xD;&#xA;    window.deleteObject = function() {&#xD;&#xA;          canvas.getActiveObject().remove();&#xD;&#xA;       }&#xD;&#xA;       // Refresh page&#xD;&#xA;    function refresh() {&#xD;&#xA;       setTimeout(function() {&#xD;&#xA;          location.reload()&#xD;&#xA;       }, 100);&#xD;&#xA;    }&#xD;&#xA;    // Add text&#xD;&#xA;    function Addtext() {&#xD;&#xA;       canvas.add(new fabric.IText('Tap and Type', {&#xD;&#xA;          left: 50,&#xD;&#xA;          top: 100,&#xD;&#xA;          fontFamily: 'helvetica neue',&#xD;&#xA;          fill: '#333',&#xD;&#xA;          stroke: '#F0F0F0',&#xD;&#xA;          strokeWidth: 1,&#xD;&#xA;          fontSize: 45&#xD;&#xA;       }));&#xD;&#xA;    }&#xD;&#xA;    document.getElementById('text-color').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setFill(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-color').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setFill(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-bg-color').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setBackgroundColor(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-lines-bg-color').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setTextBackgroundColor(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-stroke-color').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setStroke(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-stroke-width').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setStrokeWidth(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('font-family').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setFontFamily(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-font-size').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setFontSize(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-line-height').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setLineHeight(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    document.getElementById('text-align').onchange = function() {&#xD;&#xA;       canvas.getActiveObject().setTextAlign(this.value);&#xD;&#xA;       canvas.renderAll();&#xD;&#xA;    };&#xD;&#xA;    radios5 = document.getElementsByName("fonttype"); // wijzig naar button&#xD;&#xA;    for (var i = 0, max = radios5.length; i < max; i++) {&#xD;&#xA;       radios5[i].onclick = function() {&#xD;&#xA;          if (document.getElementById(this.id).checked == true) {&#xD;&#xA;             if (this.id == "text-cmd-bold") {&#xD;&#xA;                canvas.getActiveObject().set("fontWeight", "bold");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-italic") {&#xD;&#xA;                canvas.getActiveObject().set("fontStyle", "italic");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-underline") {&#xD;&#xA;                canvas.getActiveObject().set("textDecoration", "underline");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-linethrough") {&#xD;&#xA;                canvas.getActiveObject().set("textDecoration", "line-through");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-overline") {&#xD;&#xA;                canvas.getActiveObject().set("textDecoration", "overline");&#xD;&#xA;             }&#xD;&#xA;          } else {&#xD;&#xA;             if (this.id == "text-cmd-bold") {&#xD;&#xA;                canvas.getActiveObject().set("fontWeight", "");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-italic") {&#xD;&#xA;                canvas.getActiveObject().set("fontStyle", "");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-underline") {&#xD;&#xA;                canvas.getActiveObject().set("textDecoration", "");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-linethrough") {&#xD;&#xA;                canvas.getActiveObject().set("textDecoration", "");&#xD;&#xA;             }&#xD;&#xA;             if (this.id == "text-cmd-overline") {&#xD;&#xA;                canvas.getActiveObject().set("textDecoration", "");&#xD;&#xA;             }&#xD;&#xA;          }&#xD;&#xA;          canvas.renderAll();&#xD;&#xA;       }&#xD;&#xA;    }&#xD;&#xA;    // Send selected object to front or back&#xD;&#xA;    var selectedObject;&#xD;&#xA;    canvas.on('object:selected', function(event) {&#xD;&#xA;       selectedObject = event.target;&#xD;&#xA;    });&#xD;&#xA;    var sendSelectedObjectBack = function() {&#xD;&#xA;       canvas.sendToBack(selectedObject);&#xD;&#xA;    }&#xD;&#xA;    var sendSelectedObjectToFront = function() {&#xD;&#xA;       canvas.bringToFront(selectedObject);&#xD;&#xA;    }