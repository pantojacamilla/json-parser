    $('#word').on('change keyup paste',function(){&#xD;&#xA;    var a=document.getElementById('word').value; &#xD;&#xA;    var b=a&#xD;&#xA;    .replace('zero','0')&#xD;&#xA;    .replace('one','1')&#xD;&#xA;    .replace('two','2')&#xD;&#xA;    .replace('three','3')&#xD;&#xA;    .replace('four','4')&#xD;&#xA;    .replace('five','5')&#xD;&#xA;    .replace('six','6')&#xD;&#xA;    .replace('seven','7')&#xD;&#xA;    .replace('eight','8')&#xD;&#xA;    .replace('nine','9')&#xD;&#xA;    .replace('','')&#xD;&#xA;    document.getElementById('word').value=b;});