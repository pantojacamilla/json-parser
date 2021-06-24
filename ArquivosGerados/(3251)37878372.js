    body {&#xD;&#xA;      padding-top: 50px;&#xD;&#xA;    }&#xD;&#xA;    html,&#xD;&#xA;    body {&#xD;&#xA;      overflow-x: hidden;&#xD;&#xA;      /* Prevent scroll on narrow devices */&#xD;&#xA;      height: 100%;&#xD;&#xA;    }&#xD;&#xA;    body {&#xD;&#xA;      padding-top: 70px;&#xD;&#xA;    }&#xD;&#xA;    footer {&#xD;&#xA;      padding: 30px 0;&#xD;&#xA;    }&#xD;&#xA;    .navbar-inverse .navbar-brand:hover,&#xD;&#xA;    .navbar-inverse .navbar-brand:focus {&#xD;&#xA;      background-color: transparent;&#xD;&#xA;      color: #999999;&#xD;&#xA;    }&#xD;&#xA;    .head {&#xD;&#xA;      background: #668B8B;&#xD;&#xA;      color: #000000;&#xD;&#xA;    }&#xD;&#xA;    .side-contain {&#xD;&#xA;      margin-top: 5px;&#xD;&#xA;      border: 2px solid #668B8B;&#xD;&#xA;      border-radius: 10px;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu {&#xD;&#xA;      position: relative;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu>.dropdown-menu {&#xD;&#xA;      top: 0;&#xD;&#xA;      left: 100%;&#xD;&#xA;      margin-top: -6px;&#xD;&#xA;      margin-left: -1px;&#xD;&#xA;      -webkit-border-radius: 0 6px 6px 6px;&#xD;&#xA;      -moz-border-radius: 0 6px 6px;&#xD;&#xA;      border-radius: 0 6px 6px 6px;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu:hover>.dropdown-menu {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu>a:after {&#xD;&#xA;      display: block;&#xD;&#xA;      content: " ";&#xD;&#xA;      float: right;&#xD;&#xA;      width: 0;&#xD;&#xA;      height: 0;&#xD;&#xA;      border-color: transparent;&#xD;&#xA;      border-style: solid;&#xD;&#xA;      border-width: 5px 0 5px 5px;&#xD;&#xA;      border-left-color: #ccc;&#xD;&#xA;      margin-top: 5px;&#xD;&#xA;      margin-right: -10px;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu:hover>a:after {&#xD;&#xA;      border-left-color: #fff;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu.pull-left {&#xD;&#xA;      float: none;&#xD;&#xA;    }&#xD;&#xA;    .dropdown-submenu.pull-left>.dropdown-menu {&#xD;&#xA;      left: -100%;&#xD;&#xA;      margin-left: 10px;&#xD;&#xA;      -webkit-border-radius: 6px 0 6px 6px;&#xD;&#xA;      -moz-border-radius: 6px 0 6px 6px;&#xD;&#xA;      border-radius: 6px 0 6px 6px;&#xD;&#xA;    }&#xD;&#xA;    /*&#xD;&#xA;     * Off Canvas&#xD;&#xA;     * --------------------------------------------------&#xD;&#xA;     * Greater thav 768px shows the menu by default and also flips the semantics&#xD;&#xA;     * The issue is to show menu for large screens and to hide for small&#xD;&#xA;     * Also need to do something clever to turn off the tabs for when the navigation is hidden&#xD;&#xA;     * Otherwise keyboard users cannot find the focus point&#xD;&#xA;     * (For now I will ignore that for mobile users and also not worry about&#xD;&#xA;     * screen re-sizing popping the menu out.)&#xD;&#xA;     */&#xD;&#xA;    @media screen and (min-width: 768px) {&#xD;&#xA;      .row-offcanvas {&#xD;&#xA;        position: relative;&#xD;&#xA;        -webkit-transition: all .25s ease-out;&#xD;&#xA;        -moz-transition: all .25s ease-out;&#xD;&#xA;        transition: all .25s ease-out;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right {&#xD;&#xA;        right: 20%;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left {&#xD;&#xA;        left: 20%;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right .sidebar-offcanvas {&#xD;&#xA;        right: -20%;&#xD;&#xA;        /* 3 columns */&#xD;&#xA;        background-color: rgb(255, 255, 255);&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left .sidebar-offcanvas {&#xD;&#xA;        left: -20%;&#xD;&#xA;        /* 3 columns */&#xD;&#xA;        background-color: rgb(255, 255, 255);&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right.active {&#xD;&#xA;        right: 0;&#xD;&#xA;        /* 3 columns */&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left.active {&#xD;&#xA;        left: 0;&#xD;&#xA;        /* 3 columns */&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right.active .sidebar-offcanvas {&#xD;&#xA;        background-color: rgb(254, 254, 254);&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left.active .sidebar-offcanvas {&#xD;&#xA;        background-color: rgb(254, 254, 254);&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas .content {&#xD;&#xA;        width: 80%;&#xD;&#xA;        /* 9 columns */&#xD;&#xA;        -webkit-transition: all .25s ease-out;&#xD;&#xA;        -moz-transition: all .25s ease-out;&#xD;&#xA;        transition: all .25s ease-out;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas.active .content {&#xD;&#xA;        width: 100%;&#xD;&#xA;        /* 12 columns */&#xD;&#xA;      }&#xD;&#xA;      .sidebar-offcanvas {&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0;&#xD;&#xA;        width: 20%;&#xD;&#xA;        /* 3 columns */&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media screen and (max-width: 767px) {&#xD;&#xA;      .row-offcanvas {&#xD;&#xA;        position: relative;&#xD;&#xA;        -webkit-transition: all .25s ease-out;&#xD;&#xA;        -moz-transition: all .25s ease-out;&#xD;&#xA;        transition: all .25s ease-out;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right {&#xD;&#xA;        right: 0;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left {&#xD;&#xA;        left: 0;&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right .sidebar-offcanvas {&#xD;&#xA;        right: -50%;&#xD;&#xA;        /* 6 columns */&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left .sidebar-offcanvas {&#xD;&#xA;        left: -50%;&#xD;&#xA;        /* 6 columns */&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-right.active {&#xD;&#xA;        right: 50%;&#xD;&#xA;        /* 6 columns */&#xD;&#xA;      }&#xD;&#xA;      .row-offcanvas-left.active {&#xD;&#xA;        left: 50%;&#xD;&#xA;        /* 6 columns */&#xD;&#xA;      }&#xD;&#xA;      .sidebar-offcanvas {&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 0;&#xD;&#xA;        width: 50%;&#xD;&#xA;        /* 6 columns */&#xD;&#xA;      }&#xD;&#xA;    }