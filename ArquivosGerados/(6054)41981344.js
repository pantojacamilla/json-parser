    <script>&#xD;&#xA;        var modalName = document.getElementById('myModalName');&#xD;&#xA;        // Get the button that opens the modal&#xD;&#xA;        var btn = document.getElementById("input_name");&#xD;&#xA;        // When the user clicks the button, open the modal&#xD;&#xA;        btn.onclick = function() {&#xD;&#xA;            modalName.style.display = "block";&#xD;&#xA;        }&#xD;&#xA;        // When the user clicks anywhere outside of the modal, close it&#xD;&#xA;        window.onclick = function(event) {&#xD;&#xA;            if (event.target == modalName) {&#xD;&#xA;                modalName.style.display = "none";&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        </script>&#xD;&#xA;        <script>&#xD;&#xA;        // Get the modal&#xD;&#xA;        var modalLocation = document.getElementById('myModalLocation');&#xD;&#xA;        // Get the button that opens the modal&#xD;&#xA;        var btn = document.getElementById("input_location");&#xD;&#xA;        // When the user clicks the button, open the modal&#xD;&#xA;        btn.onclick = function() {&#xD;&#xA;            modalLocation.style.display = "block";&#xD;&#xA;        }&#xD;&#xA;        // When the user clicks anywhere outside of the modal, close it&#xD;&#xA;        window.onclick = function(event) {&#xD;&#xA;            if (event.target == modalLocation) {&#xD;&#xA;                modalLocation.style.display = "none";&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        </script>