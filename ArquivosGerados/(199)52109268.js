            <div class="row">&#xD;&#xA;    	<div class="column">&#xD;&#xA;        <img id="myImg" src="image.gif" alt="img" text-align="center" style="width:100%"><br>&#xD;&#xA;    </div>&#xD;&#xA;    	<div class="column">&#xD;&#xA;        <img id="myImg" src="image2.gif" alt="image2" text-align="center" style="width:100%"><br>&#xD;&#xA;    </div>&#xD;&#xA;    </div>&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    <!-- The Modal -->&#xD;&#xA;    <div id="myModal" class="modal">&#xD;&#xA;      <span class="close">&times;</span>&#xD;&#xA;      <img class="modal-content" id="img01">&#xD;&#xA;      <div id="caption"></div>&#xD;&#xA;    </div>&#xD;&#xA;    &#xD;&#xA;    <script>&#xD;&#xA;    // Get the modal&#xD;&#xA;    var modal = document.getElementById('myModal');&#xD;&#xA;    &#xD;&#xA;    // Get the image and insert it inside the modal - use its "alt" text as a caption&#xD;&#xA;    var img = document.getElementById("myImg");&#xD;&#xA;    var modalImg = document.getElementById("img01");&#xD;&#xA;    var captionText = document.getElementById("caption");&#xD;&#xA;    img.onclick = function(){&#xD;&#xA;        modal.style.display = "block";&#xD;&#xA;        modalImg.src = this.src;&#xD;&#xA;        captionText.innerHTML = this.alt;&#xD;&#xA;     }&#xD;&#xA;    &#xD;&#xA;    // Get the <span> element that closes the modal&#xD;&#xA;    var span = document.getElementsByClassName("close")[0];&#xD;&#xA;    &#xD;&#xA;    // When the user clicks on <span> (x), close the modal&#xD;&#xA;    span.onclick = function() { &#xD;&#xA;        modal.style.display = "none";&#xD;&#xA;    }&#xD;&#xA;    </script>