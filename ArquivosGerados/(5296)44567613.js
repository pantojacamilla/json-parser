    $(document).on('click', '#add', function() {&#xD;&#xA;      if ($('#new-option').val() != '') {&#xD;&#xA;        var val = $('#new-option').val();&#xD;&#xA;        $('#foo option:last').html(val);&#xD;&#xA;        var opt = '<option>Other</option>';&#xD;&#xA;        $('#foo').append(opt);&#xD;&#xA;        $('#foo').val(val);&#xD;&#xA;        $('#new-option').val('');&#xD;&#xA;        console.log($("#foo option").each(function() {&#xD;&#xA;          $(this).val();&#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;    });