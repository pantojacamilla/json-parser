    	  function validatefilledIn() {&#xD;&#xA;    		  "use strict";&#xD;&#xA;    		  var arr = document.getElementsByName('qty');&#xD;&#xA;    		  var score = document.getElementById('total');&#xD;&#xA;    		  &#xD;&#xA;    		  for(var i=0; i<arr.length;i++){&#xD;&#xA;    			  if(isNaN(parseInt(arr[i].value))) {&#xD;&#xA;    				  &#xD;&#xA;    				  alert("Please make sure all the fields are filled in.");&#xD;&#xA;    				  $('input').val('').css( "border-color", "red" );&#xD;&#xA;    				  $('#form1').find('#total').val('');&#xD;&#xA;    				  return false;&#xD;&#xA;    			  }&#xD;&#xA;    			  &#xD;&#xA;    		  }&#xD;&#xA;    	  } 