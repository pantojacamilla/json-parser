    $(document).ready(function() {&#xD;&#xA;      var RN = {};&#xD;&#xA;      RN.gvCreator = Backbone.View.extend({&#xD;&#xA;        el: '.shell',&#xD;&#xA;        render: function() {&#xD;&#xA;          console.info('building stuff');&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      //set up the global view for all menu items etc&#xD;&#xA;      RN.gv = new RN.gvCreator();&#xD;&#xA;      RN.gv.render();&#xD;&#xA;      console.info(RN.gv);&#xD;&#xA;      var indexView = RN.gv.extend({&#xD;&#xA;        el: '.content',&#xD;&#xA;        render: function() {&#xD;&#xA;          console.info('working');&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      Backbone.history.start();&#xD;&#xA;    });