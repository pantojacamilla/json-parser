    function checkData() {&#xD;&#xA;      var errorMsg = "",&#xD;&#xA;        fld1 = 0, //Number(document.getElementById('fld1').value),&#xD;&#xA;        fld2 = 5, //Number(document.getElementById('fld2').value),&#xD;&#xA;        fld3 = 1, //Number(document.getElementById('fld3').value),&#xD;&#xA;        fld4 = 0; //Number(document.getElementById('fld4').value);&#xD;&#xA;      if (!fld1) {&#xD;&#xA;        errorMsg += "Error 1\n\n";&#xD;&#xA;      }&#xD;&#xA;      if (fld1 === fld4) {&#xD;&#xA;        errorMsg += "Error 2\n\n";&#xD;&#xA;      }&#xD;&#xA;      if (fld2 > fld4) {&#xD;&#xA;        errorMsg += "Error 3\n\n";&#xD;&#xA;      }&#xD;&#xA;      if (fld3 > 3) {&#xD;&#xA;        errorMsg += "Error 4\n\n";&#xD;&#xA;      }&#xD;&#xA;      if (errorMsg !== "") {&#xD;&#xA;        var check = confirm(errorMsg + "\n Do you want to submit the form?");&#xD;&#xA;        if (check) {&#xD;&#xA;          return true;&#xD;&#xA;        } else {&#xD;&#xA;          return false;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return true;&#xD;&#xA;    }