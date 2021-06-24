    $(function() {&#xD;&#xA;      function textWrapper(str, sp) {&#xD;&#xA;        if (sp == undefined) {&#xD;&#xA;          sp = [&#xD;&#xA;            0,&#xD;&#xA;            0&#xD;&#xA;          ];&#xD;&#xA;        }&#xD;&#xA;        var txt = "<span class='w'>" + str + "</span>";&#xD;&#xA;        if (sp[0]) {&#xD;&#xA;          txt = "&nbsp;" + txt;&#xD;&#xA;        }&#xD;&#xA;        if (sp[1]) {&#xD;&#xA;          txt = txt + "&nbsp;";&#xD;&#xA;        }&#xD;&#xA;        return txt;&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      function chunkWords(p) {&#xD;&#xA;        var words = p.split(" ");&#xD;&#xA;        words[0] = textWrapper(words[0], [0, 1]);&#xD;&#xA;        var i;&#xD;&#xA;        for (i = 1; i < words.length; i++) {&#xD;&#xA;          if (words[0].indexOf(".")) {&#xD;&#xA;            words[i] = textWrapper(words[i], [1, 0]);&#xD;&#xA;          } else {&#xD;&#xA;            words[i] = textWrapper(words[i], [1, 1]);&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return words.join("");&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      function makeBtn(tObj) {&#xD;&#xA;        var btn = $("<span>", {&#xD;&#xA;          class: "ui-icon ui-icon-close"&#xD;&#xA;        }).appendTo(tObj);&#xD;&#xA;        btn.click(function(e) {&#xD;&#xA;          $(this).parent().remove();&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      function makeDropText(obj) {&#xD;&#xA;        return obj.droppable({&#xD;&#xA;          drop: function(e, ui) {&#xD;&#xA;            var txt = ui.draggable.text();&#xD;&#xA;            var newSpan = textWrapper(txt, [1, 0]);&#xD;&#xA;            $(this).after(newSpan);&#xD;&#xA;            makeBtn($(this).next("span.w"));&#xD;&#xA;            makeDropText($(this).next("span.w"));&#xD;&#xA;            $("span.w.ui-state-highlight").removeClass("ui-state-highlight");&#xD;&#xA;          },&#xD;&#xA;          over: function(e, ui) {&#xD;&#xA;            $(this).add($(this).next("span.w")).addClass("ui-state-highlight");&#xD;&#xA;          },&#xD;&#xA;          out: function() {&#xD;&#xA;            $(this).add($(this).next("span.w")).removeClass("ui-state-highlight");&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;    &#xD;&#xA;      $("p.given").html(chunkWords($("p.given").text()));&#xD;&#xA;    &#xD;&#xA;      $("span.given").draggable({&#xD;&#xA;        helper: "clone",&#xD;&#xA;        revert: "invalid"&#xD;&#xA;      });&#xD;&#xA;    &#xD;&#xA;      makeDropText($("p.given span.w"));&#xD;&#xA;    });