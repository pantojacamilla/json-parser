        function doGet() {&#xD;&#xA;        return HtmlService.createTemplateFromFile('form.html')&#xD;&#xA;            .evaluate() // evaluate MUST come before setting the Sandbox mode&#xD;&#xA;            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);&#xD;&#xA;        }&#xD;&#xA;      &#xD;&#xA;        function updateForm(){&#xD;&#xA;        // call your form and connect to the drop-down item&#xD;&#xA;        var form = ("https://script.google.com/macros/s/AKfycbz6uGmXfSiXg4lYseeX0IN7Qv_9eM4eN9knUtBm5Co/exec");&#xD;&#xA;       &#xD;&#xA;        var namesList = form.getItemById("890244015").asListItem();&#xD;&#xA;        // identify the sheet where the data resides needed to populate the drop-down&#xD;&#xA;        var ss = SpreadsheetApp.getActive();&#xD;&#xA;        var names = ss.getSheetByName("CHOICES");&#xD;&#xA;        // grab the values in the first column of the sheet - use 2 to skip header row &#xD;&#xA;        var namesValues = names.getRange(2, 16, names.getMaxRows() - 1).getValues();&#xD;&#xA;        var studentNames = [];&#xD;&#xA;        // convert the array ignoring empty cells&#xD;&#xA;        for(var i = 0; i < namesValues.length; i++)    &#xD;&#xA;        if(namesValues[i][0] != "")&#xD;&#xA;          studentNames[i] = namesValues[i][0];&#xD;&#xA;         // populate the drop-down with the array data&#xD;&#xA;         namesList.setChoiceValues(studentNames);&#xD;&#xA;      &#xD;&#xA;         }