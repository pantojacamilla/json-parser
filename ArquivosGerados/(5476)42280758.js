    var _validFileExtensions = [".jpg", ".jpeg", ".png"];    &#xD;&#xA;    function Validate(oForm) {&#xD;&#xA;        var arrInputs = oForm.getElementsByTagName("input");&#xD;&#xA;        for (var i = 0; i < arrInputs.length; i++) {&#xD;&#xA;            var oInput = arrInputs[i];&#xD;&#xA;            if (oInput.type == "file") {&#xD;&#xA;                var sFileName = oInput.value;&#xD;&#xA;                if (sFileName.length > 0) {&#xD;&#xA;                    var blnValid = false;&#xD;&#xA;                    for (var j = 0; j < _validFileExtensions.length; j++) {&#xD;&#xA;                        var sCurExtension = _validFileExtensions[j];&#xD;&#xA;                        if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {&#xD;&#xA;                            blnValid = true;&#xD;&#xA;                            break;&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                    &#xD;&#xA;                    if (!blnValid) {&#xD;&#xA;                        alert("Sorry,   " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));&#xD;&#xA;                        return false;&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;      &#xD;&#xA;        return true;&#xD;&#xA;    }