    <h1> Whats your name ? </h1>&#xD;&#xA;    <form method="POST">&#xD;&#xA;        <input type="text" id="tt" placeholder="Enter Name : ">&#xD;&#xA;        <input type="checkbox" checked>&#xD;&#xA;    </form>&#xD;&#xA;    <button onclick="my">Submit now</button>&#xD;&#xA;    <p id="demo"></p>&#xD;&#xA;    </div>&#xD;&#xA;    </body>&#xD;&#xA;    <script>&#xD;&#xA;    function my(){&#xD;&#xA;         var x = document.getElementById("tt").textContent;&#xD;&#xA;         document.getElementById("demo").innerHTML = x;&#xD;&#xA;    }