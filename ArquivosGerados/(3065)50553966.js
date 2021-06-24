    nav {&#xD;&#xA;      height: 60px;&#xD;&#xA;      text-align: center;&#xD;&#xA;      position: relative;&#xD;&#xA;      width: width:100%;&#xD;&#xA;      margin: auto;&#xD;&#xA;      z-index: 100000;&#xD;&#xA;    }&#xD;&#xA;    .navbar-default {&#xD;&#xA;      transition: 500ms ease;&#xD;&#xA;      background: transparent;&#xD;&#xA;    }&#xD;&#xA;    .navbar-default.scrolled {&#xD;&#xA;      background: rgba(28, 28, 28, 0.8);&#xD;&#xA;    }&#xD;&#xA;    a.title {&#xD;&#xA;      float: left;&#xD;&#xA;      font-size: 25px;&#xD;&#xA;      color: white;&#xD;&#xA;      font-family: quantum;&#xD;&#xA;      height: 55px;&#xD;&#xA;      padding-top: 2px;&#xD;&#xA;    }&#xD;&#xA;    .title {&#xD;&#xA;      float: left;&#xD;&#xA;      display: inline-block;&#xD;&#xA;      padding: 0;&#xD;&#xA;      margin-top: 5px;&#xD;&#xA;      list-style: none;&#xD;&#xA;      height: 55px;&#xD;&#xA;    }&#xD;&#xA;    .nav-fostrap ul {&#xD;&#xA;      list-style-type: none;&#xD;&#xA;      margin-top: 5px;&#xD;&#xA;      padding: 0;&#xD;&#xA;      display: block;&#xD;&#xA;      float: right;&#xD;&#xA;      width: auto;&#xD;&#xA;    }&#xD;&#xA;    .nav-fostrap ul li {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      font-weight: bold;&#xD;&#xA;      text-transform: uppercase;&#xD;&#xA;      text-align: center;&#xD;&#xA;      padding-left: 15px;&#xD;&#xA;      padding-right: 15px;&#xD;&#xA;      margin-top: 0;&#xD;&#xA;      list-style: none;&#xD;&#xA;      height: 60px;&#xD;&#xA;    }&#xD;&#xA;    a.menu {&#xD;&#xA;      font-family: Montserrat, Arial;&#xD;&#xA;      font-weight: 700;&#xD;&#xA;      position: relative;&#xD;&#xA;      display: inline-block;&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      padding: 8px 0;&#xD;&#xA;      margin-top: 14.5px;&#xD;&#xA;      margin-bottom: 10.5px;&#xD;&#xA;      color: #fff;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      height: 40px;&#xD;&#xA;      top: -10px;&#xD;&#xA;    }&#xD;&#xA;    a:hover.menu {&#xD;&#xA;      color: #fff;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .menu a:before,&#xD;&#xA;    a:after {&#xD;&#xA;      content: '';&#xD;&#xA;      position: absolute;&#xD;&#xA;      width: 0%;&#xD;&#xA;      height: 2px;&#xD;&#xA;      bottom: -2px;&#xD;&#xA;      background: #fff;&#xD;&#xA;    }&#xD;&#xA;    .menu a:before {&#xD;&#xA;      left: 0;&#xD;&#xA;    }&#xD;&#xA;    .menu a:after {&#xD;&#xA;      right: 0;&#xD;&#xA;      background: #fff;&#xD;&#xA;      transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);&#xD;&#xA;    }&#xD;&#xA;    .menu a:hover:before {&#xD;&#xA;      background: #fff;&#xD;&#xA;      width: 100%;&#xD;&#xA;      transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);&#xD;&#xA;    }&#xD;&#xA;    .menu a:hover:after {&#xD;&#xA;      background: transparent;&#xD;&#xA;      width: 100%;&#xD;&#xA;      transition: 0s;&#xD;&#xA;    }&#xD;&#xA;    .title-on-mobile {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    @media only screen and (max-width:768px) {&#xD;&#xA;      a.title {&#xD;&#xA;        float: none;&#xD;&#xA;        font-size: 25px;&#xD;&#xA;        color: white;&#xD;&#xA;        font-family: quantum;&#xD;&#xA;        height: 55px;&#xD;&#xA;        padding-top: 2px;&#xD;&#xA;        width: 100%;&#xD;&#xA;        text-align: center;&#xD;&#xA;        position: fixed;&#xD;&#xA;        left: -50px;&#xD;&#xA;      }&#xD;&#xA;      .nav-fostrap {&#xD;&#xA;        background: #1c1c1c;&#xD;&#xA;        width: 200px;&#xD;&#xA;        height: 100%;&#xD;&#xA;        display: block;&#xD;&#xA;        position: fixed;&#xD;&#xA;        left: -200px;&#xD;&#xA;        top: 0px;&#xD;&#xA;        -webkit-transition: left 0.25s ease;&#xD;&#xA;        -moz-transition: left 0.25s ease;&#xD;&#xA;        -ms-transition: left 0.25s ease;&#xD;&#xA;        -o-transition: left 0.25s ease;&#xD;&#xA;        transition: left 0.25s ease;&#xD;&#xA;        margin: 0;&#xD;&#xA;        border: 0;&#xD;&#xA;        border-radius: 0;&#xD;&#xA;        overflow-y: auto;&#xD;&#xA;        overflow-x: hidden;&#xD;&#xA;        height: 100%;&#xD;&#xA;        z-index: 105;&#xD;&#xA;      }&#xD;&#xA;      .nav-fostrap.visible {&#xD;&#xA;        left: 0px;&#xD;&#xA;        -webkit-transition: left 0.25s ease;&#xD;&#xA;        -moz-transition: left 0.25s ease;&#xD;&#xA;        -ms-transition: left 0.25s ease;&#xD;&#xA;        -o-transition: left 0.25s ease;&#xD;&#xA;        transition: left 0.25s ease;&#xD;&#xA;        z-index: 90;&#xD;&#xA;      }&#xD;&#xA;      .nav-bg-fostrap {&#xD;&#xA;        display: inline-block;&#xD;&#xA;        vertical-align: middle;&#xD;&#xA;        width: 100%;&#xD;&#xA;        height: 60px;&#xD;&#xA;        margin: 0;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0px;&#xD;&#xA;        left: 0px;&#xD;&#xA;        background: transperant;&#xD;&#xA;        padding: 12px 0 0 10px;&#xD;&#xA;        -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);&#xD;&#xA;        -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);&#xD;&#xA;        -ms-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);&#xD;&#xA;        -o-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);&#xD;&#xA;        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);&#xD;&#xA;        z-index: 100;&#xD;&#xA;      }&#xD;&#xA;      .navbar-fostrap {&#xD;&#xA;        display: inline-block;&#xD;&#xA;        vertical-align: middle;&#xD;&#xA;        height: 50px;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;        margin-top: 5px;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0;&#xD;&#xA;        left: 0;&#xD;&#xA;        padding: 12px;&#xD;&#xA;        z-index: 102;&#xD;&#xA;      }&#xD;&#xA;      .navbar-fostrap span {&#xD;&#xA;        height: 2px;&#xD;&#xA;        background: #fff;&#xD;&#xA;        margin: 5px;&#xD;&#xA;        display: block;&#xD;&#xA;        width: 20px;&#xD;&#xA;      }&#xD;&#xA;      .navbar-fostrap span:nth-child(2) {&#xD;&#xA;        width: 20px;&#xD;&#xA;      }&#xD;&#xA;      .navbar-fostrap span:nth-child(3) {&#xD;&#xA;        width: 20px;&#xD;&#xA;      }&#xD;&#xA;      .nav-fostrap ul {&#xD;&#xA;        padding-top: 50px;&#xD;&#xA;      }&#xD;&#xA;      .nav-fostrap li {&#xD;&#xA;        display: block;&#xD;&#xA;      }&#xD;&#xA;      .nav-fostrap li a {&#xD;&#xA;        display: block;&#xD;&#xA;        color: #505050;&#xD;&#xA;        font-weight: 600;&#xD;&#xA;      }&#xD;&#xA;      .nav-fostrap li:first-child:hover a {&#xD;&#xA;        border-radius: 0;&#xD;&#xA;      }&#xD;&#xA;      .cover-bg {&#xD;&#xA;        background: rgba(0, 0, 0, 0.5);&#xD;&#xA;        position: fixed;&#xD;&#xA;        top: 0;&#xD;&#xA;        bottom: 0;&#xD;&#xA;        left: 0;&#xD;&#xA;        right: 0;&#xD;&#xA;      }&#xD;&#xA;    }