    new Vue({&#xD;&#xA;      el: '#app',&#xD;&#xA;      data() {&#xD;&#xA;        return {&#xD;&#xA;          flag: false&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      computed: {&#xD;&#xA;        options() {&#xD;&#xA;          let opts = []&#xD;&#xA;          if (this.flag) opts.push('aOption')&#xD;&#xA;          else {&#xD;&#xA;            opts.push('bOption', 'cOption')&#xD;&#xA;          }&#xD;&#xA;            &#xD;&#xA;          return opts&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      components: {&#xD;&#xA;        defaultOption: {&#xD;&#xA;          template: '<span>defaultOption</span>',&#xD;&#xA;        },&#xD;&#xA;        aOption: {&#xD;&#xA;          template: '<span>aOption {{ flag }}</span>',&#xD;&#xA;          props: {&#xD;&#xA;            flag: {&#xD;&#xA;              type: Boolean,&#xD;&#xA;              default: false&#xD;&#xA;            }&#xD;&#xA;          },&#xD;&#xA;          created: function() {&#xD;&#xA;            console.log("aOption created!")&#xD;&#xA;          },&#xD;&#xA;        },&#xD;&#xA;        bOption: {&#xD;&#xA;          template: '<span>bOption {{ flag }}</span>',&#xD;&#xA;          props: {&#xD;&#xA;            flag: {&#xD;&#xA;              type: Boolean,&#xD;&#xA;              default: false&#xD;&#xA;            }&#xD;&#xA;          },&#xD;&#xA;          created: function() {&#xD;&#xA;            console.log("bOption created!")&#xD;&#xA;          },&#xD;&#xA;        },&#xD;&#xA;        cOption: {&#xD;&#xA;          template: '<span>cOption {{ flag }}</span>',&#xD;&#xA;          props: {&#xD;&#xA;            flag: {&#xD;&#xA;              type: Boolean,&#xD;&#xA;              default: false&#xD;&#xA;            }&#xD;&#xA;          },&#xD;&#xA;          created: function() {&#xD;&#xA;            console.log("cOption created!")&#xD;&#xA;          },&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    })