    function validateField(type, name, linenumber) {&#xD;&#xA;      var shipstate = nlapiGetFieldText()&#xD;&#xA;      if (shipstate == 'PA') {&#xD;&#xA;        function recalc(type) {&#xD;&#xA;          if (type == 'item') {&#xD;&#xA;            var itemId = nlapiGetCurrentLineItemValue('item', 'item');&#xD;&#xA;            if (itemId == 1658) {&#xD;&#xA;              //Insert item&#xD;&#xA;              nlapiSelectNewLineItem('item');&#xD;&#xA;              nlapiSetCurrentLineItemValue('item', 'item', 1516);&#xD;&#xA;              nlapiSetCurrentLineItemValue('item', 'quantity', 1);&#xD;&#xA;              nlapiSetCurrentLineItemValue('item', 'amount', '0.24');&#xD;&#xA;              nlapiCommitLineItem('item');&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return true;&#xD;&#xA;    }