    // Get CrumPro&#xD;&#xA;    function getCrPro() {&#xD;&#xA;    var CrmgPro= parseFloat($("#demo3").val());&#xD;&#xA;    var CrumPro = CrmgPro / 0.01131222;&#xD;&#xA;    var CrPro = CrumPro.toFixed(2);&#xD;&#xA;    if (isNaN(CrPro)) CrPro = 0;&#xD;&#xA;  &#xD;&#xA;    $('#demo5').val((CrPro));&#xD;&#xA;    }&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;    $('#demo3').keyup(function(event) {&#xD;&#xA;    getCrPro();&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    // Get CrumPo&#xD;&#xA;    function getCrPo() {&#xD;&#xA;    var CrmgPo = parseFloat($("#res1").val());&#xD;&#xA;    var CrumPo = CrmgPo / 0.01131222;&#xD;&#xA;    var CrPo = CrumPo.toFixed(2);&#xD;&#xA;    if (isNaN(CrPo)) CrPo = 0;&#xD;&#xA; &#xD;&#xA;    $('#res2').val((CrPo));&#xD;&#xA;    }&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;    $('#res1').keyup(function(event) {&#xD;&#xA;    getCrPo();&#xD;&#xA;    });&#xD;&#xA;    });&#xD;&#xA;    //get GPro&#xD;&#xA;    Function getGPro () {&#xD;&#xA;    Var Cr = parseFloat($("#demo3").val());&#xD;&#xA;    var Cru = Cr / 0.01131222;&#xD;&#xA;    var Cru2 = Cru.toFixed(2);&#xD;&#xA;    Var Cr8 = Cru2 / 88,4;&#xD;&#xA;    Var kCr = Mat.pow (Cr8, -1,154);&#xD;&#xA;    Var kA = parseFloat($("#demo1").val());&#xD;&#xA;    Var kAP = Math.pow (kA, -0,203);&#xD;&#xA;    Var kG = parseFloat($("#demo4").val());&#xD;&#xA;    Var G = (31 * kCr * kAP * kG)&#xD;&#xA;    if (isNaN(G)) G = 0;&#xD;&#xA;    $('#demo6').val((G));&#xD;&#xA;    }&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;    $('#demo3').keyup(function(event) {&#xD;&#xA;    getGPro();&#xD;&#xA;    });&#xD;&#xA;    });