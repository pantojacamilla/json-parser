    function opentickedrows() {&#xD;&#xA;      $('input[type=checkbox]').each(function() {&#xD;&#xA;        if (this.checked) {&#xD;&#xA;          tid = $(this).attr('name').replace("t_", "");&#xD;&#xA;          $.ajax({&#xD;&#xA;            url: '/transfer_list_details_pull.php?id=' + tid,&#xD;&#xA;            type: 'GET',&#xD;&#xA;            success: function(data) {&#xD;&#xA;              $('#r' + tid).html(data);&#xD;&#xA;              $("#r" + tid).show();&#xD;&#xA;              $("#box" + tid).addClass("row-details-open");&#xD;&#xA;            }&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    }