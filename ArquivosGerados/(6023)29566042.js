    $(document).ready(function () &#xD;&#xA;    { &#xD;&#xA;    $('#patient_id').autocomplete({&#xD;&#xA;    	source: function( request, response ) {&#xD;&#xA;    		$.ajax({&#xD;&#xA;    			url : 'opdpatientajax.php',&#xD;&#xA;    			dataType: "json",&#xD;&#xA;    			data: {&#xD;&#xA;    			   name_startsWith: request.term,&#xD;&#xA;    			   type: 'patientname',&#xD;&#xA;    			   row_num : 1&#xD;&#xA;    			},&#xD;&#xA;    			 success: function( data ) {&#xD;&#xA;    				 response( $.map( data, function( item ) {&#xD;&#xA;    					var code = item.split("|");&#xD;&#xA;    					return {&#xD;&#xA;    						label: code[0],&#xD;&#xA;    						value: code[0],&#xD;&#xA;    						data : item&#xD;&#xA;    					}&#xD;&#xA;    				}));&#xD;&#xA;    			}&#xD;&#xA;    		});&#xD;&#xA;    	},&#xD;&#xA;    	autoFocus: true,	      	&#xD;&#xA;    	minLength: 0,&#xD;&#xA;    	select: function( event, ui ) {&#xD;&#xA;    		var names = ui.item.data.split("|");&#xD;&#xA;    		console.log(names[1], names[2], names[3]);						&#xD;&#xA;    		$('#patientAddress').val(names[1]);&#xD;&#xA;    		$('#patientSex').val(names[2]);&#xD;&#xA;    		$('#patientAge').val(names[3]);&#xD;&#xA;    	}		      	&#xD;&#xA;      });&#xD;&#xA;    });