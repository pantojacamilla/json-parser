    function myFunction() {&#xD;&#xA;      var x = document.getElementById("file");&#xD;&#xA;      var textFromFileLoaded = "";&#xD;&#xA;      if (x.value != "") { // text upload&#xD;&#xA;        var file = x.files[0];&#xD;&#xA;        var fileReader = new FileReader();&#xD;&#xA;        fileReader.onload = function(fileLoadedEvent) {&#xD;&#xA;          textFromFileLoaded = fileLoadedEvent.target.result;&#xD;&#xA;        }&#xD;&#xA;        fileReader.readAsText(file, "UTF-8");&#xD;&#xA;      }&#xD;&#xA;      //alert("somth"); //HERE&#xD;&#xA;      document.getElementById("demo").innerHTML = textFromFileLoaded;&#xD;&#xA;      return true;&#xD;&#xA;    }