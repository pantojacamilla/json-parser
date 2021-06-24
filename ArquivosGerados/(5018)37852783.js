     function addToFilter(divName) {&#xD;&#xA;      var val = document.getElementById('filter').value;&#xD;&#xA;      var newdiv = document.createElement('div');&#xD;&#xA;      switch (val) {&#xD;&#xA;        case 'mcus':&#xD;&#xA;          newdiv.innerHTML =  newdiv.innerHTML = "<div class='container'>Multi company use case &nbsp: " +&#xD;&#xA;            "&nbsp;<select id='mcuc_selection'>" +&#xD;&#xA;            "</select>" +&#xD;&#xA;            "&nbsp;&nbsp<img src='remove-icon.jpg' alt='remove' onmouseover='' style='cursor: pointer;' class='remove-icon'>" +&#xD;&#xA;            "<hr style='width:900px; margin-left:0px;'></div>";&#xD;&#xA;          break;&#xD;&#xA;          break;&#xD;&#xA;        case 'ot':&#xD;&#xA;          newdiv.innerHTML = "<div class='container'>Order Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+&#xD;&#xA;    	  "&nbsp;&nbsp;<select id='oc_selection'></select> &nbsp;"+&#xD;&#xA;    	  "<img src='remove-icon.jpg' alt='remove' onmouseover='' style='cursor: pointer;' class='remove-icon'>"+&#xD;&#xA;    	  "<hr style='width:900px; margin-left:0px;'></div>";&#xD;&#xA;          break;&#xD;&#xA;        case 'dt':&#xD;&#xA;          newdiv.innerHTML = "<div class='container'>Date&Time&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:" +&#xD;&#xA;            "<div id='startDate' class='input-append date' style='margin-left:165px; margin-top:-20px'>" +&#xD;&#xA;            "<label>Start Date&Time: </label>" +&#xD;&#xA;            "<input  id='date1' type='text' style='width:200px; height:15%'></input>" +&#xD;&#xA;            "<span class='add-on' style='height:26px'>" +&#xD;&#xA;            "<i id='dateIcon1' data-time-icon='icon-time' data-date-icon='icon-calendar'></i>" +&#xD;&#xA;            "</span>" +&#xD;&#xA;            "</div>" +&#xD;&#xA;            "<div id='endDate' class='input-append date' style='margin-left:550px; margin-top:-55px'>" +&#xD;&#xA;            "<label>End Date&Time:&nbsp;</label>" +&#xD;&#xA;            "<input type='text' style='width:200px; height:15%'></input>" +&#xD;&#xA;            "<span class='add-on' style='height:26px'>" +&#xD;&#xA;            "<i id='dateIcon1' data-time-icon='icon-time' data-date-icon='icon-calendar'></i>" +&#xD;&#xA;            "</span>" +&#xD;&#xA;            "</div>" +&#xD;&#xA;            "&nbsp;<img src='remove-icon.jpg' alt='remove'  onmouseover='' style='cursor: pointer; margin-left:780px; margin-top:-55px' class='remove-icon'><hr style='width:900px; margin-left:0px;'></div>";&#xD;&#xA;          break;&#xD;&#xA;    	  &#xD;&#xA;      }&#xD;&#xA;      document.getElementById(divName).appendChild(newdiv);&#xD;&#xA;      if (val == "dt") {&#xD;&#xA;        callDate();&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function callDate() {&#xD;&#xA;      $('#startDate').datetimepicker({&#xD;&#xA;        format: 'dd/MM/yyyy hh:mm:ss PP',&#xD;&#xA;        language: 'en',&#xD;&#xA;        pick12HourFormat: true&#xD;&#xA;      });&#xD;&#xA;      $('#endDate').datetimepicker({&#xD;&#xA;        format: 'dd/MM/yyyy hh:mm:ss PP',&#xD;&#xA;        language: 'en',&#xD;&#xA;        pick12HourFormat: true&#xD;&#xA;      });&#xD;&#xA;    }	&#xD;&#xA;        $.each(addFilter, function(key, value) {&#xD;&#xA;        $('#filter').append('<option value="' + key + '">' + addFilter[key] + '</option>');&#xD;&#xA;    	});&#xD;&#xA;        $.each(multiCompanyUseCase, function(key, value) {&#xD;&#xA;        $('#mcuc_selection').append('<option value="' + key + '">' + multiCompanyUseCase[key] + '</option>');&#xD;&#xA;    	});&#xD;&#xA;        $.each(orderType, function(key, value) {&#xD;&#xA;        $('#oc_selection').append('<option value="' + key + '">' + orderType[key] + '</option>');&#xD;&#xA;    	});&#xD;&#xA;    $(document).on('click', '.container', function(){&#xD;&#xA;    		  $(".remove-icon").on("click", function() {&#xD;&#xA;    		    $(this).parent(".container").remove();&#xD;&#xA;    		  });&#xD;&#xA;    });&#xD;&#xA;    		  $(".remove-icon").on("click", function() {&#xD;&#xA;    		    $(this).parent(".container").remove();&#xD;&#xA;    		  });&#xD;&#xA;    </script>				