    $(document).ready(function() {&#xD;&#xA;       &#xD;&#xA;    	$("#lstBox1 option").click(function () {&#xD;&#xA;    		 var selectedOp1 = $('#lstBox1 option:selected');&#xD;&#xA;    		 $('#lstBox2').append($(selectedOp1).clone());&#xD;&#xA;            $(selectedOp1).remove();&#xD;&#xA;        });&#xD;&#xA;        $("#lstBox2 option").click(function () {&#xD;&#xA;    		 var selectedOp2 = $('#lstBox2 option:selected');&#xD;&#xA;    		 $('#lstBox1').append($(selectedOp2).clone());&#xD;&#xA;            $(selectedOp2).remove();&#xD;&#xA;        });&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    	&#xD;&#xA;    });