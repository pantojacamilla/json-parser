    function displayCalendar(){&#xD;&#xA;        var htmlContent ="";&#xD;&#xA;        var FebNumberOfDays ="";&#xD;&#xA;        var counter = 1;&#xD;&#xA;        var calCon = "";&#xD;&#xA;        var dateNow = new Date();&#xD;&#xA;        var month = dateNow.getMonth();&#xD;&#xA;        var nextMonth = month+1;&#xD;&#xA;        var prevMonth = month -1;&#xD;&#xA;        var day = dateNow.getDate();&#xD;&#xA;        var year = dateNow.getFullYear();&#xD;&#xA;        if (month == 1){&#xD;&#xA;        if ( (year%100!=0) && (year%4==0) || (year%400==0)){&#xD;&#xA;        FebNumberOfDays = 29;&#xD;&#xA;        }else{&#xD;&#xA;        FebNumberOfDays = 28;&#xD;&#xA;        }&#xD;&#xA;        }&#xD;&#xA;        var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];&#xD;&#xA;        var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];&#xD;&#xA;        var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]&#xD;&#xA;        var nextDate = new Date(nextMonth +' 1 ,'+year);&#xD;&#xA;        var weekdays= nextDate.getDay();&#xD;&#xA;        var weekdays2 = weekdays&#xD;&#xA;        var numOfDays = dayPerMonth[month];&#xD;&#xA;        while (weekdays>0){&#xD;&#xA;        htmlContent += "<td class='monthPre'></td>";&#xD;&#xA;        weekdays--;&#xD;&#xA;        }&#xD;&#xA;        while (counter <= numOfDays){&#xD;&#xA;        if (weekdays2 > 6){&#xD;&#xA;        weekdays2 = 0;&#xD;&#xA;        htmlContent += "</tr><tr>";&#xD;&#xA;        }&#xD;&#xA;        if (counter == day){&#xD;&#xA;        htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+&#xD;&#xA;        "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";&#xD;&#xA;        }else{&#xD;&#xA;        htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+&#xD;&#xA;        " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";    &#xD;&#xA;        }&#xD;&#xA;        weekdays2++;&#xD;&#xA;        counter++;&#xD;&#xA;        }&#xD;&#xA;        // This Code Doesn't Work&#xD;&#xA;        var calCon = "<div id='hide'>"&#xD;&#xA;        +monthNames[month]+" "+ year +"";&#xD;&#xA;        calCon +="<label>";&#xD;&#xA;        calCon += "<input id='files' type='file' />";&#xD;&#xA;        calCon += "<span class='fa fa-plus'></span>";&#xD;&#xA;        calCon += "</label>";&#xD;&#xA;        calCon += "<output class='img-responsive' id='result'/>";&#xD;&#xA;        calCon += calCon;&#xD;&#xA;        calCon += "</div>";&#xD;&#xA;        document.getElementById("calendar").innerHTML=calCon;&#xD;&#xA;        var calendarBody = "<table class='calendar'> <tr class='monthNow'>"&#xD;&#xA;        +monthNames[month]+" "+ year +"</tr>";&#xD;&#xA;        calendarBody +="<tr class='dayNames'><td>Sun</td><td>Mon</td><td>Tues</td>"+&#xD;&#xA;        "<td>Wed</td><td>Thurs</td><td>Fri</td> <td>Sat</td> </tr>";&#xD;&#xA;        calendarBody += "<tr>";&#xD;&#xA;        calendarBody += htmlContent;&#xD;&#xA;        calendarBody += "</tr></table>";&#xD;&#xA;        document.getElementById("calendar").innerHTML=calendarBody;&#xD;&#xA;        }