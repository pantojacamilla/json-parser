    var dayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];&#xD;&#xA;    var now = new Date();&#xD;&#xA;    var currentDay = now.getDay(); // return 0 for Sunday, 6 for Saturday&#xD;&#xA;    var result = [];&#xD;&#xA;    var tempDate = new Date(now.getTime());&#xD;&#xA;    tempDate.setDate(now.getDate() - (currentDay + 6) % 7); // now tempDate is previous Monday&#xD;&#xA;    while (tempDate.getDay() != 0) {&#xD;&#xA;      var currentMonth = tempDate.getMonth() + 1;&#xD;&#xA;      if (currentMonth < 10) currentMonth = "0" + currentMonth;&#xD;&#xA;      result.push([tempDate.getDay() - 1, tempDate.getDate() + "-" + currentMonth + "-" + tempDate.getFullYear(), dayString[tempDate.getDay()]]);&#xD;&#xA;      tempDate.setDate(tempDate.getDate() + 1);&#xD;&#xA;    }&#xD;&#xA;    console.log(result);