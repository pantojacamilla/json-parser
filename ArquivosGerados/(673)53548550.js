    var c = document.getElementById("canvas"),&#xD;&#xA;        ctx = c.getContext("2d"),&#xD;&#xA;        opaqueAlpha = 255,&#xD;&#xA;        img = new Image();&#xD;&#xA;        &#xD;&#xA;    img.onload = function(){&#xD;&#xA;      ctx.shadowColor = '#0f0'; // green for demo purposes&#xD;&#xA;      ctx.shadowBlur = 20;&#xD;&#xA;      ctx.shadowOffsetX = 0;&#xD;&#xA;      ctx.shadowOffsetY = 0;&#xD;&#xA;      ctx.drawImage(img, 30, 30);&#xD;&#xA;      &#xD;&#xA;      img = ctx.getImageData(0, 0, ctx.canvas.width - 1, ctx.canvas.height - 1);&#xD;&#xA;     &#xD;&#xA;      // turn all non-transparent pixels to full opacity&#xD;&#xA;      for (var i = img.data.length; i > 0; i -= 4) {&#xD;&#xA;        if (img.data[i+3] > 0) {&#xD;&#xA;          img.data[i+3] = opaqueAlpha;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;     &#xD;&#xA;      // write transformed opaque pixels back to image&#xD;&#xA;      ctx.putImageData(img, 0, 0);&#xD;&#xA;      &#xD;&#xA;      // trying to get the img again and then apply the gray drop shadow...not working&#xD;&#xA;      img = ctx.getImageData(0, 0, ctx.canvas.width - 1, ctx.canvas.height - 1);&#xD;&#xA;      &#xD;&#xA;      // need to add a gray shadow to the now opaque border&#xD;&#xA;      ctx.shadowColor = '#aaa';&#xD;&#xA;      ctx.shadowBlur = 10;&#xD;&#xA;      ctx.shadowOffsetX = 0;&#xD;&#xA;      ctx.shadowOffsetY = 0;&#xD;&#xA;      ctx.putImageData(img, 0, 0);&#xD;&#xA;    };&#xD;&#xA;    img.setAttribute('crossOrigin', '');&#xD;&#xA;    img.src = "https://i.ezr.io/racks/bb0e6dd421df72541a79f271fb4f1a90.png?" + new Date().getTime();