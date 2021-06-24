    // overlay functions&#xD;&#xA;    function openOverlay(){&#xD;&#xA;      document.getElementById("pageOverlay").style.visibility = "visible";&#xD;&#xA;    }&#xD;&#xA;    function closeOverlay(){&#xD;&#xA;      document.getElementById("pageOverlay").style.visibility = "hidden";&#xD;&#xA;    }&#xD;&#xA;    // show row data to be edited or view single row&#xD;&#xA;    $(".rowEditData").click(function() {&#xD;&#xA;                html = "<div id='editableTableDiv'><label class='editRowLabel'>Shape Name:</label> <input type='text' class='mdl-textfield__input' value="+ $(this).find('td').eq(0).html() + "><br><label class='editRowLabel'>Number Edges:</label> <input type='text' class='mdl-textfield__input' value="+ $(this).find('td').eq(1).html() + "><br><label class='editRowLabel'>Sum of Interior Angles:</label> <input type='text' class='mdl-textfield__input' value="+ $(this).find('td').eq(2).html() + "><br><br><input type='button' class='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' value='Save' onclick='saveNewRowData()'>&nbsp;&nbsp;&nbsp;<input type='button' class='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' value='Close' onclick='closeOverlay()'></div>";&#xD;&#xA;      $("#pageOverlay").html(html).show();&#xD;&#xA;      openOverlay();&#xD;&#xA;    });&#xD;&#xA;    function saveNewRowData(){&#xD;&#xA;        var dataEditString = $(".rowEditData").text();&#xD;&#xA;        console.log(dataEditString);&#xD;&#xA;        $.ajax({&#xD;&#xA;            url: "",&#xD;&#xA;            data: data,&#xD;&#xA;            type: "post"&#xD;&#xA;        });&#xD;&#xA;    }