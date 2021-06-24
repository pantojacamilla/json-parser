    $(document).ready(function() {&#xD;&#xA;      $("input.select-item").click(function() {&#xD;&#xA;        var productID = $(this).val();&#xD;&#xA;        // Create a reference to $(this) here:&#xD;&#xA;        $this = $(this);&#xD;&#xA;        $.post('productSelections.php', {&#xD;&#xA;          type: 'updateSelections',&#xD;&#xA;          productID: productID,&#xD;&#xA;          selectionType: 'single'&#xD;&#xA;        }, function(data) {&#xD;&#xA;          data = JSON.parse(data);&#xD;&#xA;          if (data.error) {&#xD;&#xA;            var ajaxError = (data.text);&#xD;&#xA;            var errorAlert = 'There was an error updating the Product Selections';&#xD;&#xA;            $this.closest('td').addClass("has-error");&#xD;&#xA;            $("#updateSelectionsErrorMessage").html(errorAlert);&#xD;&#xA;            $("#updateSelectionsError").show();&#xD;&#xA;            return; // stop executing this function any further&#xD;&#xA;          } else {&#xD;&#xA;            $this.closest('td').addClass("success")&#xD;&#xA;            $this.closest('td').removeClass("danger");&#xD;&#xA;          }&#xD;&#xA;        }).fail(function(xhr) {&#xD;&#xA;          var httpStatus = (xhr.status);&#xD;&#xA;          var ajaxError = 'There was an error updating the Product Selections';&#xD;&#xA;          $this.closest('td').addClass("danger");&#xD;&#xA;          $("#updateSelectionsErrorMessage").html(ajaxError);&#xD;&#xA;          $("#updateSelectionsError").show();&#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;    });