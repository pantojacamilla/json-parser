    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <script src="https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.js"></script>&#xD;&#xA;    <!-- Template HERE -->&#xD;&#xA;    <script id="myTpl" type="template/doT.js">//<![CDATA[&#xD;&#xA;    {{##def.snippet:obj:&#xD;&#xA;      <div>How to use {{=obj.x}}</div>&#xD;&#xA;    #}} &#xD;&#xA;    {{#def.snippet:{"x":it.foo}}}&#xD;&#xA;    // ]]></script>&#xD;&#xA;    <div id="result"></div>&#xD;&#xA;    <div id="error" style="display: none;"></div>