    $("#txt1").change(function(){&#xD;&#xA;      $("#txt2").val("1")&#xD;&#xA;      //$("#txt2").change();&#xD;&#xA;    });&#xD;&#xA;    $('#txt2').on("change", function() {&#xD;&#xA;      // some computation will happen here.&#xD;&#xA;      alert("1");&#xD;&#xA;    });&#xD;&#xA;    $("#btn1").click(function(){&#xD;&#xA;      $("#txt2").val("1");&#xD;&#xA;    });