    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <body>    &#xD;&#xA;    <form>&#xD;&#xA;        Please enter a string:<br>&#xD;&#xA;        <input type="text" name="str" id="pform" onchange="return checkpalin()"><br>&#xD;&#xA;    </form>&#xD;&#xA;    <p id="demo"></p>&#xD;&#xA;    <script type="text/javascript">&#xD;&#xA;        function palindrome(str)&#xD;&#xA;        {&#xD;&#xA;            var str1 = str.split("");&#xD;&#xA;            var str2 = str1.reverse();&#xD;&#xA;            var str3 = str2.join("");&#xD;&#xA;            return str3;&#xD;&#xA;        }&#xD;&#xA;        function checkpalin()&#xD;&#xA;        {&#xD;&#xA;            var x = document.getElementById("pform").value;&#xD;&#xA;            var st = palindrome(x);&#xD;&#xA;            var flag=st.localeCompare(x);&#xD;&#xA;            if(flag===0)&#xD;&#xA;                document.getElementById('demo').innerHTML = "Given number  is a palindrome";&#xD;&#xA;            else&#xD;&#xA;                document.getElementById('demo').innerHTML = "Not palindrome";&#xD;&#xA;            return false;&#xD;&#xA;        }        &#xD;&#xA;    </script>    &#xD;&#xA;    </body>&#xD;&#xA;    </html> 