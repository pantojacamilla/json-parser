    < script >&#xD;&#xA;      $(document).ready(function() {&#xD;&#xA;        $("#oroom").blur(function() {&#xD;&#xA;          var oroom = $("#oroom").val();&#xD;&#xA;          var capa = $("#rcapa").val();&#xD;&#xA;          if (oroom.lenght == capa.lenght) {&#xD;&#xA;            $("#rcapa").html("Capacity of 1 - 16 person");&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      }); < /script>