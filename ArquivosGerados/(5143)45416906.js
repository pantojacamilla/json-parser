    $(function () {                &#xD;&#xA;        $('#datetimepicker').datetimepicker({&#xD;&#xA;            minDate: moment().startOf('minute').add(300, 'm'),&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;        $("#btnSubmit").click(function() {&#xD;&#xA;            value = document.getElementById('datetimepicker').value;&#xD;&#xA;            console.log(value)&#xD;&#xA;        });&#xD;&#xA;    });