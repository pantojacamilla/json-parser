    var dates = "08291975"; //passes as it should&#xD;&#xA;    var passed = moment(dates, 'MMDDYYYY', true).isValid();&#xD;&#xA;    console.log('should pass ' + passed); //actual output is 'should pass true'&#xD;&#xA;    dates = "082919751"; //one digit too many should fail but doesnt&#xD;&#xA;    passed = moment(dates, 'MMDDYYYY', true).isValid();&#xD;&#xA;    console.log('should not pass ' + passed); //actual output is 'should not pass true'&#xD;&#xA;    dates = "0829ssss"; //fails as expected&#xD;&#xA;    passed = moment(dates, 'MMDDYYYY', true).isValid();&#xD;&#xA;    console.log('should not pass ' + passed); //actual output is 'should not pass false'&#xD;&#xA;    dates = "0829197"; //one digit short should fail but doesnt&#xD;&#xA;    passed = moment(dates, 'MMDDYYYY', true).isValid();&#xD;&#xA;    console.log('should not pass ' + passed); //actual output is 'should not pass true'