    <div id="timer">01.14</div>&#xD;&#xA;    <button id="btn2x" onclick="x2a()" style="display: block;">2x</button>&#xD;&#xA;    <button id="btn3x" onclick="x3a()" style="display: block;">3x</button>&#xD;&#xA;    <span id="2x-total">12000</span>&#xD;&#xA;    <span id="3x-total">12000</span>&#xD;&#xA;    <p id="x2p"></p>&#xD;&#xA;    <p id="x3p"></p>&#xD;&#xA;    <script>&#xD;&#xA;        while (1) {&#xD;&#xA;            setInterval(function() {&#xD;&#xA;                var time = document.getElementById("timer").innerHTML;&#xD;&#xA;                var x = time * 1000 - 400;&#xD;&#xA;                setInterval(function() {&#xD;&#xA;                    &#xD;&#xA;                        var x2 = document.getElementById("2x-total").innerHTML;&#xD;&#xA;                        var x3 = document.getElementById("3x-total").innerHTML;&#xD;&#xA;                        if (x2 < 2 * x3) {&#xD;&#xA;                            var evt = document.createEvent("MouseEvents");&#xD;&#xA;                            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);&#xD;&#xA;                            var run = document.getElementById("btn2x");&#xD;&#xA;                            run.dispatchEvent(evt);&#xD;&#xA;                        }&#xD;&#xA;                    &#xD;&#xA;                }, x);&#xD;&#xA;            }, 7000);&#xD;&#xA;        }&#xD;&#xA;        function x2a() {&#xD;&#xA;            document.getElementById("x2p").innerHTML = x2;&#xD;&#xA;        }&#xD;&#xA;        function x3a() {&#xD;&#xA;            document.getElementById("x3p").innerHTML = x3;&#xD;&#xA;        }&#xD;&#xA;    </script>