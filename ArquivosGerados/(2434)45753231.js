    html:&#xD;&#xA;	    <div class="imageDisplay">&#xD;&#xA;		    <p>Description</p>&#xD;&#xA;		    <img class="Image"></img>&#xD;&#xA;		    <img class="Image"></img>&#xD;&#xA;	    </div>&#xD;&#xA;    js:&#xD;&#xA;	    var imgIndex = 0;&#xD;&#xA;	    setInterval(function() {&#xD;&#xA;	 	    images[imgIndex].style.display = "none";&#xD;&#xA;	 	    imgIndex++;&#xD;&#xA;		    if (imgIndex >= images.length) {&#xD;&#xA;		 	    imgIndex = 0;&#xD;&#xA;		    }&#xD;&#xA;		    images[imgIndex].style.display = "block";&#xD;&#xA;	    },5000);&#xD;&#xA;    css:&#xD;&#xA;	    .imageDisplay {&#xD;&#xA;		    display: inline-block;&#xD;&#xA;		    width: 100%;&#xD;&#xA;		    background-Color: white;&#xD;&#xA;		    color: black;&#xD;&#xA;		    border-radius: 5%;&#xD;&#xA;		    margin: 2px;&#xD;&#xA;		    padding: 1px;&#xD;&#xA;		    opacity: 0.5;&#xD;&#xA;		    transition-duration: 0.5s;&#xD;&#xA;	    }&#xD;&#xA;	    .imageDisplay:hover {&#xD;&#xA;		    opacity: 1;&#xD;&#xA;	    }&#xD;&#xA;	   .Image {&#xD;&#xA;		    width: 99%;&#xD;&#xA;		    height: auto;&#xD;&#xA;		    margin: 1px;&#xD;&#xA;		    padding: 1px;&#xD;&#xA;		    border-radius: 5%;&#xD;&#xA;		    cursor: pointer;&#xD;&#xA;		    display: none;&#xD;&#xA;	    }