    In the main html:&#xD;&#xA;    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>&#xD;&#xA;    <div id="content">&#xD;&#xA;     <div id="animation"></div>​&#xD;&#xA;     <script>&#xD;&#xA;           $("#animation").html('<object data="./animation/animation.htm">');&#xD;&#xA;     </script>&#xD;&#xA;     <div id="animation2"></div>​&#xD;&#xA;     <script>&#xD;&#xA;           $("#animation2").html('<object data="./animation/animation2.htm">');&#xD;&#xA;     </script>&#xD;&#xA;    </div>&#xD;&#xA;    And the animations witch i load into te main html:&#xD;&#xA;    <head>&#xD;&#xA;     		<link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet"> &#xD;&#xA;     		<link rel="stylesheet" href="animate.css" charset="utf-8" />&#xD;&#xA;     		<link rel="stylesheet" href="animation.css" charset="utf-8" />&#xD;&#xA;     		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>&#xD;&#xA;     		<script src="jquery.lettering.js"></script>&#xD;&#xA;     		<script src="jquery.fittext.js"></script>&#xD;&#xA;     		<script src="jquery.textillate.js"></script>&#xD;&#xA;     		&#xD;&#xA;     		&#xD;&#xA;    </head>&#xD;&#xA;     	&#xD;&#xA;     <body>&#xD;&#xA;     <h1 class="tlt">Hello to my website and welcome</h1>&#xD;&#xA;    <script>&#xD;&#xA;    $('.tlt').textillate({ &#xD;&#xA;      in: { effect: 'splat' },&#xD;&#xA;      out: { effect:'hinge', sync: true },&#xD;&#xA;      loop: true&#xD;&#xA;    });&#xD;&#xA;    </script>&#xD;&#xA;     </body>&#xD;&#xA;    The second animation looks almost same.