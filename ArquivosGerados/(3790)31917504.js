    	$("aside .img-container").each(function(){&#xD;&#xA;			if ( $(this).find("img").offset().top >= 0 ) {&#xD;&#xA;				// if image has margin-top make it height 100%&#xD;&#xA;				$(this).addClass("full_height");				&#xD;&#xA;			}&#xD;&#xA;			else {&#xD;&#xA;				$(this).removeClass("full_height");&#xD;&#xA;			}&#xD;&#xA;			&#xD;&#xA;			if ( $(this).find("img").offset().left > 0 ) {&#xD;&#xA;				$(this).removeClass("full_height");&#xD;&#xA;			}&#xD;&#xA;		})&#xD;&#xA;    ///////////////////////////////////////&#xD;&#xA;    aside .img-container {&#xD;&#xA;         position: relative;&#xD;&#xA;         width: 25%;&#xD;&#xA;         height: 0;&#xD;&#xA;         padding-bottom: 25%;&#xD;&#xA;         display: inline-block;&#xD;&#xA;         float: left;&#xD;&#xA;    }&#xD;&#xA;    aside .img-container img {&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0;&#xD;&#xA;        right: 0;&#xD;&#xA;        bottom: 0;&#xD;&#xA;        left: 0;&#xD;&#xA;    &#xD;&#xA;        width: 100%;&#xD;&#xA;        margin: auto;&#xD;&#xA;    }&#xD;&#xA;    aside .full_height img {&#xD;&#xA;        width: auto !important;&#xD;&#xA;        height: 100% !important;&#xD;&#xA;    }&#xD;&#xA;    ///////////////////////////////////////&#xD;&#xA;    &#xD;&#xA;    <aside>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="img-container">&#xD;&#xA;             <img src="example1.jpg" alt="" title="">&#xD;&#xA;        </div>&#xD;&#xA;    </aside>