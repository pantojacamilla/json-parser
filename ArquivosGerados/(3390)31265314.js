    window.fbAsyncInit = function() {&#xD;&#xA;      FB.init({&#xD;&#xA;        appId: appId',&#xD;&#xA;        cookie: true,xfbml: true,&#xD;&#xA;        channelUrl: return_url,&#xD;&#xA;        oauth: true&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;    (function() {&#xD;&#xA;      var e = document.createElement('script');&#xD;&#xA;      e.async = true;e.src = document.location.protocol +'//connect.facebook.net/en_US/all.js';&#xD;&#xA;      document.getElementById('fb-root').appendChild(e);}());&#xD;&#xA;      },&#xD;&#xA;      {scope:fbPermissions});&#xD;&#xA;    }