    				$("#clear").on('click', calculate.clear);&#xD;&#xA;    				$("#add").on('click', calculate.add);&#xD;&#xA;    				$("#multiply").on('click', calculate.mul);&#xD;&#xA;    				$("#subtract").on('click' , calculate.sub);&#xD;&#xA;    				$("#divide").on('click' , calculate.div);&#xD;&#xA;    				$("#settings").on('click', calculate.settings);&#xD;&#xA;    				$(".num").on('click', function(){ &#xD;&#xA;    					$("#input").val(this.value);&#xD;&#xA;    				});&#xD;&#xA;    				$("#input").on('keyup', validateNumber);