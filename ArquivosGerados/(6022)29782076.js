    <img src= "photos/0.jpg" id="currentImage"  height="288"/>&#xD;&#xA;    <p> &#xD;&#xA;    <button id= "prev" class="portfolioNavigation">Previous</button>&#xD;&#xA;     <button id= "next" class="portfolioNavigation">Next</button>&#xD;&#xA;     </p>&#xD;&#xA;    <script type= "text/javascript">&#xD;&#xA;       var counter = 0;&#xD;&#xA;       var srcArray = ["photos/0.jpg", "photos/1.jpg", "photos/2.jpg"];&#xD;&#xA;    &#xD;&#xA;    prev.onclick = function(){&#xD;&#xA;            document.getElementById("currentImage").src = srcArray[--counter];&#xD;&#xA;        }&#xD;&#xA;    next.onclick = function(){&#xD;&#xA;            document.getElementById("currentImage").src = srcArray[++counter];&#xD;&#xA;        }&#xD;&#xA;    if(counter <= 0){&#xD;&#xA;            counter = 2;&#xD;&#xA;            document.getElementById("currentImage").src = "photos/2.jpg"&#xD;&#xA;    }&#xD;&#xA;    else if(counter >= 2){&#xD;&#xA;            counter = 0;&#xD;&#xA;            document.getElementById("currentImage").src = "photos/0.jpg"&#xD;&#xA;        }; &#xD;&#xA;    &#xD;&#xA;    </script>