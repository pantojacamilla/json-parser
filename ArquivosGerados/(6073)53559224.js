    var scrollTopOwner = document.documentElement.__proto__.__proto__.__proto__;&#xD;&#xA;    var oldDescr = Object.getOwnPropertyDescriptor(scrollTopOwner, 'scrollTop');&#xD;&#xA;    Object.defineProperty(scrollTopOwner, '_oldScrollTop_', oldDescr);&#xD;&#xA;    Object.defineProperty(scrollTopOwner, 'scrollTop', {&#xD;&#xA;      get:function(){&#xD;&#xA;        return this._oldScrollTop_;&#xD;&#xA;      },&#xD;&#xA;      set: function(v) {&#xD;&#xA;        debugger;&#xD;&#xA;        this._oldScrollTop_ = v;&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    function someMethodCausingAPageToScrollUp() {&#xD;&#xA;      document.scrollingElement.scrollTop = 1e3;&#xD;&#xA;    }&#xD;&#xA;    setTimeout(someMethodCausingAPageToScrollUp, 1000);