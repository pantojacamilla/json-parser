    $(document).ready(function() {&#xD;&#xA;      $('#testbtm').click(function() {&#xD;&#xA;        var svgElement = $('<svg class="hexagon" class="ui-widget-content">\&#xD;&#xA;                   <text fill="black" x=75 y=75 style="text-anchor: middle">1</text>\&#xD;&#xA;                   <path d="M38 0 L113 0 L150 65 L113 130 L38 130 L0 65 Z" / fill="none" stroke="blue"></svg>');&#xD;&#xA;        svgElement.children('text').text(1);&#xD;&#xA;        svgElement.attr("class", "hexagon ui-widget-content");&#xD;&#xA;        $("#display").append(svgElement);&#xD;&#xA;      }); //end click&#xD;&#xA;      $('#testbtm2').click(function() {&#xD;&#xA;        $('.hexagon').each(function() {&#xD;&#xA;          $(this).children('text').text('hi');&#xD;&#xA;        });&#xD;&#xA;      }); // end click&#xD;&#xA;      $('.hexagon').click(function() {&#xD;&#xA;        $(this).children('path').css('fill', 'blue');&#xD;&#xA;      }); //end click&#xD;&#xA;    }); // end ready