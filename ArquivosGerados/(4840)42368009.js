    <script>&#xD;&#xA;        var c_selected;&#xD;&#xA;        window.onload = function () {&#xD;&#xA;            document.getElementById("black").addEventListener("click", function () {&#xD;&#xA;                setBackground("black");&#xD;&#xA;            });&#xD;&#xA;            document.getElementById("orange").addEventListener("click", function () {&#xD;&#xA;                setBackground("orange");&#xD;&#xA;            });&#xD;&#xA;            document.getElementById("brown").addEventListener("click", function () {&#xD;&#xA;                setBackground("brown");&#xD;&#xA;            });&#xD;&#xA;        };&#xD;&#xA;        function setBackground(scolor) {&#xD;&#xA;            location.href = (location.href.split("?").length > 1) ? location.href.split("?")[0] + "?color=" + scolor : "?color=" + scolor;&#xD;&#xA;            document.body.style.backgroundColor = scolor&#xD;&#xA;            document.getElementById(scolor).style.border = "thick solid white";&#xD;&#xA;            if (c_selected) {&#xD;&#xA;                document.getElementById(c_selected).style.border = "none";&#xD;&#xA;            }&#xD;&#xA;            document.getElementById("title").style.color = "white";&#xD;&#xA;            <?php $_SESSION['THEME_COLOR'] = isset($_GET['color']) ? $_GET['color'] : "white"; ?>&#xD;&#xA;            c_selected = scolor;&#xD;&#xA;        }&#xD;&#xA;    </script>