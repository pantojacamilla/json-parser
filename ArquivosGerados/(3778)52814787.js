    $('.dashboard-table-tbody tr').click(function(e) {&#xD;&#xA;      if ($(this).hasClass('active')) {&#xD;&#xA;        $(this).removeClass('active');&#xD;&#xA;        $(this).children('td').children('div').children('input').prop('checked', false);&#xD;&#xA;      } else {&#xD;&#xA;        $(this).addClass('active');&#xD;&#xA;        $(this).children('td').children('div').children('input').prop('checked', true);&#xD;&#xA;      }&#xD;&#xA;      if ($('.table tbody').find('input:checkbox:checked').length === $('.table tbody').find('input:checkbox').length) {&#xD;&#xA;        $(".headerCheckbox").prop('checked', true);&#xD;&#xA;      } else {&#xD;&#xA;        $(".headerCheckbox").prop('checked', false);&#xD;&#xA;      }&#xD;&#xA;      e.preventDefault();&#xD;&#xA;    });&#xD;&#xA;    $(".headerCheckbox").click(function(e) {&#xD;&#xA;      if ($(this).is(":checked")) {&#xD;&#xA;        $(".table tbody tr").addClass("active");&#xD;&#xA;        $(".table tbody tr input:checkbox").prop('checked', true);&#xD;&#xA;      } else {&#xD;&#xA;        $(".table tbody tr").removeClass("active");&#xD;&#xA;        $(".table tbody tr input:checkbox").prop('checked', false);&#xD;&#xA;      }&#xD;&#xA;    });