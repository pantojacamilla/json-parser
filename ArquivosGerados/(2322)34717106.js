    var canvas = new fabric.Canvas('canvas');&#xD;&#xA;    document.getElementById('file').addEventListener("change", function (e) {&#xD;&#xA;      var file = e.target.files[0];&#xD;&#xA;      var reader = new FileReader();&#xD;&#xA;      reader.onload = function (f) {&#xD;&#xA;        var data = f.target.result;&#xD;&#xA;        fabric.Image.fromURL(data, function (img) {&#xD;&#xA;          var oImg = img.set({left: 50, top: 100, angle: 00}).scale(0.9);&#xD;&#xA;          canvas.add(oImg).renderAll();&#xD;&#xA;          var a = canvas.setActiveObject(oImg);&#xD;&#xA;          var dataURL = canvas.toDataURL({ format: 'jpeg', quality: 0.8 });&#xD;&#xA;          console.log("Canvas Image " + dataURL);&#xD;&#xA;          document.getElementById('txt').href=dataURL;&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;      reader.readAsDataURL(file);  &#xD;&#xA;    });