    var canvas = new fabric.Canvas("c");&#xD;&#xA;    canvas.setHeight(616);&#xD;&#xA;    canvas.setWidth(446);&#xD;&#xA;    canvas.setBackgroundImage('https://i.imgur.com/4yOoOzl.jpg', canvas.renderAll.bind(canvas), {});&#xD;&#xA;    // Save&#xD;&#xA;    function download(url, name) {&#xD;&#xA;      // make the link. set the href and download. emulate dom click&#xD;&#xA;      $('<a>').attr({&#xD;&#xA;        href: url,&#xD;&#xA;        download: name&#xD;&#xA;      })[0].click();&#xD;&#xA;    }&#xD;&#xA;    function downloadFabric(canvas, name) {&#xD;&#xA;      //  convert the canvas to a data url and download it.&#xD;&#xA;      download(canvas.toDataURL({&#xD;&#xA;        multiplier: 2&#xD;&#xA;      }), name + '.png');&#xD;&#xA;    }&#xD;&#xA;    // Print&#xD;&#xA;    function printCanvas() {&#xD;&#xA;      var dataUrl = document.getElementById('c').toDataURL( /* data multiplier?*/ ); //attempt to save base64 string to server using this var  &#xD;&#xA;      var windowContent = '<!DOCTYPE html>';&#xD;&#xA;      windowContent += '<html>'&#xD;&#xA;      windowContent += '<head><title>Print canvas</title></head>';&#xD;&#xA;      windowContent += '<body>'&#xD;&#xA;      windowContent += '<img src="' + dataUrl + '" onload=window.print();window.close();>';&#xD;&#xA;      windowContent += '</body>';&#xD;&#xA;      windowContent += '</html>';&#xD;&#xA;      var printWin = window.open('', '', 'width=340,height=260');&#xD;&#xA;      printWin.document.open();&#xD;&#xA;      printWin.document.write(windowContent);&#xD;&#xA;    }