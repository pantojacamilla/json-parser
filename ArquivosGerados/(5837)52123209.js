    $(document).ready(function() {&#xD;&#xA;    	$("#addmember").click(function() {&#xD;&#xA;    		var currentKey = $(this).attr('class');&#xD;&#xA;    		var lastField = $("#member" + currentKey + " label:last");&#xD;&#xA;    		var intId = (lastField && lastField.length && lastField.data("idx") + 1) || 1;&#xD;&#xA;    		var fieldWrapper = $("<label id=\"" + intId + "\">member member</label>");&#xD;&#xA;    		fieldWrapper.data("idx", intId);&#xD;&#xA;    		var fName = $("<input type=\"text\" id=\"member\" name=\"member[" + currentKey + "][" + intId + "]\" />");&#xD;&#xA;    		var removeButton = $("<input type=\"button\" class=\"remove\" value=\"-\" /><br />");&#xD;&#xA;    		removeButton.click(function() {&#xD;&#xA;    			$(this).parent().remove();&#xD;&#xA;    		});&#xD;&#xA;    		fieldWrapper.append(fName);&#xD;&#xA;    		fieldWrapper.append(removeButton);&#xD;&#xA;    		$("#member" + currentKey).append(fieldWrapper);&#xD;&#xA;    	});&#xD;&#xA;    	&#xD;&#xA;    	var memberKey = 0;&#xD;&#xA;    	$("#addmember").click(function() {&#xD;&#xA;    		memberKey++;&#xD;&#xA;            var fieldSet = $("<fieldset id=\"member" + memberKey +"\"><legend>member member</legend></fieldset>");&#xD;&#xA;    		var label = $("<label id=\"0\">member</label>");&#xD;&#xA;    		var fName = $("<input type=\"text\" id=\"member\" name=\"member[" + memberKey + "][0]\" />");&#xD;&#xA;    		var addmemberButton = $("<input type=\"button\" value=\"Add member\" id=\"addmember\" class=\"" + memberKey +"\" />");&#xD;&#xA;    		fieldSet.append(label);&#xD;&#xA;    		fieldSet.append(fName);&#xD;&#xA;            $("form").append(fieldSet);&#xD;&#xA;    		$("form").append(addmemberButton);&#xD;&#xA;        });&#xD;&#xA;    });