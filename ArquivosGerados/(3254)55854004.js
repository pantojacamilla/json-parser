        $(window).load(function(){ &#xD;&#xA;        var $rows = $('#table tr'),&#xD;&#xA;    	info,&#xD;&#xA;        specialty;&#xD;&#xA;    &#xD;&#xA;    $('input').keyup(function () {&#xD;&#xA;      infovalue = $('#infoid').val().toLowerCase(),&#xD;&#xA;      specialtyvalue = $('#specialtyid').val().toLowerCase();&#xD;&#xA;      $rows.each(function (index, tr) {&#xD;&#xA;      	info = $(tr).find('td:nth-of-type(1)').text().toLowerCase(),&#xD;&#xA;        specialty = $(tr).find('td:nth-of-type(2)').text().toLowerCase();&#xD;&#xA;        if ((info.indexOf(infovalue) != -1) && (specialty.indexOf(specialtyvalue) != -1)) {&#xD;&#xA;          $(this).show();&#xD;&#xA;        } else {&#xD;&#xA;          $(this).hide();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      if ((searchVal1 === '') && (searchVal2 === '')) {&#xD;&#xA;        $rows.show();&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    });