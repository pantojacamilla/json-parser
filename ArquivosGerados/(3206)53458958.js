    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;    <meta name="viewport" content="width=device-width, initial-scale=1">&#xD;&#xA;    <style>&#xD;&#xA;    /* Center the loader */&#xD;&#xA;    #loader {&#xD;&#xA;      position: absolute;&#xD;&#xA;      left: 50%;&#xD;&#xA;      top: 50%;&#xD;&#xA;      z-index: 1;&#xD;&#xA;      width: 150px;&#xD;&#xA;      height: 150px;&#xD;&#xA;      margin: -75px 0 0 -75px;&#xD;&#xA;      border: 16px solid #f3f3f3;&#xD;&#xA;      border-radius: 50%;&#xD;&#xA;      border-top: 16px solid #3498db;&#xD;&#xA;      width: 120px;&#xD;&#xA;      height: 120px;&#xD;&#xA;      -webkit-animation: spin 2s linear infinite;&#xD;&#xA;      animation: spin 2s linear infinite;&#xD;&#xA;    }&#xD;&#xA;    @-webkit-keyframes spin {&#xD;&#xA;      0% { -webkit-transform: rotate(0deg); }&#xD;&#xA;      100% { -webkit-transform: rotate(360deg); }&#xD;&#xA;    }&#xD;&#xA;    @keyframes spin {&#xD;&#xA;      0% { transform: rotate(0deg); }&#xD;&#xA;      100% { transform: rotate(360deg); }&#xD;&#xA;    }&#xD;&#xA;    /* Add animation to "page content" */&#xD;&#xA;    .animate-bottom {&#xD;&#xA;      position: relative;&#xD;&#xA;      -webkit-animation-name: animatebottom;&#xD;&#xA;      -webkit-animation-duration: 1s;&#xD;&#xA;      animation-name: animatebottom;&#xD;&#xA;      animation-duration: 1s&#xD;&#xA;    }&#xD;&#xA;    @-webkit-keyframes animatebottom {&#xD;&#xA;      from { bottom:-100px; opacity:0 } &#xD;&#xA;      to { bottom:0px; opacity:1 }&#xD;&#xA;    }&#xD;&#xA;    @keyframes animatebottom { &#xD;&#xA;      from{ bottom:-100px; opacity:0 } &#xD;&#xA;      to{ bottom:0; opacity:1 }&#xD;&#xA;    }&#xD;&#xA;    #myDiv {&#xD;&#xA;      display: none;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    </style>&#xD;&#xA;    </head>&#xD;&#xA;    <body onload="" style="margin:0;">&#xD;&#xA;    <div id="app">&#xD;&#xA;    <div id="loader"></div>&#xD;&#xA;    <div style="display:none;" id="myDiv" class="animate-bottom">&#xD;&#xA;      <h2>Tada!</h2>&#xD;&#xA;      <p>Some text in my newly loaded page..</p>&#xD;&#xA;    </div>&#xD;&#xA;    	</div>&#xD;&#xA;    <script src="https://unpkg.com/vue/dist/vue.js"></script>&#xD;&#xA;    	<script src="test.js"></script>&#xD;&#xA;    </body>&#xD;&#xA;    </html>