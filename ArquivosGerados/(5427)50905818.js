    $(document).foundation();&#xD;&#xA;    $(function () {&#xD;&#xA;      var options = {&#xD;&#xA;        cellHeight: 40,&#xD;&#xA;        verticalMargin: 28,&#xD;&#xA;        animate: true,&#xD;&#xA;      };&#xD;&#xA;      widgetsInit = function(options) {&#xD;&#xA;        var targetPanel = '.tabs-panel.is-active';&#xD;&#xA;        setTimeout(function(){&#xD;&#xA;          $(targetPanel + ' .grid-stack').gridstack(options);&#xD;&#xA;          $(targetPanel + ' .grid-stack .grid-stack-item').each(function(i){&#xD;&#xA;            $(targetPanel + ' .grid-stack').data('gridstack').resize(&#xD;&#xA;              $(targetPanel + ' .grid-stack .grid-stack-item')[i],&#xD;&#xA;              $($(targetPanel + ' .grid-stack .grid-stack-item')[i]).attr('data-gs-width'),&#xD;&#xA;              Math.ceil(($(targetPanel + ' .grid-stack .grid-stack-item .grid-stack-item-content')[i].scrollHeight + $(targetPanel + ' .grid-stack').data('gridstack').opts.verticalMargin) / ($(targetPanel + ' .grid-stack').data('gridstack').cellHeight() + $(targetPanel + ' .grid-stack').data('gridstack').opts.verticalMargin))&#xD;&#xA;            );&#xD;&#xA;          });&#xD;&#xA;        }, 200);&#xD;&#xA;      }&#xD;&#xA;      widgetsInit(options);&#xD;&#xA;      $('.tabs-title').on('click', function(e) {&#xD;&#xA;        widgetsInit(options);&#xD;&#xA;      })&#xD;&#xA;    });