    $('input[type="checkbox"]').change(function() {&#xD;&#xA;        var totalprice = 0;&#xD;&#xA;        var ekhizmat = 0;&#xD;&#xA;        var guven = 0;&#xD;&#xA;        var aracprice = parseInt(<?php echo $_POST["aracprice"];?>);&#xD;&#xA;        $('input[type="checkbox"]:checked').each(function() {&#xD;&#xA;            totalprice = totalprice + ekhizmat + guven +parseInt($(this).val(), 10) + aracprice;&#xD;&#xA;        });&#xD;&#xA;        $('#total').text(totalprice);&#xD;&#xA;    });