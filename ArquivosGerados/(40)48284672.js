    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>&#xD;&#xA;    &#xD;&#xA;    <button type="button" onclick="myCalculator();" >Click Here to See Animation</button>&#xD;&#xA;        &#xD;&#xA;      <div class="container2" style="display:none;">&#xD;&#xA;       Animating Amount $ <span id="value" ></span>&#xD;&#xA;       </div>&#xD;&#xA;    &#xD;&#xA;      <script>&#xD;&#xA;      function myCalculator() {&#xD;&#xA;    &#xD;&#xA;        $(".container2").show();&#xD;&#xA;        var start = 1000;&#xD;&#xA;        var end = 10000;&#xD;&#xA;    	var duration = 2000;&#xD;&#xA;        animateValue("value", start, end, duration).toLocaleString();&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;        function animateValue(id, start, end, duration) {&#xD;&#xA;        var range = end - start;&#xD;&#xA;        var current = start;&#xD;&#xA;        var increment = end > start? 10 : -10;&#xD;&#xA;        var stepTime = Math.abs(Math.floor(duration / range));&#xD;&#xA;        var obj = document.getElementById(id);&#xD;&#xA;        var timer = setInterval(function() {&#xD;&#xA;            current += increment;&#xD;&#xA;            obj.innerHTML = current;&#xD;&#xA;            if (current == end) {&#xD;&#xA;                clearInterval(timer);&#xD;&#xA;            }&#xD;&#xA;         }, stepTime);&#xD;&#xA;          }&#xD;&#xA;    &#xD;&#xA;        </script>