    body {&#xD;&#xA;    	margin: 0;&#xD;&#xA;    	padding: 0;&#xD;&#xA;    	background: #fcf8f2;&#xD;&#xA;    }&#xD;&#xA;    .NavBarContainer {&#xD;&#xA;    	position: block;&#xD;&#xA;      clear: both;&#xD;&#xA;    	top: 0;&#xD;&#xA;    	width: 100%;&#xD;&#xA;    	background: #4a535b;&#xD;&#xA;    }&#xD;&#xA;    .NavBar ul {&#xD;&#xA;      list-style: none;&#xD;&#xA;      padding: 0;&#xD;&#xA;      margin: 0;&#xD;&#xA;    }&#xD;&#xA;    .NavBar ul li {&#xD;&#xA;    	display: block;&#xD;&#xA;    	position: relative;&#xD;&#xA;    	float: left;&#xD;&#xA;    }&#xD;&#xA;    .NavBar li ul { display: none; }&#xD;&#xA;    .NavBar ul li a {&#xD;&#xA;    	display: block;&#xD;&#xA;    	padding: 0.6rem;&#xD;&#xA;    	text-decoration: none;&#xD;&#xA;    	white-space: nowrap;&#xD;&#xA;    	color: #fffbf4;&#xD;&#xA;    	font-size:1.2rem;&#xD;&#xA;    	letter-spacing:0.1rem;&#xD;&#xA;    	-webkit-animation: fadeIn 1s;&#xD;&#xA;    	animation: fadeIn 1s;&#xD;&#xA;    }&#xD;&#xA;    .NavBar ul li a:hover { &#xD;&#xA;    	background: #2c3e50; &#xD;&#xA;    	-webkit-transition: background-color 0.5s ease-out;&#xD;&#xA;    	-moz-transition: background-color 0.5s ease-out;&#xD;&#xA;    	-o-transition: background-color 0.5s ease-out;&#xD;&#xA;    	transition: background-color 0.5s ease-out;&#xD;&#xA;    }&#xD;&#xA;    .NavBar li:hover > ul {&#xD;&#xA;    	display: block;&#xD;&#xA;    	position: absolute;&#xD;&#xA;    }&#xD;&#xA;    .NavBar li:hover li { float: none; }&#xD;&#xA;    .NavBar li:hover a { background: #4a535b; }&#xD;&#xA;    .NavBar li:hover li a:hover { background: #2c3e50; }&#xD;&#xA;    .NavBar li ul li { border-top: 0; }&#xD;&#xA;    .NavBar ul ul ul {&#xD;&#xA;    	left: 100%;&#xD;&#xA;      top: 0;&#xD;&#xA;    }&#xD;&#xA;    .NavBar ul:before,&#xD;&#xA;    .NavBar ul:after {&#xD;&#xA;    	content: " "; /* 1 */&#xD;&#xA;    	display: table; /* 2 */&#xD;&#xA;    }&#xD;&#xA;    .NavBar ul:after { clear: both; }&#xD;&#xA;    .MainContainer {&#xD;&#xA;    	background: #fffcf9;&#xD;&#xA;    	margin: auto;&#xD;&#xA;    	width: 80%;&#xD;&#xA;    	border-style:solid;&#xD;&#xA;    	border-width:thin;&#xD;&#xA;    	border-color:#e2e0d9;&#xD;&#xA;    	padding:1rem;&#xD;&#xA;      color: red;&#xD;&#xA;    }