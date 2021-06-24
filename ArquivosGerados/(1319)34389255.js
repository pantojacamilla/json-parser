    /*Some Fonts Here:*/&#xD;&#xA;    @font-face { font-family: Rusty; src: url('BrushScriptStd.otf');}&#xD;&#xA;    * {&#xD;&#xA;    	font-family: Rusty;&#xD;&#xA;    	font-weight: Lighter;&#xD;&#xA;    }&#xD;&#xA;    .background&#xD;&#xA;    {&#xD;&#xA;    	background-image: url(0.jpg);&#xD;&#xA;    	background-attachment: fixed;&#xD;&#xA;    	background-size: 100% auto;&#xD;&#xA;    	background-color: f7f7f7;&#xD;&#xA;    	background-repeat: no-repeat;&#xD;&#xA;    	background-position:absolute;&#xD;&#xA;    }&#xD;&#xA;    .menubar {&#xD;&#xA;      position: relative;&#xD;&#xA;      height: 2.8vw;&#xD;&#xA;      opacity: 0.85;&#xD;&#xA;      background-color: #CCCCCC;&#xD;&#xA;      z-index: 1;&#xD;&#xA;    }&#xD;&#xA;    .clearfix:after {&#xD;&#xA;      display: block;&#xD;&#xA;      clear: both;&#xD;&#xA;    }&#xD;&#xA;    .menu-wrap {&#xD;&#xA;      width: 50%;&#xD;&#xA;      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);&#xD;&#xA;      background: #3e3436;&#xD;&#xA;    }&#xD;&#xA;    .menu {&#xD;&#xA;      width: 100%;&#xD;&#xA;      margin: 0px auto;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    .menu li {&#xD;&#xA;      margin: 0px;&#xD;&#xA;      list-style: none;&#xD;&#xA;      font-family: 'Ek Mukta';&#xD;&#xA;    }&#xD;&#xA;    .menu a {&#xD;&#xA;      transition: all linear 0.15s;&#xD;&#xA;      color: #919191;&#xD;&#xA;    }&#xD;&#xA;    .menu li:hover > a,&#xD;&#xA;    .menu .current-item > a {&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      color: rgba(189, 34, 34, 1);&#xD;&#xA;    }&#xD;&#xA;    .menu .arrow {&#xD;&#xA;      font-size: 0.95vw;&#xD;&#xA;      line-height: 0%;&#xD;&#xA;    }&#xD;&#xA;    .menu > ul > li {&#xD;&#xA;      float: middle;&#xD;&#xA;      display: inline-block;&#xD;&#xA;      position: relative;&#xD;&#xA;      font-size: 1.2vw;&#xD;&#xA;    }&#xD;&#xA;    .menu > ul > li > a {&#xD;&#xA;      padding: 0.7vw 5vh;&#xD;&#xA;      display: inline-block;&#xD;&#xA;      text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);&#xD;&#xA;    }&#xD;&#xA;    .menu > ul > li:hover > a,&#xD;&#xA;    .menu > ul > .current-item > a {&#xD;&#xA;      background: #2e2728;&#xD;&#xA;    }&#xD;&#xA;    .menu li:hover .sub-menu {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu {&#xD;&#xA;      width: 100%;&#xD;&#xA;      padding: 0px 0px;&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: 100%;&#xD;&#xA;      left: 0px;&#xD;&#xA;      display: none;&#xD;&#xA;      transition: opacity linear 5.8s;&#xD;&#xA;      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);&#xD;&#xA;      background: #2e2728;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu li {&#xD;&#xA;      display: block;&#xD;&#xA;      font-size: 1.2vw;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu li a {&#xD;&#xA;      padding: 10px 10px;&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu li a:hover, .sub-menu .current-item a {&#xD;&#xA;      background: #3e3436;&#xD;&#xA;    }&#xD;&#xA;    .Rusty &#xD;&#xA;    {&#xD;&#xA;    	font-family: "Rusty";&#xD;&#xA;    	color: rgba(189, 34, 34, 1);&#xD;&#xA;    }&#xD;&#xA;    .content&#xD;&#xA;    {&#xD;&#xA;    	opacity: .85;&#xD;&#xA;    	position: relative;&#xD;&#xA;    	margin: auto;&#xD;&#xA;        width: 80%;&#xD;&#xA;    	z-index: 0; &#xD;&#xA;        background-color: #CCCCCC;&#xD;&#xA;        padding: 10px;&#xD;&#xA;    	height: 100%;&#xD;&#xA;    }&#xD;&#xA;    .menu > ul > .login &#xD;&#xA;    {&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0;&#xD;&#xA;        right: 0;&#xD;&#xA;    }&#xD;&#xA;    .video-container {&#xD;&#xA;    	position:relative;&#xD;&#xA;    	padding-bottom: 5%;&#xD;&#xA;    	padding-top: 30px;&#xD;&#xA;    	width: 100%;&#xD;&#xA;    	border-bottom: thick solid rgba(189, 34, 34, 1);&#xD;&#xA;    }&#xD;&#xA;    .video-container iframe, .video-container object, .video-container embed {&#xD;&#xA;    	position: relative;&#xD;&#xA;    	top:15%;&#xD;&#xA;    	left:15%;&#xD;&#xA;    	right:15%;&#xD;&#xA;    	width: 25vw;&#xD;&#xA;    	height:25vh;&#xD;&#xA;    }&#xD;&#xA;    .title&#xD;&#xA;    {&#xD;&#xA;    	text-align: center;&#xD;&#xA;    	font-size: 7vh;&#xD;&#xA;    	text-decoration: underline;&#xD;&#xA;    	-moz-text-decoration-color: inherit;&#xD;&#xA;        text-decoration-color: inherit;&#xD;&#xA;    }&#xD;&#xA;    .feed-column&#xD;&#xA;    {&#xD;&#xA;    	width: 50%;&#xD;&#xA;    	height: 100%;&#xD;&#xA;    }&#xD;&#xA;    .border-right&#xD;&#xA;    {&#xD;&#xA;    	border-right: thick solid rgba(189, 34, 34, 1);&#xD;&#xA;    }&#xD;&#xA;    .text-center&#xD;&#xA;    {&#xD;&#xA;    	text-align: center;&#xD;&#xA;    }&#xD;&#xA;    .footer&#xD;&#xA;    {&#xD;&#xA;        background: #CCCCCC;&#xD;&#xA;    	position:fixed;&#xD;&#xA;        bottom:0px;&#xD;&#xA;        height: 50px;&#xD;&#xA;        width: 100%;&#xD;&#xA;    	opacity: .85;&#xD;&#xA;    }