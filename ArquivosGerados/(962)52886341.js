    $(document).ready(function() {&#xD;&#xA;      $("#showdiv1").click(function() {&#xD;&#xA;        $("section").append($("#div1").clone(true));&#xD;&#xA;        $("#div1").fadeIn("500");&#xD;&#xA;        $("#hidediv1").fadeIn("500");&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    $("#hidediv2").click(function() {&#xD;&#xA;      $(this).closest("#div2").fadeOut("500");&#xD;&#xA;    });&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;      $("#showdiv2").click(function() {&#xD;&#xA;        $("section").append($("#div2").clone(true));&#xD;&#xA;        $("#div2").fadeIn("500");&#xD;&#xA;        $("#hidediv2").fadeIn("500");&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    $("#hidediv2").click(function() {&#xD;&#xA;      $(this).closest("#div2").fadeOut("500");&#xD;&#xA;    });