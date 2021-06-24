    var proxy = new Proxy(Image, {&#xD;&#xA;          set: function(a,b,c,d){&#xD;&#xA;            console.log('set '+b);        // doesn't show&#xD;&#xA;            return Reflect.set(a,b,c,d);&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;        var imgProxy = new proxy();&#xD;&#xA;        imgProxy.onload = function(){&#xD;&#xA;          console.log('Proxy loaded OK');&#xD;&#xA;          document.body.appendChild(imgProxy);&#xD;&#xA;        };&#xD;&#xA;        imgProxy.src = 'https://i.imgur.com/zn7O7QWb.jpg';