    body {&#xD;&#xA;      background-color: lightblue;&#xD;&#xA;      margin: 50px 0;&#xD;&#xA;    }&#xD;&#xA;    .mobile-menu {&#xD;&#xA;      display: none;&#xD;&#xA;      transition: .5s ease;&#xD;&#xA;    }&#xD;&#xA;    nav {&#xD;&#xA;      position: fixed;&#xD;&#xA;      width: 100%;&#xD;&#xA;      top: 0;&#xD;&#xA;      opacity: .9;&#xD;&#xA;      transition: .5s ease;&#xD;&#xA;    }&#xD;&#xA;    nav a {&#xD;&#xA;      float: left;&#xD;&#xA;      text-align: center;&#xD;&#xA;      padding: 14px 16px;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .dropdown {&#xD;&#xA;      float: left;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .dropdown .dropbtn {&#xD;&#xA;      padding: 14px 16px;&#xD;&#xA;    }&#xD;&#xA;    nav.dark a:hover,&#xD;&#xA;    nav.dark .dropdown:hover .dropbtn {&#xD;&#xA;      background-color: #fff;&#xD;&#xA;      color: #111;&#xD;&#xA;    }&#xD;&#xA;    nav.light a:hover,&#xD;&#xA;    nav.light .dropdown:hover .dropbtn {&#xD;&#xA;      background-color: #111;&#xD;&#xA;      color: #fff;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-content {&#xD;&#xA;      display: none;&#xD;&#xA;      position: absolute;&#xD;&#xA;      z-index: 1;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-content a {&#xD;&#xA;      float: none;&#xD;&#xA;      padding: 12px 16px;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      display: block;&#xD;&#xA;      text-align: left;&#xD;&#xA;    }&#xD;&#xA;    .dropdown:hover .dropdown-content {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    #navigation,&#xD;&#xA;    #resources,&#xD;&#xA;    .resources {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    .light * {&#xD;&#xA;      color: #111;&#xD;&#xA;    }&#xD;&#xA;    .dark * {&#xD;&#xA;      color: #fff;&#xD;&#xA;    }&#xD;&#xA;    .dark .dropdown-content {&#xD;&#xA;      background-color: #111;&#xD;&#xA;    }&#xD;&#xA;    .light .dropdown-content {&#xD;&#xA;      background-color: #fff;&#xD;&#xA;    }&#xD;&#xA;    .scrollbar-measure {&#xD;&#xA;      width: 100px;&#xD;&#xA;      height: 100px;&#xD;&#xA;      overflow: scroll;&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: -9999px;&#xD;&#xA;    }&#xD;&#xA;    /* MEDIA QUERIES */&#xD;&#xA;    @media (max-width: 600px) {&#xD;&#xA;      .mobile-menu {&#xD;&#xA;        display: block;&#xD;&#xA;        position: fixed;&#xD;&#xA;        text-align: right;&#xD;&#xA;        width: 100%;&#xD;&#xA;        top: 0;&#xD;&#xA;        right: 0;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;        z-index: 3;&#xD;&#xA;        height: auto;&#xD;&#xA;        opacity: .9;&#xD;&#xA;        align-items: center;&#xD;&#xA;        padding: 14px 16px;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;      }&#xD;&#xA;      nav {&#xD;&#xA;        height: 100%;&#xD;&#xA;        display: flex;&#xD;&#xA;        flex-direction: column;&#xD;&#xA;        justify-content: center;&#xD;&#xA;        display: none;&#xD;&#xA;      }&#xD;&#xA;      nav>div {&#xD;&#xA;        position: relative;&#xD;&#xA;        top: 50%;&#xD;&#xA;        transform: translateY(-50%);&#xD;&#xA;      }&#xD;&#xA;      nav a,&#xD;&#xA;      .dropdown,&#xD;&#xA;      #navigation,&#xD;&#xA;      #resources,&#xD;&#xA;      .resources,&#xD;&#xA;      .dropdown-content a {&#xD;&#xA;        float: none;&#xD;&#xA;        display: block;&#xD;&#xA;        text-align: center;&#xD;&#xA;        position: relative;&#xD;&#xA;        padding: 1px 0;&#xD;&#xA;      }&#xD;&#xA;      .dropdown-content,&#xD;&#xA;      .dropbtn {&#xD;&#xA;        float: none;&#xD;&#xA;        display: block;&#xD;&#xA;        text-align: center;&#xD;&#xA;        position: relative;&#xD;&#xA;        padding: 0;&#xD;&#xA;      }&#xD;&#xA;      #navigation:after {&#xD;&#xA;        content: "Navigation";&#xD;&#xA;      }&#xD;&#xA;      #resources:after {&#xD;&#xA;        content: "Resources";&#xD;&#xA;      }&#xD;&#xA;    }