    function format(d) {&#xD;&#xA;      var str = d.files;&#xD;&#xA;      var myarr = str.split(",");&#xD;&#xA;      for (var i = 0; i < myarr.length; i++) {&#xD;&#xA;        alert(myarr[i]);&#xD;&#xA;        $(this).append("<a href='/uploads/" + myarr[i] + "'>" + myarr[i] + "</a>");&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      // `d` is the original data object for the row&#xD;&#xA;      return '<table id="ChildRows" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +&#xD;&#xA;        '<tr>' +&#xD;&#xA;        '<td>Contact Person:</td>' +&#xD;&#xA;        '<td>' + d.person + '</td>' +&#xD;&#xA;        '</tr>' +&#xD;&#xA;        '<tr>' +&#xD;&#xA;        '<td>Phone:</td>' +&#xD;&#xA;        '<td>' + d.phone + '</td>' +&#xD;&#xA;        '</tr>' +&#xD;&#xA;        '<tr>' +&#xD;&#xA;        '<td>Web:</td>' +&#xD;&#xA;        '<td>' + d.web + '</td>' +&#xD;&#xA;        '</tr>' +&#xD;&#xA;        '<tr>' +&#xD;&#xA;        '<td>Trade Type:</td>' +&#xD;&#xA;        '<td>' + d.ttype + '</td>' +&#xD;&#xA;        '</tr>' +&#xD;&#xA;        '<tr>' +&#xD;&#xA;        '<td>Files:</td>' + '<td id="files">'&#xD;&#xA;      '</td>' +&#xD;&#xA;      '</tr>' +&#xD;&#xA;      '</table>';&#xD;&#xA;    }