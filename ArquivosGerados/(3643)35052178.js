            function updateTime() {&#xD;&#xA;              var m_names = new Array("Jan", "Feb", "March",&#xD;&#xA;                "April", "May", "June", "July", "Aug", "Sept",&#xD;&#xA;                "Oct", "Nov", "Dec");&#xD;&#xA;              var now = new Date();&#xD;&#xA;              var date = now.getDate();&#xD;&#xA;              var year = now.getFullYear();&#xD;&#xA;              var month = now.getMonth();&#xD;&#xA;              var currentHoursAP = now.getHours();&#xD;&#xA;              var currentHours = now.getHours();&#xD;&#xA;              var currentMinutes = now.getMinutes();&#xD;&#xA;              var currentSeconds = now.getSeconds();&#xD;&#xA;              // Pad the minutes and seconds with leading zeros, if required&#xD;&#xA;              currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;&#xD;&#xA;              currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;&#xD;&#xA;              // Choose either "AM" or "PM" as appropriate&#xD;&#xA;              var timeOfDay = (currentHours < 12) ? "AM" : "PM";&#xD;&#xA;              // Convert the hours component to 12-hour format if needed&#xD;&#xA;              currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;&#xD;&#xA;              // Convert an hours component of "0" to "12"&#xD;&#xA;              currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;&#xD;&#xA;              // Compose the string for display&#xD;&#xA;              //var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + " / " + currentHoursAP + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;&#xD;&#xA;              var currentTimeString = currentHoursAP + ":" + currentMinutes + " " + timeOfDay;&#xD;&#xA;              //document.getElementById("TimeandDate").value = hour + ":" + minute + " " +"/" + " " + m_names[month] + " " + date + " " + year  ;&#xD;&#xA;              $('#TimeandDate').html("Time:" + currentTimeString + "<br>Date:" + m_names[month] + "/" + date + "/" + year);&#xD;&#xA;              //        $('#Time').text(currentTimeString);&#xD;&#xA;              //        $('#Date').text(m_names[month] + "/" + date + "/" + year);&#xD;&#xA;              return currentTimeString;&#xD;&#xA;            }&#xD;&#xA;            updateTime();&#xD;&#xA;            setInterval(updateTime, 1000); // 5 * 1000 miliseconds&#xD;&#xA;            console.log(updateTime())&#xD;&#xA;            if ((updateTime() == '5:00 PM')) {&#xD;&#xA;              alert(updateTime())&#xD;&#xA;            }