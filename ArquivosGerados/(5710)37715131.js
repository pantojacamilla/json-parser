    //Main String&#xD;&#xA;    var string0 = ' ": {"MATHEMATICS": {"status": "start", "can_start": false}, "READING": {"status": "start", "can_start": false}, "WRITING": {"status": "start", "can_start": false" ';&#xD;&#xA;    //Substrings&#xD;&#xA;    var substringArray = ['"MATHEMATICS": {"status": "start"', '"READING": {"status": "start"', '"WRITING": {"status": "start"'];&#xD;&#xA;    //Check if Substrings are found in MainString&#xD;&#xA;    for (l = 0; l < substringArray.length; l++) {&#xD;&#xA;      if (string0.indexOf(substringArray[l]) > -1) {&#xD;&#xA;        logger.info("True");&#xD;&#xA;      } else {&#xD;&#xA;        logger.info("False");&#xD;&#xA;      }&#xD;&#xA;    }