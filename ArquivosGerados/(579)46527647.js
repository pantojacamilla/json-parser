    <script>&#xD;&#xA;    jQuery(document).ready(function($) {&#xD;&#xA;    $("#checkboxdiv input:checkbox").change(function() {&#xD;&#xA;                var total = 0;&#xD;&#xA;                $('#checkboxdiv input:checkbox:checked').each(function() {&#xD;&#xA;                    total += parseInt(this.value, 10);&#xD;&#xA;                });&#xD;&#xA;                $('#subtotal').text(total);&#xD;&#xA;            });&#xD;&#xA;    });&#xD;&#xA;    </script>&#xD;&#xA;    