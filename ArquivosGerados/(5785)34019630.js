    <head>&#xD;&#xA;    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <script type="text/javascript">&#xD;&#xA;    	function Display_level2(form) {&#xD;&#xA;          i = form.select_name.selectedIndex; &#xD;&#xA;        switch(i) {&#xD;&#xA;        case 0 : return; break;&#xD;&#xA;        case 1 : document.getElementById("Level2").innerHTML='<li class="has-sub"><a href="#"><span>Product A I-1</span></a><ul><li><a href="#"><span>Product A I-1-1</span></a></li><li><a href="#"><span>Product A I-1-2</span></a></li></ul></li><li><a href="#"><span>Product A I-2</span></a></li>'; break;&#xD;&#xA;         case 2 : document.getElementById("Level2").innerHTML='<li class="has-sub"><a href="#"><span>Product B I-1</span></a><ul><li><a href="#"><span>Product B I-1-1</span></a></li><li><a href="#"><span>Product B I-1-2</span></a></li></ul></li><li><a href="#"><span>Product B I-2</span></a></li>'; break;&#xD;&#xA;        }&#xD;&#xA;       }&#xD;&#xA;    			    </script>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;    <div id='cssmenu' style="vertical-align: top;">&#xD;&#xA;    <ul>&#xD;&#xA;    <li class='active'><a href='#'><span>Menu</span></a></li>&#xD;&#xA;       <li class='active has-sub'><a href='#'><span>Products I</span></a>&#xD;&#xA;           <form><li>&#xD;&#xA;           <select style="width: 200px;" id="select" name="select_name" onchange="Display_level2(this.form)">&#xD;&#xA;    	     <option>- select -</option>&#xD;&#xA;    		 <option>A</option>&#xD;&#xA;             <option>B</option>&#xD;&#xA;               </select></li>&#xD;&#xA;           </form>&#xD;&#xA;    		 <ul id="Level2"></ul>&#xD;&#xA;       </li>    &#xD;&#xA;    <li class="has-sub"><a href='#'><span>Products II</span></a>&#xD;&#xA;             <ul><li class="has-sub"><a href="#"><span>Products II-1</span></a>&#xD;&#xA;    		        <ul><li><a href="#"><span>Products II-1-1</span></a></li>&#xD;&#xA;    			        <li><a href="#"><span>Products II-1-2</span></a></li>&#xD;&#xA;    		        </ul>&#xD;&#xA;    	         </li>&#xD;&#xA;                 <li><a href='#'><span>Products II-2</span></a></li>&#xD;&#xA;             </ul>&#xD;&#xA;       </li>&#xD;&#xA;    </ul>&#xD;&#xA;    </div>&#xD;&#xA;    </body>