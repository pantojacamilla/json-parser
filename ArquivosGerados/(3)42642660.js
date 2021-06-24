        window.onload = function() {&#xD;&#xA;        var fileInput = document.getElementById('fileInput');&#xD;&#xA;        var fileDisplayArea = document.getElementById('fileDisplayArea');&#xD;&#xA;    &#xD;&#xA;        fileInput.addEventListener('change', function(e) {&#xD;&#xA;            var file = fileInput.files[0];&#xD;&#xA;            var textType = /text.*/;&#xD;&#xA;            var imageType = /image.*/;&#xD;&#xA;    &#xD;&#xA;            if (file.type.match(textType)) {&#xD;&#xA;                var reader = new FileReader();&#xD;&#xA;                reader.onload = function(e) {&#xD;&#xA;    				fileDisplayArea.innerText = reader.result;&#xD;&#xA;                }&#xD;&#xA;                reader.readAsText(file);&#xD;&#xA;            }&#xD;&#xA;            else if (file.type.match(imageType)) {&#xD;&#xA;                var reader = new FileReader();&#xD;&#xA;                reader.onload = function(e) {&#xD;&#xA;    				fileDisplayArea.innerHTML = "";&#xD;&#xA;    				var img = new Image();&#xD;&#xA;    				img.src = reader.result;&#xD;&#xA;                    var string = OCRAD(img);&#xD;&#xA;                    alert(string);&#xD;&#xA;                }&#xD;&#xA;                reader.readAsDataURL(file);&#xD;&#xA;            }&#xD;&#xA;            else if (fileInput.files[0].type === 'application/pdf') {&#xD;&#xA;                var reader = new FileReader();&#xD;&#xA;                reader.onload = function(e) {&#xD;&#xA;    				fileDisplayArea.innerHTML = "";&#xD;&#xA;    				var img = new Image();&#xD;&#xA;    				img.src = reader.result;&#xD;&#xA;                    Tesseract.recognize(img)&#xD;&#xA;                        .progress(function  (p) { console.log('progress', p)    })&#xD;&#xA;                        .then(function (result) { console.log('result', result) })&#xD;&#xA;                }&#xD;&#xA;                reader.readAsDataURL(file);&#xD;&#xA;            }&#xD;&#xA;            else if (fileInput.files[0].type === 'application/msword') {&#xD;&#xA;                var reader = new FileReader();&#xD;&#xA;                reader.onload = function(e) {&#xD;&#xA;    				fileDisplayArea.innerHTML = "";&#xD;&#xA;    				var img = new Image();&#xD;&#xA;    				img.src = reader.result;&#xD;&#xA;                }&#xD;&#xA;                reader.readAsDataURL(file);&#xD;&#xA;            }&#xD;&#xA;            else&#xD;&#xA;                fileDisplayArea.innerText = "Yüklediğiniz dosya türü desteklenmiyor.";&#xD;&#xA;        });&#xD;&#xA;    }