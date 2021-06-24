    $('#projectsTable').Tabledit({&#xD;&#xA;    	url: '#',&#xD;&#xA;    	deleteButton: false,&#xD;&#xA;    	buttons: {&#xD;&#xA;    	   edit: {&#xD;&#xA;    		   class: 'btn btn-primary secodary',&#xD;&#xA;    		   html: '<img src="/concrete5/application/images/animated/btn_edit.png" class="edit" /><img src="/concrete5/application/images/animated/btn_ok.png" class="ok" style="display:none" />',&#xD;&#xA;    		   action: 'edit'&#xD;&#xA;    	  }&#xD;&#xA;    &#xD;&#xA;    	},&#xD;&#xA;    	columns: {&#xD;&#xA;    	   identifier: [1, 'Projects'],&#xD;&#xA;    	   hideIdentifier: true,&#xD;&#xA;    	 editable: [[1, 'Projects'], [2, 'Subprojects'],[8, 'Project Status', '{"1": "Open", "2": "Closed"}']]&#xD;&#xA;    	},&#xD;&#xA;    	onDraw: function() {&#xD;&#xA;    	   console.log('onDraw()');&#xD;&#xA;    	},&#xD;&#xA;    	onSuccess: function(data, textStatus, jqXHR) {&#xD;&#xA;    	   console.log('onSuccess(data, textStatus, jqXHR)');&#xD;&#xA;    	   console.log(data);&#xD;&#xA;    	   console.log(textStatus);&#xD;&#xA;    	   console.log(jqXHR);&#xD;&#xA;    	},&#xD;&#xA;    	onFail: function(jqXHR, textStatus, errorThrown) {&#xD;&#xA;    	   console.log('onFail(jqXHR, textStatus, errorThrown)');&#xD;&#xA;    	   console.log(jqXHR);&#xD;&#xA;    	   console.log(textStatus);&#xD;&#xA;    	   console.log(errorThrown);&#xD;&#xA;    	},&#xD;&#xA;    	onAlways: function() {&#xD;&#xA;    	   console.log('onAlways()');&#xD;&#xA;    	},&#xD;&#xA;    	onAjax: function(action, serialize) {&#xD;&#xA;    		console.log('onAjax(action, serialize)');&#xD;&#xA;    		console.log(action);&#xD;&#xA;    		console.log(serialize);&#xD;&#xA;    	}&#xD;&#xA;    });&#xD;&#xA;    &#xD;&#xA;    $(function(){&#xD;&#xA;    	$('.edit').on('click',function(){   &#xD;&#xA;    		$(this).toggle();  &#xD;&#xA;    		//show the ok button which is just next to the edit button&#xD;&#xA;    		$(this).next(".ok").toggle();  &#xD;&#xA;    	});&#xD;&#xA;    	$('.ok').on('click',function(){ &#xD;&#xA;    		$(this).toggle();  &#xD;&#xA;    		$(this).next(".edit").toggle();     &#xD;&#xA;    	});&#xD;&#xA;    })