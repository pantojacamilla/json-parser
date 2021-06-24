    /*&#xD;&#xA;    Fonts used in this site&#xD;&#xA;    font-family: 'Indie Flower', cursive;&#xD;&#xA;    font-family: 'Petit Formal Script', cursive;&#xD;&#xA;    font-family: 'Raleway', sans-serif;&#xD;&#xA;    font-family: 'Farsan', cursive;&#xD;&#xA;    font-family: 'Oleo Script', cursive;&#xD;&#xA;    font-family: 'Yeseva One', cursive;&#xD;&#xA;    */&#xD;&#xA;    &#xD;&#xA;    /* CSS custom properties (variables) */&#xD;&#xA;    :root {&#xD;&#xA;    	--orange: #F9A828;&#xD;&#xA;    	--lightGrey: #ECECEB;&#xD;&#xA;    	--teal: #07617D;&#xD;&#xA;    	--darkGreyBlue: #2E383F;&#xD;&#xA;    	--darkGreyBlueTint: #718A9B;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    * {&#xD;&#xA;    	margin: 0px;&#xD;&#xA;    	padding: 0;&#xD;&#xA;    	border: none;&#xD;&#xA;    	font-size: 1em;&#xD;&#xA;    	/*border: 1px red solid;*/&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .hidden {&#xD;&#xA;    	display: none;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Navigation Area ---------*/&#xD;&#xA;    body nav {&#xD;&#xA;    	height: 5vh;&#xD;&#xA;    	width: 100%;&#xD;&#xA;    	font-family: 'Raleway', sans-serif;&#xD;&#xA;    	position: fixed;&#xD;&#xA;    	background-color: var(--darkGreyBlue);&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    	z-index: 10;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .nav-active {&#xD;&#xA;    	color: var(--orange) !important;&#xD;&#xA;    	height: 5vh;&#xD;&#xA;    	/*border-width: 0;&#xD;&#xA;    	padding: 0 10px;&#xD;&#xA;    	float: right;*/&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Navigation Branding Area ---------*/&#xD;&#xA;    .branding {&#xD;&#xA;    	line-height: 5vh;&#xD;&#xA;    	float: left;&#xD;&#xA;    	height: 5vh;&#xD;&#xA;    	padding-left: 5%;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .branding i {&#xD;&#xA;    	float: left;&#xD;&#xA;    	padding-top: 1.6vh;&#xD;&#xA;    	color: var(--orange);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .branding div {&#xD;&#xA;    	display: inline;&#xD;&#xA;    	padding-left: 5px;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Navigation Links Area ---------*/&#xD;&#xA;    .navLinks {&#xD;&#xA;    	padding-right: 5%;&#xD;&#xA;    	float: right;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .navLinks a {&#xD;&#xA;    	line-height: 5vh;&#xD;&#xA;    	float: none;&#xD;&#xA;        color: var(--lightGrey);&#xD;&#xA;        padding: 0px 10px;&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        display: inline-block;&#xD;&#xA;        text-align: left;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    .dropdown {&#xD;&#xA;    	float: right;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .dropdown .dropbtn {&#xD;&#xA;        border: none;&#xD;&#xA;        outline: none;&#xD;&#xA;        color: var(--lightGrey);&#xD;&#xA;        line-height: 5vh;&#xD;&#xA;        text-align: left;&#xD;&#xA;        background-color: inherit;&#xD;&#xA;        min-width: 75px;&#xD;&#xA;        padding: 0 10px;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .dropdown-content {&#xD;&#xA;        display: none;&#xD;&#xA;        position: absolute;&#xD;&#xA;        background-color: #f9f9f9;&#xD;&#xA;        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);&#xD;&#xA;        z-index: 1;&#xD;&#xA;    &#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .dropdown-content a {&#xD;&#xA;        float: none;&#xD;&#xA;        color: var(--orange);&#xD;&#xA;        padding: 0px 10px;&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        display: block;&#xD;&#xA;        text-align: left;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .dropdown-content a:hover {&#xD;&#xA;        background-color: var(--darkGreyBlue);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .dropdown:hover .dropdown-content {&#xD;&#xA;        display: block;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .dropdown a {&#xD;&#xA;    	float: none;&#xD;&#xA;    	height: 5vh;&#xD;&#xA;    	line-height: 5vh;&#xD;&#xA;    	text-decoration: none;&#xD;&#xA;    	background-color: var(--darkGreyBlue);&#xD;&#xA;    	border-width: 0;&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    	padding: 0 10px;&#xD;&#xA;    	&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .navLinks a:hover, .dropdown:hover .dropbtn {&#xD;&#xA;    	color: var(--orange);&#xD;&#xA;    	/*color: var(--darkGreyBlue);*/&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Splashscreen Area ---------*/&#xD;&#xA;    body div.splashScreen {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--darkGreyBlueTint);&#xD;&#xA;    	font-family: 'Raleway', sans-serif;&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    	text-align: center;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.splashScreen div.splashText {&#xD;&#xA;    	position: relative;&#xD;&#xA;        top: 50%; &#xD;&#xA;        transform: translateY(-50%);&#xD;&#xA;        -webkit-transform: translateY(-50%);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.splashScreen div.splashText h1 {&#xD;&#xA;    	font-family: 'Oleo Script', cursive;&#xD;&#xA;    	font-size: 7em;&#xD;&#xA;    	padding-bottom: 10px;&#xD;&#xA;    &#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.splashScreen div.splashText a button {&#xD;&#xA;    	font-size: 2em;&#xD;&#xA;    	font-family: 'Raleway', sans-serif;&#xD;&#xA;    	padding: 5px 10px;&#xD;&#xA;    	background-color: var(--darkGreyBlueTint);&#xD;&#xA;    	border-radius: 20px;&#xD;&#xA;    	border: 1px solid var(--lightGrey);&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    	transition: all 0.5s ease-in;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.splashScreen div.splashText a button:hover {&#xD;&#xA;    	font-size: 2em;&#xD;&#xA;    	font-family: 'Raleway', sans-serif;&#xD;&#xA;    	padding: 5px 10px;&#xD;&#xA;    	background-color: var(--lightGrey);&#xD;&#xA;    	border-radius: 20px;&#xD;&#xA;    	border: 1px solid var(--darkGreyBlueTint);&#xD;&#xA;    	color: var(--darkGreyBlueTint);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.splashScreen div.splashText a button:active {&#xD;&#xA;    	font-size: 2em;&#xD;&#xA;    	font-family: 'Raleway', sans-serif;&#xD;&#xA;    	padding: 5px 10px;&#xD;&#xA;    	background-color: var(--darkGreyBlueTint);&#xD;&#xA;    	border-radius: 20px;&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- About Area ---------*/&#xD;&#xA;    body div.aboutPage {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--lightGrey);&#xD;&#xA;    	font-family: 'Indie Flower', cursive;&#xD;&#xA;    	font-size: 300;&#xD;&#xA;    	color: var(--darkGreyBlue);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.aboutPage header {&#xD;&#xA;    	padding-top: 7vh;&#xD;&#xA;    	width: 90%;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Experience Area ---------*/&#xD;&#xA;    body div.experiencePage {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--darkGreyBlueTint);&#xD;&#xA;    	font-family: 'Indie Flower', cursive;&#xD;&#xA;    	font-size: 300;&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.experiencePage header {&#xD;&#xA;    	padding-top: 7vh;&#xD;&#xA;    	width: 90%;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Skills Area ---------*/&#xD;&#xA;    body div.skillsPage {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--lightGrey);&#xD;&#xA;    	font-family: 'Indie Flower', cursive;&#xD;&#xA;    	font-size: 300;&#xD;&#xA;    	color: var(--darkGreyBlue);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.skillsPage header {&#xD;&#xA;    	padding-top: 7vh;&#xD;&#xA;    	width: 90%;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Portfolio Area ---------*/&#xD;&#xA;    body div.portfolioPage {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--darkGreyBlueTint);&#xD;&#xA;    	font-family: 'Indie Flower', cursive;&#xD;&#xA;    	font-size: 300;&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.portfolioPage header {&#xD;&#xA;    	padding-top: 7vh;&#xD;&#xA;    	width: 90%;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Photography Area ---------*/&#xD;&#xA;    body div.photographyPage {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--lightGrey);&#xD;&#xA;    	font-family: 'Indie Flower', cursive;&#xD;&#xA;    	font-size: 300;&#xD;&#xA;    	color: var(--darkGreyBlue);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.photographyPage header {&#xD;&#xA;    	padding-top: 7vh;&#xD;&#xA;    	width: 90%;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    /*--------- Favourites Area ---------*/&#xD;&#xA;    body div.favouritesPage {&#xD;&#xA;    	height: 100vh;&#xD;&#xA;    	background-color: var(--darkGreyBlueTint);&#xD;&#xA;    	font-family: 'Indie Flower', cursive;&#xD;&#xA;    	font-size: 300;&#xD;&#xA;    	color: var(--lightGrey);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    body div.favouritesPage header {&#xD;&#xA;    	padding-top: 7vh;&#xD;&#xA;    	width: 90%;&#xD;&#xA;    	margin: 0 auto;&#xD;&#xA;    }