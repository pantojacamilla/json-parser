    function demoHtmlServices() {&#xD;&#xA;      var ss = SpreadsheetApp.getActiveSpreadsheet(),&#xD;&#xA;          html = HtmlService.createHtmlOutputFromFile('Index').setWidth(200).setHeight(550);&#xD;&#xA;      ss.show(html);&#xD;&#xA;    }&#xD;&#xA;    //getValuesFromForm&#xD;&#xA;    function getValuesFromForm(form){&#xD;&#xA;      var NrItem = form.NrItem,&#xD;&#xA;          date = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");&#xD;&#xA;          sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();&#xD;&#xA;      sheet.appendRow([date, NrItem]);&#xD;&#xA;        &#xD;&#xA;      &#xD;&#xA;      }