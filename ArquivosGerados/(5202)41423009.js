        (function ($, win, doc) {&#xD;&#xA;        'use strict';&#xD;&#xA;        $.fn.test = Plugin;&#xD;&#xA;        $.fn.test.Constructor = Test;&#xD;&#xA;        function Plugin() {&#xD;&#xA;            return this.each(function () {&#xD;&#xA;                new Test(this);&#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;        // TREE CLASS DEFINITION&#xD;&#xA;        // =====================&#xD;&#xA;        function Test(el) {&#xD;&#xA;             var publ = this,&#xD;&#xA;                priv = {};&#xD;&#xA;            console.log("start");&#xD;&#xA;            $('.test_button').click(function(){&#xD;&#xA;                console.log("clicked");&#xD;&#xA;                publ.scrollTest&#xD;&#xA;            })&#xD;&#xA;             publ.scrollTest = function () {&#xD;&#xA;                console.log("in scrolltest");&#xD;&#xA;            };&#xD;&#xA;        }&#xD;&#xA;        }(jQuery, this, this.document));