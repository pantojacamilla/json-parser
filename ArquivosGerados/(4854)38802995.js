    html,&#xD;&#xA;    body {&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 100%;&#xD;&#xA;      background-color: white;&#xD;&#xA;      overflow: auto;&#xD;&#xA;      font-family: Geneva;&#xD;&#xA;    }&#xD;&#xA;    h1 {&#xD;&#xA;      font-size: 60px;&#xD;&#xA;    }&#xD;&#xA;    h2 {&#xD;&#xA;      font-size: 30px;&#xD;&#xA;    }&#xD;&#xA;    p {&#xD;&#xA;      color: #757575;&#xD;&#xA;      font-family: Geneva;&#xD;&#xA;    }&#xD;&#xA;    /*----- Toggle Button -----*/&#xD;&#xA;    .toggle-nav {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /*----- Menu -----*/&#xD;&#xA;    @media screen and (min-width: 860px) {&#xD;&#xA;      .menu {&#xD;&#xA;        width: 100%;&#xD;&#xA;        padding: 5px 20px;&#xD;&#xA;        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);&#xD;&#xA;        background: white;&#xD;&#xA;        position: fixed;&#xD;&#xA;        z-index: 1;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .menu ul {&#xD;&#xA;      display: inline-block;&#xD;&#xA;    }&#xD;&#xA;    .menu li {&#xD;&#xA;      margin: 0px 50px 0px 0px;&#xD;&#xA;      float: left;&#xD;&#xA;      list-style: none;&#xD;&#xA;      font-size: 17px;&#xD;&#xA;    }&#xD;&#xA;    .menu li:last-child {&#xD;&#xA;      margin-right: 0px;&#xD;&#xA;    }&#xD;&#xA;    .menu a {&#xD;&#xA;      color: black;&#xD;&#xA;      transition: color linear 0.15s;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .menu a:hover,&#xD;&#xA;    .menu .current-item a {&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      color: #46B1C9;&#xD;&#xA;    }&#xD;&#xA;    /*----- Responsive -----*/&#xD;&#xA;    @media screen and (max-width: 1150px) {&#xD;&#xA;      .wrap {&#xD;&#xA;        width: 90%;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media screen and (max-width: 970px) {&#xD;&#xA;      .search-form input {&#xD;&#xA;        width: 120px;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media screen and (max-width: 860px) {&#xD;&#xA;      .menu {&#xD;&#xA;        position: relative;&#xD;&#xA;        display: inline-block;&#xD;&#xA;        position: fixed;&#xD;&#xA;      }&#xD;&#xA;      .menu ul.active {&#xD;&#xA;        display: none;&#xD;&#xA;      }&#xD;&#xA;      .menu ul {&#xD;&#xA;        width: 100%;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 120%;&#xD;&#xA;        left: 0px;&#xD;&#xA;        padding: 10px 18px;&#xD;&#xA;        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);&#xD;&#xA;        border-radius: 3px;&#xD;&#xA;        background: white;&#xD;&#xA;      }&#xD;&#xA;      .menu ul:after {&#xD;&#xA;        width: 0px;&#xD;&#xA;        height: 0px;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0%;&#xD;&#xA;        left: 22px;&#xD;&#xA;        content: '';&#xD;&#xA;        transform: translate(0%, -100%);&#xD;&#xA;        border-left: 7px solid transparent;&#xD;&#xA;        border-right: 7px solid transparent;&#xD;&#xA;        border-bottom: 7px solid #303030;&#xD;&#xA;      }&#xD;&#xA;      .menu li {&#xD;&#xA;        margin: 5px 0px 5px 0px;&#xD;&#xA;        float: none;&#xD;&#xA;        display: block;&#xD;&#xA;      }&#xD;&#xA;      .menu a {&#xD;&#xA;        display: block;&#xD;&#xA;      }&#xD;&#xA;      .toggle-nav {&#xD;&#xA;        padding: 20px;&#xD;&#xA;        float: left;&#xD;&#xA;        display: inline-block;&#xD;&#xA;        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);&#xD;&#xA;        background: white;&#xD;&#xA;        color: #777;&#xD;&#xA;        font-size: 20px;&#xD;&#xA;        transition: color linear 0.15s;&#xD;&#xA;      }&#xD;&#xA;      .toggle-nav:hover,&#xD;&#xA;      .toggle-nav.active {&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        color: #46B1C9;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    #homediv {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      text-align: center;&#xD;&#xA;      max-width: 250px;&#xD;&#xA;      margin-left: 20px;&#xD;&#xA;      margin-right: 20px;&#xD;&#xA;    }&#xD;&#xA;    #mainpager {&#xD;&#xA;      padding-top: 5%;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    #homeimg {&#xD;&#xA;      max-width: 200px;&#xD;&#xA;    }&#xD;&#xA;    .centergalleries {&#xD;&#xA;      display: flex;&#xD;&#xA;      flex-wrap: wrap;&#xD;&#xA;      justify-content: center;&#xD;&#xA;      margin-top: 6%;&#xD;&#xA;    }&#xD;&#xA;    .divsfeature {&#xD;&#xA;      padding-left: 5%;&#xD;&#xA;      padding-top: 20px;&#xD;&#xA;      overflow: auto;&#xD;&#xA;      min-height: 500px;&#xD;&#xA;      background-color: white;&#xD;&#xA;    }&#xD;&#xA;    .alignindiv {&#xD;&#xA;      max-width: 100%;&#xD;&#xA;      display: flex;&#xD;&#xA;      flex-wrap: wrap;&#xD;&#xA;      justify-content: center;&#xD;&#xA;    }&#xD;&#xA;    .textfeat {&#xD;&#xA;      width: 500px;&#xD;&#xA;      max-width: 90%;&#xD;&#xA;      margin-right: 8%;&#xD;&#xA;    }&#xD;&#xA;    .imagefeat {&#xD;&#xA;      width: 600px;&#xD;&#xA;      height: 400px;&#xD;&#xA;      max-width: 90%;&#xD;&#xA;      background-color: white;&#xD;&#xA;      margin-right: 5%;&#xD;&#xA;      margin-top: 30px;&#xD;&#xA;      background: url(http://i.imgur.com/zlEKIw2.jpg) no-repeat center center;&#xD;&#xA;      -webkit-background-size: cover;&#xD;&#xA;      -moz-background-size: cover;&#xD;&#xA;      -o-background-size: cover;&#xD;&#xA;      background-size: cover;&#xD;&#xA;    }&#xD;&#xA;    .positionbtn {&#xD;&#xA;      margin-top: 6%;&#xD;&#xA;      margin-bottom: 6%;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    .btnmenu {&#xD;&#xA;      border-radius: 10px;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      color: #757575;&#xD;&#xA;      position: relative;&#xD;&#xA;      display: inline-block;&#xD;&#xA;      text-align: center;&#xD;&#xA;      padding-left: 50px;&#xD;&#xA;      padding-right: 50px;&#xD;&#xA;      width: 400px;&#xD;&#xA;      max-width: 90%;&#xD;&#xA;    }&#xD;&#xA;    .btnmenu p {&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      line-height: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;    }&#xD;&#xA;    .btnmenu:active {&#xD;&#xA;      transform: translate(0px, 2px);&#xD;&#xA;      -webkit-transform: translate(0px, 2px);&#xD;&#xA;    }&#xD;&#xA;    .blue {&#xD;&#xA;      background-color: transparent;&#xD;&#xA;      border: #757575;&#xD;&#xA;      border-style: solid;&#xD;&#xA;      border-width: 1px;&#xD;&#xA;      transition: background-color linear 0.2s;&#xD;&#xA;    }&#xD;&#xA;    .blue:hover {&#xD;&#xA;      border: #46B1C9;&#xD;&#xA;      border-style: solid;&#xD;&#xA;      border-width: 1px;&#xD;&#xA;      background-color: #46B1C9;&#xD;&#xA;    }&#xD;&#xA;    .blue:hover p {&#xD;&#xA;      color: white;&#xD;&#xA;    }&#xD;&#xA;    .footlign {&#xD;&#xA;      border-top: 1px solid grey;&#xD;&#xA;      opacity: 0.5;&#xD;&#xA;      margin-right: 5%;&#xD;&#xA;      margin-left: 5%;&#xD;&#xA;      margin-top: 20px;&#xD;&#xA;      margin-bottom: 5px;&#xD;&#xA;    }&#xD;&#xA;    .divfooter {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      margin-left: 5%;&#xD;&#xA;      vertical-align: top;&#xD;&#xA;      line-height: 15px;&#xD;&#xA;      margin-bottom: 5%;&#xD;&#xA;    }&#xD;&#xA;    #logo123 {&#xD;&#xA;      max-height: 100px;&#xD;&#xA;      margin-top: 20px;&#xD;&#xA;    }&#xD;&#xA;    #copyright {&#xD;&#xA;      font-size: 12px;&#xD;&#xA;      text-align: center;&#xD;&#xA;      max-width: 100%;&#xD;&#xA;    }