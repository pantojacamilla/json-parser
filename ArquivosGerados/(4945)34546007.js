    $(function() {&#xD;&#xA;    	$("#pagination a").trigger('click'); // When page is loaded we trigger a click&#xD;&#xA;    		&#xD;&#xA;    	$('body').on('click','div.well well-sm',function(){&#xD;&#xA;    		var list = $(this);&#xD;&#xA;    		$('#myModal .modal-title').html('User Information');&#xD;&#xA;    		$('#myModal .modal-body').html(list.html());&#xD;&#xA;    		//$('#myModal .modal-body p').removeClass('hidden');&#xD;&#xA;    		// Change this bit!&#xD;&#xA;    		$('#myModal').modal('show');&#xD;&#xA;    	});&#xD;&#xA;    	&#xD;&#xA;    });&#xD;&#xA;    $('#pagination').on('click', 'a', function(e) { // When click on a 'a' element of the pagination div&#xD;&#xA;    	var page = this.id; // Page number is the id of the 'a' element&#xD;&#xA;    	var pagination = ''; // Init pagination&#xD;&#xA;    	$('#articleArea').html('<img src="loader-small.gif" alt="" />'); // Display a processing icon&#xD;&#xA;    	var data = {page: page, per_page: 4}; // Create JSON which will be sent via Ajax&#xD;&#xA;    	// We set up the per_page var at 4. You may change to any number you need.&#xD;&#xA;    	&#xD;&#xA;    			var displayData='';&#xD;&#xA;                var articleList = [{profile_id : "1", first_name : "Jack", surname: "Crow"}];&#xD;&#xA;      &#xD;&#xA;    			for (var j = 0; j < articleList.length; j++) {&#xD;&#xA;    				var gotData = articleList[j];&#xD;&#xA;    				displayData += '<div class="well well-sm"><p>' + gotData.profile_id + '. <b>' + gotData.first_name + '</b>' + gotData.surname + '</p>';&#xD;&#xA;    	//                displayData += '<p class="hidden">'+gotData.address+'</p>'+'<p class="hidden">'+gotData.gender+'</p>'+'<p class="hidden">'+gotData.dob+'</p>';&#xD;&#xA;    				displayData += '</div>';&#xD;&#xA;    				&#xD;&#xA;    				$('#articleArea').html(displayData);//replacing img with data&#xD;&#xA;    			}&#xD;&#xA;    			&#xD;&#xA;    			// Pagination system&#xD;&#xA;    			if (page == 1) pagination += '<div class="cell_disabled"><span>First</span></div><div class="cell_disabled"><span>Previous</span></div>';&#xD;&#xA;    			else pagination += '<div class="cell"><a href="#" id="1">First</a></div><div class="cell"><a href="#" id="' + (page - 1) + '">Previous</span></a></div>';&#xD;&#xA;    			for (var i=parseInt(page)-3; i<=parseInt(page)+3; i++) {&#xD;&#xA;    				if (i >= 1 && i <= data.numPage) {&#xD;&#xA;    					pagination += '<div';&#xD;&#xA;    					if (i == page) pagination += ' class="cell_active"><span>' + i + '</span>';&#xD;&#xA;    					else pagination += ' class="cell"><a href="#" id="' + i + '">' + i + '</a>';&#xD;&#xA;    					pagination += '</div>';&#xD;&#xA;    				}&#xD;&#xA;    			}&#xD;&#xA;    			if (page == data.numPage){&#xD;&#xA;    				pagination += '<div class="cell_disabled"><span>Next</span></div><div class="cell_disabled"><span>Last</span></div>';&#xD;&#xA;    			}&#xD;&#xA;    			else {&#xD;&#xA;    				pagination += '<div class="cell"><a href="#" id="' + (parseInt(page) + 1) + '">Next</a></div><div class="cell"><a href="#" id="' + data.numPage + '">Last</span></a></div>';&#xD;&#xA;    			}&#xD;&#xA;    			&#xD;&#xA;    			$('#pagination').html(pagination); // We update the pagination DIV	&#xD;&#xA;    	return false;&#xD;&#xA;    });