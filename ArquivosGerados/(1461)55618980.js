    function roundToTwo(num) {&#xD;&#xA;      var rounded = +(Math.round(num + "e+2") + "e-2");&#xD;&#xA;      if (rounded < 0.01) {&#xD;&#xA;        rounded = 0&#xD;&#xA;      };&#xD;&#xA;      return rounded&#xD;&#xA;    }&#xD;&#xA;    $("#quantity, #buy, #sell").on("change keyup paste", function() {&#xD;&#xA;      var quantity = Number($('#quantity').val());&#xD;&#xA;      var buy = Number($("#buy").val());&#xD;&#xA;      var sell = Number($("#sell").val());&#xD;&#xA;      var total_amnt_trade = roundToTwo((quantity * buy) + (quantity * sell));&#xD;&#xA;      var brokerage_amnt_buy = ((buy * quantity) * 0.08) / 100;&#xD;&#xA;      if (brokerage_amnt_buy >= 25) {&#xD;&#xA;        var brokerage_buy = 25;&#xD;&#xA;      } else {&#xD;&#xA;        var brokerage_buy = brokerage_amnt_buy;&#xD;&#xA;      }&#xD;&#xA;      var brokerage_amnt_sell = ((sell * quantity) * 0.08) / 100;&#xD;&#xA;      if (brokerage_amnt_sell >= 25) {&#xD;&#xA;        var brokerage_sell = 25;&#xD;&#xA;      } else {&#xD;&#xA;        var brokerage_sell = brokerage_amnt_sell;&#xD;&#xA;      }&#xD;&#xA;      var brokerage = roundToTwo(brokerage_buy + brokerage_sell); //brokerage&#xD;&#xA;      var transaction_charges = roundToTwo((((buy * quantity) + (sell * quantity)) * 0.00325) / 100); //Transaction Charges&#xD;&#xA;      var gst = roundToTwo((((transaction_charges * 18) / 100) + (brokerage * 18) / 100)); //GST&#xD;&#xA;      var total_charges = roundToTwo(brokerage + transaction_charges + gst);&#xD;&#xA;      var pnl = roundToTwo(((sell - buy) * quantity) - total_charges);&#xD;&#xA;      if (pnl == 0) {&#xD;&#xA;        $('#pnl_text_display').text("Profit / Loss");&#xD;&#xA;        $('#pnl_color').attr('bgcolor', '');&#xD;&#xA;      } else if (pnl > 0) {&#xD;&#xA;        $('#pnl_text_display').text("Profit");&#xD;&#xA;        $('#pnl_color').attr('bgcolor', 'green');&#xD;&#xA;      } else if (pnl < 0) {&#xD;&#xA;        $('#pnl_text_display').text("Loss");&#xD;&#xA;        $('#pnl_color').attr('bgcolor', 'red');&#xD;&#xA;      }&#xD;&#xA;      $('#tot_amnt_trade_display').text(total_amnt_trade);&#xD;&#xA;      $('#total_charges_display').text(total_charges);&#xD;&#xA;      $('#pnl_display').text(pnl);&#xD;&#xA;    })