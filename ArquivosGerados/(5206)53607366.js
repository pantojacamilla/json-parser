    document.addEventListener("keypress", function(event) &#xD;&#xA;    {&#xD;&#xA;      if (event.key == "c") &#xD;&#xA;      {&#xD;&#xA;        console.log("C Pressed");&#xD;&#xA;        document.getElementById("btnConvert").click();&#xD;&#xA;      }&#xD;&#xA;      var convertButton = document.getElementById("btnConvert");&#xD;&#xA;      if (event.key == "Backspace") &#xD;&#xA;      {&#xD;&#xA;        console.log("Backspace Pressed");&#xD;&#xA;        var textboxContent = document.getElementById("txtFahrenheit").value;&#xD;&#xA;        if (textboxContent.value == "" || textboxContent.value == "-")&#xD;&#xA;        {&#xD;&#xA;          convertButton.disabled = true;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    })