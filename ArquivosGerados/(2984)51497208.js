    var max = 0;&#xD;&#xA;    var customeheight;&#xD;&#xA;    var rowLength = $('.tbl tr').length;&#xD;&#xA;    function recordHeight () {&#xD;&#xA;      for (var i = 0; i <= rowLength; i++) {&#xD;&#xA;        customeheight = $(this).height();&#xD;&#xA;        //max+ = max + customeheight;&#xD;&#xA;        alert(customeheight);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    recordHeight();