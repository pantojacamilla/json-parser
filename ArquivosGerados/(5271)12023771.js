    $(function() {&#xD;&#xA;      $(".empty").each(hideCellIfEmpty);&#xD;&#xA;    });&#xD;&#xA;    function hideCellIfEmpty() {&#xD;&#xA;      var theCell = $(this);&#xD;&#xA;      if (theCell.html().length == 0) {&#xD;&#xA;        hideSoft(theCell);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function hideSoft(jQElement) {&#xD;&#xA;      jqElement.css('visibility', 'hidden');&#xD;&#xA;    }