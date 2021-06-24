    function sendReminderEmail() {&#xD;&#xA;    var sheet = SpreadsheetApp.getActiveSheet();&#xD;&#xA;    var startRow = 2;  // First row of data to process&#xD;&#xA;    var numRows = sheet.getLastRow()-1;   // Number of rows to process&#xD;&#xA;    // Fetch the range of cells A2:B3&#xD;&#xA;    var dataRange = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn());&#xD;&#xA;    // Fetch values for each row in the Range.&#xD;&#xA;    var data = dataRange.getValues();&#xD;&#xA;    //Logger.log(data)&#xD;&#xA;    var form = FormApp.openById("1c2dZ29xVJCJD61crpKGkYpryft-Djsz63HJf1Cl4DcY");&#xD;&#xA;    var formResponses = form.getResponses();&#xD;&#xA;    var r = formResponses.length-1;&#xD;&#xA;    var editURL = formResponses[r].getEditResponseUrl();&#xD;&#xA;    //Get the Edit URL&#xD;&#xA;    for (i in data) {&#xD;&#xA;      var row = data[i];&#xD;&#xA;      var date = new Date();&#xD;&#xA;      date.setHours(0);&#xD;&#xA;      date.setMinutes(0);&#xD;&#xA;      date.setSeconds(0);&#xD;&#xA;      //Logger.log(date);&#xD;&#xA;      var sheetDate = new Date(row[13]);&#xD;&#xA;     //Logger.log(sheetDate);&#xD;&#xA;     var Sdate = Utilities.formatDate(date,'GMT+0100','yyyy:MM:dd')&#xD;&#xA;     var SsheetDate = Utilities.formatDate(sheetDate,'GMT+0100', 'yyyy:MM:dd')&#xD;&#xA;         Logger.log(Sdate+' =? '+SsheetDate)&#xD;&#xA;            if (Sdate == SsheetDate){&#xD;&#xA;              var sendTo = row[4];  // Collect email address from the fourth column (number value is always -1).&#xD;&#xA;              var sendMe = "xyzabcloremipsum@gmail.com";  // Enter the email address where you wish to receive a notification about a reminder sent.&#xD;&#xA;              var sendername = "Auto Formbot"; // Name displayed as the sender.&#xD;&#xA;              var myname = "Formbot"; // Name displayed as the sender to you.&#xD;&#xA;              var messageTo = "Based on the data you entered, the '" +row[6] +"' project with the ID: " +row[1] +" has ended.\n\nPlease mark it as 'Completed' and update the details as soon as it's convenient for you.\n\nYou can edit your data by using the following link:\n" +  editURL + "\n\nThank you for your time.\n\n\nWith kind regards,\nFormbot";&#xD;&#xA;              var messageMe = "The '" +row[6] +"' project with the ID: " +row[1] +" has finished today.\n\nA reminder email has been sent to " +row[4] +".\n\nYou can edit the data by using the following link:\n" +  editURL + "\n\n\nSincerely,\nFormbot";&#xD;&#xA;              // Above is the column (number value is always -1) selected for activity name display.&#xD;&#xA;              var subjectTo = "Please update the '" +row[6] +"' activity data.";&#xD;&#xA;              var subjectMe = "An activity has finished today [ID: " +row[1] +"].";&#xD;&#xA;              MailApp.sendEmail(sendTo, subjectTo, messageTo, {name: sendername});&#xD;&#xA;              MailApp.sendEmail(sendMe, subjectMe, messageMe, {name: myname});&#xD;&#xA;                }    &#xD;&#xA;       }&#xD;&#xA;      }