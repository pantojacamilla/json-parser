    jQuery.extend(jQuery.expr[':'], {&#xD;&#xA;      focusable: function(el, index, selector) {&#xD;&#xA;        return $(el).is('a, button, :input, [tabindex]');&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    $(document).on('keydown', ':focusable', function(e) {&#xD;&#xA;      if (e.which == 13 && this.tagName.toLowerCase() != "textarea") {&#xD;&#xA;        e.preventDefault();&#xD;&#xA;        $(this).trigger({&#xD;&#xA;          "type": 'keypress',&#xD;&#xA;          which: 9&#xD;&#xA;        })&#xD;&#xA;      }&#xD;&#xA;    });