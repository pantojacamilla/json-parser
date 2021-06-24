    $('#autocomplete').autocomplete({&#xD;&#xA;      position: {&#xD;&#xA;        my: "right top",&#xD;&#xA;        at: "right bottom"&#xD;&#xA;      },&#xD;&#xA;      source: function(request, response) {&#xD;&#xA;        $.ajax({&#xD;&#xA;          type: "POST",&#xD;&#xA;          url: apiurl + "apiv2/getUsers",&#xD;&#xA;          data: {&#xD;&#xA;            cust_id: localStorage.getItem("cust_id"),&#xD;&#xA;            user_type: $("#to_role").val()&#xD;&#xA;          },&#xD;&#xA;          success: function(data1) {&#xD;&#xA;            var parsedJson = $.parseJSON(data1);&#xD;&#xA;            response($.map(parsedJson.response.data, function(item) {&#xD;&#xA;              return {&#xD;&#xA;                label: item.name,&#xD;&#xA;                value: item.id&#xD;&#xA;              }&#xD;&#xA;            }));&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      },&#xD;&#xA;      select: function(event, ui) {&#xD;&#xA;        $('#searchval').val(ui.item.value);&#xD;&#xA;        $('#autocomplete').val(ui.item.label);&#xD;&#xA;        return false; // Prevent the widget from inserting the value.&#xD;&#xA;      },&#xD;&#xA;      focus: function(event, ui) {&#xD;&#xA;        $("#autocomplete").val(ui.item.label);&#xD;&#xA;        return false; // Prevent the widget from inserting the value.&#xD;&#xA;      },&#xD;&#xA;    });&#xD;&#xA;    $('#autocomplete').on('autocompleteselect', function(e, ui) {&#xD;&#xA;      getUsersData(ui.item.value);&#xD;&#xA;    });