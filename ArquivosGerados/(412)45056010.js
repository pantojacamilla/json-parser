    var sheet = SpreadsheetApp.getActiveSheet();&#xD;&#xA;    function generateFolderTree() {&#xD;&#xA;      sheet.clear();&#xD;&#xA;      sheet.appendRow(["Folder Name", "Rootfolder name", "ID"]);&#xD;&#xA;      var parent = DriveApp.getFoldersByName("Documents by country or issue").next();&#xD;&#xA;      getChildFolders(parent);&#xD;&#xA;    }&#xD;&#xA;    function getChildFolders(parent) {&#xD;&#xA;      var childFolders = parent.getFolders();&#xD;&#xA;      var parentName = parent.getName();&#xD;&#xA;      while (childFolders.hasNext()) {&#xD;&#xA;        var childFolder = childFolders.next();&#xD;&#xA;        fileName = childFolder.getName();&#xD;&#xA;        root = parentName + "/" + fileName;&#xD;&#xA;        fileID = childFolder.getId();&#xD;&#xA;        if (fileName == "Annual Reports") {&#xD;&#xA;          sheet.appendRow([fileName, root, fileID]);&#xD;&#xA;        } else if (fileName == "_Annual Reports") {&#xD;&#xA;          sheet.appendRow([fileName, root, fileID]);&#xD;&#xA;        }