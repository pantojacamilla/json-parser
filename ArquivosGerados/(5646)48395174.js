    $(document).ready(function() {&#xD;&#xA;      $("#trackerid").change(function() {&#xD;&#xA;        var var_locoid = $("#trackerid option:selected").val();&#xD;&#xA;        //  alert(var_locoid);&#xD;&#xA;        $("#deliverylocation").autocomplete({&#xD;&#xA;          source: function(request, response) {&#xD;&#xA;            var auto_data = $("#deliverylocation").val();&#xD;&#xA;            // alert(auto_data);&#xD;&#xA;            //alert(var_locoid);&#xD;&#xA;            $.ajax({&#xD;&#xA;              url: "http://localhost/CodeProject/Testctrl/lookup",&#xD;&#xA;              type: "POST",&#xD;&#xA;              datatype: "json",&#xD;&#xA;              //returnType:"json",&#xD;&#xA;              data: {&#xD;&#xA;                'var_locoid': var_locoid,&#xD;&#xA;                'auto_data': auto_data&#xD;&#xA;              },&#xD;&#xA;              success: function(data) {&#xD;&#xA;                var resp = $.map(data, function(obj) {&#xD;&#xA;                  return obj.tag;&#xD;&#xA;                });&#xD;&#xA;                response(resp);&#xD;&#xA;              }&#xD;&#xA;            });&#xD;&#xA;          },&#xD;&#xA;          minLength: 1&#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;    });