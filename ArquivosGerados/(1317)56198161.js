    $('#btnAdd').click(function() {&#xD;&#xA;      debugger&#xD;&#xA;      var itemName = $('#customerName');&#xD;&#xA;      var itemTotalCups = $('#customerTotalCups');&#xD;&#xA;      // Basic Validation&#xD;&#xA;      if (itemName.val().trim() === "") {&#xD;&#xA;        return;&#xD;&#xA;      }&#xD;&#xA;      if (parseInt(itemTotalCups.val()) === 0) {&#xD;&#xA;        return;&#xD;&#xA;      }&#xD;&#xA;      customer.name = itemName.val();&#xD;&#xA;      customer.totalCups = itemTotalCups.val();&#xD;&#xA;      // Data structure Queue&#xD;&#xA;      order.unshift(customer);&#xD;&#xA;    })