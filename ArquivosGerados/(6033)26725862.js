    $(window).load(function(){&#xD;&#xA;    $(function() {&#xD;&#xA;    //$('#submit').on('click', function() {&#xD;&#xA;    //var valid = true,&#xD;&#xA;        //message = '';&#xD;&#xA;        $( "#sortable" ).sortable({&#xD;&#xA;            placeholder: "ui-state-highlight",&#xD;&#xA;            cursor: 'crosshair',&#xD;&#xA;            update: function(event, ui) {&#xD;&#xA;                var order = $("#sortable").sortable("toArray");&#xD;&#xA;                $('#image_order').val(order.join(","));&#xD;&#xA;                alert($('#image_order').val());&#xD;&#xA;            }&#xD;&#xA;      });&#xD;&#xA;        $( "#sortable" ).disableSelection();&#xD;&#xA;        //if('#image_order').val { != [4,3,2,1];&#xD;&#xA;          //valid = false; }&#xD;&#xA;          //else {&#xD;&#xA;            //window.location.href = "http://google.com"&#xD;&#xA;          //}&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    </script>