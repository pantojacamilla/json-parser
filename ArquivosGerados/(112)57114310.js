        <div class="element-details-container active">&#xD;&#xA;           <div class="content-module"><input id="details_0__elementType"/></div>&#xD;&#xA;        </div>&#xD;&#xA;        <div class="element-details-container active">&#xD;&#xA;           <div class="content-module"><input id="details_1__elementType"/></div>&#xD;&#xA;        </div>&#xD;&#xA;       <div class="element-details-container">&#xD;&#xA;           <div class="content-module"><input id="details_2__elementType"/></div>&#xD;&#xA;        </div>&#xD;&#xA;        &#xD;&#xA;            var list = $(".element-details-container.active");&#xD;&#xA;            for (var i = 0; i < list.length; i++) &#xD;&#xA;            {&#xD;&#xA;               var $listElement= $(list[i]);&#xD;&#xA;        &#xD;&#xA;               var test = $listElement.children("div.content-module").children("input[id$=elementType]");//Working&#xD;&#xA;        &#xD;&#xA;               var test2 = $listElement.children("div.content-module > input[id$=elementType]");//Not working&#xD;&#xA;        &#xD;&#xA;               var test3 = $listElement.find("div.content-module > input[id$=elementType]");//Working&#xD;&#xA;            }