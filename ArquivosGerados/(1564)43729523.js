    $(document).ready(function(){&#xD;&#xA;    var theTotal = 0;&#xD;&#xA;    	$("#one").on("click", function(){&#xD;&#xA;    		if($(this).is(':checked')){&#xD;&#xA;          theTotal = Number(theTotal) + Number($(this).val());&#xD;&#xA;          $('.total').text("Total: "+theTotal);   	&#xD;&#xA;    		} else {&#xD;&#xA;          theTotal = Number(theTotal) - Number($(this).val());&#xD;&#xA;          $('.total').text("Total: "+theTotal);&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;      &#xD;&#xA;      $("#two").on("click", function(){&#xD;&#xA;    		if($(this).is(':checked')){&#xD;&#xA;          theTotal = Number(theTotal) + Number($(this).val());&#xD;&#xA;          $('.total').text("Total: "+theTotal);   	&#xD;&#xA;    		} else {&#xD;&#xA;          theTotal = Number(theTotal) - Number($(this).val());&#xD;&#xA;          $('.total').text("Total: "+theTotal);&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;      &#xD;&#xA;      $("#three").on("click", function(){&#xD;&#xA;    		if($(this).is(':checked')){&#xD;&#xA;          theTotal = Number(theTotal) + Number($(this).val());&#xD;&#xA;          $('.total').text("Total: "+theTotal);   	&#xD;&#xA;    		} else {&#xD;&#xA;          theTotal = Number(theTotal) - Number($(this).val());&#xD;&#xA;          $('.total').text("Total: "+theTotal);&#xD;&#xA;    		}&#xD;&#xA;    	});&#xD;&#xA;      if (theTotal >= 4) {&#xD;&#xA;          $("#ok").show();&#xD;&#xA;        } else {&#xD;&#xA;          $("#ok").hide();&#xD;&#xA;        }&#xD;&#xA;      if (theTotal >= 7) {&#xD;&#xA;          $("#win").show();&#xD;&#xA;        } else {&#xD;&#xA;          $("#win").hide();&#xD;&#xA;        }&#xD;&#xA;      if (theTotal <= 3) {&#xD;&#xA;          $("#lose").show();&#xD;&#xA;        } else {&#xD;&#xA;          $("#lose").hide();&#xD;&#xA;        }&#xD;&#xA;    });