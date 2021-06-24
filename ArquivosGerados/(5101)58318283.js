    $(document).ready(function() {&#xD;&#xA;      $('#ticker').waypoint({&#xD;&#xA;        handler: function() {&#xD;&#xA;          $('.count').each(function() {&#xD;&#xA;            const initial = $(this).text()&#xD;&#xA;            const format = formatter(initial)&#xD;&#xA;            $(this).prop('Counter', 0).animate({&#xD;&#xA;              Counter: format.value&#xD;&#xA;            }, {&#xD;&#xA;              duration: 1500,&#xD;&#xA;              easing: 'swing',&#xD;&#xA;              step: function(now) {&#xD;&#xA;                $(this).text(format.revert(Math.ceil(now)));&#xD;&#xA;              }&#xD;&#xA;            });&#xD;&#xA;          });&#xD;&#xA;        },&#xD;&#xA;        offset: '100%'&#xD;&#xA;      });&#xD;&#xA;    })&#xD;&#xA;    // keep string after count&#xD;&#xA;    function formatter(str) {&#xD;&#xA;      const char = 'x'&#xD;&#xA;      const template = str.replace(/\d/g, char)&#xD;&#xA;      const value = str.replace(/\D/g, '')&#xD;&#xA;      function revert(val) {&#xD;&#xA;        const valStr = val.toString()&#xD;&#xA;        let result = ''&#xD;&#xA;        let index = 0&#xD;&#xA;        for (let i = 0; i < template.length; i++) {&#xD;&#xA;          const holder = template[i]&#xD;&#xA;          if (holder === char) {&#xD;&#xA;            result += valStr.slice(index, index + 1)&#xD;&#xA;            index++&#xD;&#xA;          } else {&#xD;&#xA;            result += holder&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return result&#xD;&#xA;      }&#xD;&#xA;      return {&#xD;&#xA;        template: template,&#xD;&#xA;        value: value,&#xD;&#xA;        revert: revert&#xD;&#xA;      }&#xD;&#xA;    }