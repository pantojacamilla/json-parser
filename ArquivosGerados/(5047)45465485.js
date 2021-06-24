    (function() {&#xD;&#xA;      var f_cssPseudoElement = function(o_parameters) {&#xD;&#xA;        o_parameters.element.each(function() {&#xD;&#xA;          var $_target = $(this);&#xD;&#xA;          var s_selector = $_target.parents().map(function() {&#xD;&#xA;            return this.tagName.toLowerCase();&#xD;&#xA;          }).get().reverse().join(' > ') + ' > ' + $_target.get(0).tagName.toLowerCase() + ':nth-child(' + ($_target.index() + 1) + ')::' + o_parameters.pseudoElement;&#xD;&#xA;          if (!$_target.data('__pseudoElements__')) $_target.data('__pseudoElements__', {&#xD;&#xA;            StyleSheet: null,&#xD;&#xA;            after: {&#xD;&#xA;              index: null,&#xD;&#xA;              properties: null&#xD;&#xA;            },&#xD;&#xA;            before: {&#xD;&#xA;              index: null,&#xD;&#xA;              properties: null&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;          var o_pseudoElements = $_target.data('__pseudoElements__');&#xD;&#xA;          // I create a body to save styles&#xD;&#xA;          if (!o_pseudoElements.StyleSheet) {&#xD;&#xA;            if (document.styleSheets[0]) {&#xD;&#xA;              o_pseudoElements.StyleSheet = document.styleSheets[0];&#xD;&#xA;            } else {&#xD;&#xA;              var e_StyleSheet = document.createElement('style');&#xD;&#xA;              document.head.appendChild(e_StyleSheet);&#xD;&#xA;              o_pseudoElements.StyleSheet = e_StyleSheet.sheet;&#xD;&#xA;            };&#xD;&#xA;            $_target.data('__pseudoElements__', o_pseudoElements);&#xD;&#xA;          };&#xD;&#xA;          if (typeof o_parameters.undefinedArgument === 'object') {&#xD;&#xA;            /* === Function start ===*/&#xD;&#xA;            if (o_pseudoElements[o_parameters.pseudoElement].properties === null && o_pseudoElements[o_parameters.pseudoElement].index === null) {&#xD;&#xA;              var index = o_pseudoElements.StyleSheet.rules.length || o_pseudoElements.StyleSheet.length;&#xD;&#xA;              o_pseudoElements[o_parameters.pseudoElement].index = index;&#xD;&#xA;              o_pseudoElements[o_parameters.pseudoElement].properties = o_parameters.undefinedArgument;&#xD;&#xA;            } else {&#xD;&#xA;              o_pseudoElements.StyleSheet.deleteRule(o_pseudoElements[o_parameters.pseudoElement].index);&#xD;&#xA;            };&#xD;&#xA;            var rule = '';&#xD;&#xA;            // I add new properties&#xD;&#xA;            for (var property in o_parameters.undefinedArgument) {&#xD;&#xA;              o_pseudoElements[o_parameters.pseudoElement].properties[property] = o_parameters.undefinedArgument[property];&#xD;&#xA;            };&#xD;&#xA;            // Create a new CSS&#xD;&#xA;            for (var property in o_pseudoElements[o_parameters.pseudoElement].properties) {&#xD;&#xA;              rule += property + ': ' + o_pseudoElements[o_parameters.pseudoElement].properties[property] + ' !important; ';&#xD;&#xA;            };&#xD;&#xA;            o_pseudoElements.StyleSheet.addRule(s_selector, rule, o_pseudoElements[o_parameters.pseudoElement].index);&#xD;&#xA;            $_target.data('__pseudoElements__', o_pseudoElements);&#xD;&#xA;            return o_parameters.element;&#xD;&#xA;            /* === End of function ===*/&#xD;&#xA;          } else if (o_parameters.undefinedArgument !== undefined && o_parameters.property !== undefined) {&#xD;&#xA;            // Unreported part&#xD;&#xA;          } else if (o_parameters.undefinedArgument !== undefined && o_parameters.property === undefined) {&#xD;&#xA;            // Unreported part&#xD;&#xA;          } else {&#xD;&#xA;            console.error('Invalid values!');&#xD;&#xA;            return false;&#xD;&#xA;          };&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;      $.fn.cssBefore = function(s$o_argument, s_property) {&#xD;&#xA;        f_cssPseudoElement({&#xD;&#xA;          element: $(this),&#xD;&#xA;          pseudoElement: 'before',&#xD;&#xA;          undefinedArgument: s$o_argument,&#xD;&#xA;          property: s_property&#xD;&#xA;        });&#xD;&#xA;        return false;&#xD;&#xA;      };&#xD;&#xA;      $.fn.cssAfter = function(s$o_argument, s_property) {&#xD;&#xA;        f_cssPseudoElement({&#xD;&#xA;          element: $(this),&#xD;&#xA;          pseudoElement: 'after',&#xD;&#xA;          undefinedArgument: s$o_argument,&#xD;&#xA;          property: s_property&#xD;&#xA;        });&#xD;&#xA;        return false;&#xD;&#xA;      };&#xD;&#xA;    })();&#xD;&#xA;    $(function() {&#xD;&#xA;      // Case 1&#xD;&#xA;      $('.el0').cssBefore({&#xD;&#xA;        'content': '"New \'before\'"',&#xD;&#xA;        'color': 'green'&#xD;&#xA;      });&#xD;&#xA;      // Case 2&#xD;&#xA;      $('.el1').cssBefore({&#xD;&#xA;        'content': '"New \'before\' №2"',&#xD;&#xA;        'color': 'blue'&#xD;&#xA;      });&#xD;&#xA;      // Case 3&#xD;&#xA;      $('.el0').cssBefore({&#xD;&#xA;        'content': '"New \'before\' №3"'&#xD;&#xA;      });&#xD;&#xA;    });