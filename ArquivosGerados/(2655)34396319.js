    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;    <title>Page Title</title>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA; &#xD;&#xA;      <input type="date" id="mydate">&#xD;&#xA;      <script>&#xD;&#xA;        document.getElementById('mydate').onchange = function () {&#xD;&#xA;            var selectedDateFromCalendar = this.value;&#xD;&#xA;            var currentdate = new Date();&#xD;&#xA;            var Diff = new Date(selectedDateFromCalendar) - currentdate;&#xD;&#xA;            var diffDays = Math.ceil(Diff / (1000 * 3600 * 24));&#xD;&#xA;            if ((selectedDateFromCalendar) - currentdate < 0) {&#xD;&#xA;                alert("out of date");&#xD;&#xA;            }&#xD;&#xA;            else if ((selectedDateFromCalendar) - currentdate == 0) {&#xD;&#xA;                alert("last day of the event");&#xD;&#xA;            }&#xD;&#xA;            else if ((selectedDateFromCalendar) - currentdate >= 1) {&#xD;&#xA;                alert("last " + diffDays + " day");&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    </script>&#xD;&#xA;    </body>  &#xD;&#xA;    </html>