    $(function(){&#xD;&#xA;    var canvas=document.getElementById("canvas");&#xD;&#xA;    var cxt=canvas.getContext("2d");&#xD;&#xA;        // hexagon&#xD;&#xA;        var numberOfSides = 5,&#xD;&#xA;            size = 100,&#xD;&#xA;            Xcenter = 150,&#xD;&#xA;            Ycenter = 150;&#xD;&#xA;        cxt.beginPath();&#xD;&#xA;        cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          &#xD;&#xA;        for (var i = 1; i <= numberOfSides;i += 1) {&#xD;&#xA;          cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));&#xD;&#xA;        }&#xD;&#xA;        cxt.strokeStyle = "#000000";&#xD;&#xA;        cxt.lineWidth = 1;&#xD;&#xA;        cxt.stroke();&#xD;&#xA;      });