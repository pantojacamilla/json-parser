    <html>&#xD;&#xA;    &#xD;&#xA;    <head>&#xD;&#xA;        <title>hw18</title>&#xD;&#xA;        <style type="text/css">&#xD;&#xA;            @font-face {&#xD;&#xA;                font-family: "DOTMBold";&#xD;&#xA;                src: url("DOTMBold.TTF");&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            @font-face {&#xD;&#xA;                font-family: "LLPIXEL3";&#xD;&#xA;                src: url("LLPIXEL3.ttf");&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            @font-face {&#xD;&#xA;                font-family: "Technology";&#xD;&#xA;                src: url("Technology.ttf");&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            @font-face {&#xD;&#xA;                font-family: "The Led Display St";&#xD;&#xA;                src: url("The Led Display St.ttf");&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            #clock1 {&#xD;&#xA;                font-family: "Calculator";&#xD;&#xA;                font-size: 70px;&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            #clock2 {&#xD;&#xA;                font-family: "DOTMBold";&#xD;&#xA;                font-size: 70px;&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            #clock3 {&#xD;&#xA;                font-family: "LLPIXEL3";&#xD;&#xA;                font-size: 70px;&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            #clock4 {&#xD;&#xA;                font-family: "Technology";&#xD;&#xA;                font-size: 70px;&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            #clock5 {&#xD;&#xA;                font-family: "The Led Display St";&#xD;&#xA;                font-size: 70px;&#xD;&#xA;            }&#xD;&#xA;        </style>&#xD;&#xA;    </head>&#xD;&#xA;    &#xD;&#xA;    <body>&#xD;&#xA;    &#xD;&#xA;        <div id="clock1"><span class="time"></span></div>&#xD;&#xA;        <div id="clock2"><span class="time"></span></div>&#xD;&#xA;        <div id="clock3"><span class="time"></span></div>&#xD;&#xA;        <div id="clock4"><span class="time"></span></div>&#xD;&#xA;        <div id="clock5"><span class="time"></span></div>&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;        <script type="text/javascript">&#xD;&#xA;            var today = new Date();&#xD;&#xA;            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();&#xD;&#xA;            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();&#xD;&#xA;            var dateTime = date;&#xD;&#xA;    &#xD;&#xA;            setInterval(function() {&#xD;&#xA;                document.getElementById('clock1').innerHTML = dateTime;&#xD;&#xA;                document.getElementById('clock2').innerHTML = dateTime;&#xD;&#xA;                document.getElementById('clock3').innerHTML = dateTime;&#xD;&#xA;                document.getElementById('clock4').innerHTML = dateTime;&#xD;&#xA;                document.getElementById('clock5').innerHTML = dateTime;&#xD;&#xA;            }, 1000)&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;            var span = document.getElementsByClassName('time');&#xD;&#xA;    &#xD;&#xA;            function time() {&#xD;&#xA;                var d = new Date();&#xD;&#xA;                var s = d.getSeconds();&#xD;&#xA;                var m = d.getMinutes();&#xD;&#xA;                var h = d.getHours();&#xD;&#xA;                span.textContent = h + ":" + m + ":" + s;&#xD;&#xA;            }&#xD;&#xA;    &#xD;&#xA;            setInterval(time, 1000);&#xD;&#xA;        </script>&#xD;&#xA;    </body>&#xD;&#xA;    &#xD;&#xA;    </html>