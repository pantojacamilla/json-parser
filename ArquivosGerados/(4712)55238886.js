    li {&#xD;&#xA;        list-style: none;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu {&#xD;&#xA;        width: 100%;&#xD;&#xA;        position: relative;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu > span {&#xD;&#xA;        background: #03A9F4 none repeat scroll 0 0;&#xD;&#xA;        color: #fff;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;        display: block;&#xD;&#xA;        font-size: 15px;&#xD;&#xA;        font-weight: 500;&#xD;&#xA;        margin: 0;&#xD;&#xA;        padding: 14px 30px 12px;&#xD;&#xA;        position: relative;&#xD;&#xA;        text-transform: uppercase;&#xD;&#xA;        height: 49px;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu > span::after, .search-box-view .submit::before {&#xD;&#xA;        content: "";&#xD;&#xA;        font-family: FontAwesome;&#xD;&#xA;        font-size: 18px;&#xD;&#xA;        font-weight: normal;&#xD;&#xA;        position: absolute;&#xD;&#xA;        right: 13px;&#xD;&#xA;        top: 50%;&#xD;&#xA;        transform: translateY(-50%);&#xD;&#xA;    }&#xD;&#xA;    .has-mega-menu {&#xD;&#xA;        line-height: 43px;&#xD;&#xA;        float: left;&#xD;&#xA;        padding: 0;&#xD;&#xA;        background-color: #3e3e3e;&#xD;&#xA;        width: 220px;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list {&#xD;&#xA;        background: #fff none repeat scroll 0 0;&#xD;&#xA;        left: 0;&#xD;&#xA;        padding: 0 25px;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 100%;&#xD;&#xA;        width: 100%;&#xD;&#xA;        z-index: 999;&#xD;&#xA;        border: 2px solid #03A9F4;&#xD;&#xA;        border-top-width: 0;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li {&#xD;&#xA;        position: relative;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li > a, .category-menu li a {&#xD;&#xA;        color: #333;&#xD;&#xA;        display: block;&#xD;&#xA;        font-size: 14px;&#xD;&#xA;        font-weight: 400;&#xD;&#xA;        line-height: 19px;&#xD;&#xA;        overflow-wrap: break-word;&#xD;&#xA;        padding: 17px 0;&#xD;&#xA;        position: relative;&#xD;&#xA;        text-align: left;&#xD;&#xA;        text-transform: capitalize;&#xD;&#xA;        -webkit-transition: all 0.3s;&#xD;&#xA;        transition: all 0.3s;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li span, .category-sub li span {&#xD;&#xA;        display: inline-block;&#xD;&#xA;        width: 35px;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li:hover ul.ht-dropdown {&#xD;&#xA;    	visibility: visible;&#xD;&#xA;        -webkiit-transform: scaleY(1);&#xD;&#xA;        -webkit-transform: scaleY(1);&#xD;&#xA;        transform: scaleY(1);&#xD;&#xA;        opacity: 1;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li ul.megamenu {&#xD;&#xA;        background: #fff none repeat scroll 0 0;&#xD;&#xA;        border: 1px solid #e5e5e3;&#xD;&#xA;        -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);&#xD;&#xA;        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);&#xD;&#xA;        left: 100%;&#xD;&#xA;        padding: 10px;&#xD;&#xA;        top: 0;&#xD;&#xA;        width: 905px;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list .ht-dropdown:before {&#xD;&#xA;        background-color: #fff;&#xD;&#xA;        border-color: #f1f1f1 transparent transparent #f1f1f1;&#xD;&#xA;        -o-border-image: none;&#xD;&#xA;        border-image: none;&#xD;&#xA;        border-style: solid;&#xD;&#xA;        border-width: 1px;&#xD;&#xA;        content: "";&#xD;&#xA;        display: block;&#xD;&#xA;        height: 15px;&#xD;&#xA;        left: -8px;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 21px;&#xD;&#xA;        -webkit-transform: rotate(-45deg);&#xD;&#xA;        transform: rotate(-45deg);&#xD;&#xA;        width: 15px;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li:nth-child(n) > a:after {&#xD;&#xA;        content: "\f107";&#xD;&#xA;        font-family: 'FontAwesome';&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 20px;&#xD;&#xA;        right: 15px;&#xD;&#xA;        -webkit-transition: all 0.5s;&#xD;&#xA;        transition: all 0.5s;&#xD;&#xA;    }&#xD;&#xA;    .vertical-menu-list > li:nth-child(n):hover > a:after {&#xD;&#xA;        -wekit-transform: rotate(-90deg);&#xD;&#xA;        -webkit-transform: rotate(-90deg);&#xD;&#xA;        transform: rotate(-90deg);&#xD;&#xA;    }&#xD;&#xA;    .has-mega-menu a:hover {&#xD;&#xA;        color: #03A9F4;&#xD;&#xA;        white-space: normal;&#xD;&#xA;        text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .fix {&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .ht-dropdown {&#xD;&#xA;        background: #fff;&#xD;&#xA;        left: 0;&#xD;&#xA;        opacity: 0;&#xD;&#xA;        padding: 10px 20px;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 100%;&#xD;&#xA;        -webkiit-transform: scaleY(0);&#xD;&#xA;        -webkit-transform: scaleY(0);&#xD;&#xA;        transform: scaleY(0);&#xD;&#xA;        -webkit-transform-origin: 0 0 0;&#xD;&#xA;        transform-origin: 0 0 0;&#xD;&#xA;        width: 150px;&#xD;&#xA;        text-align: left;&#xD;&#xA;        visibility: hidden;&#xD;&#xA;        z-index: 99999999;&#xD;&#xA;        -webkit-transition: 0.5s;&#xD;&#xA;        transition: 0.5s;&#xD;&#xA;        -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);&#xD;&#xA;        -ms-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);&#xD;&#xA;        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);&#xD;&#xA;    }&#xD;&#xA;    .sub-menu.mega-menu {&#xD;&#xA;        left: 100%;&#xD;&#xA;        padding: 0;&#xD;&#xA;        top: 0;&#xD;&#xA;        background-color: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu.mega-menu .row .mega-col {&#xD;&#xA;        display: inline-block;&#xD;&#xA;        position: relative;&#xD;&#xA;        vertical-align: top;&#xD;&#xA;        width: 20%;&#xD;&#xA;        height: 100%;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu.mega-menu .mega-content:last-child {&#xD;&#xA;        border: medium none;&#xD;&#xA;        margin-bottom: 0;&#xD;&#xA;        padding-bottom: 0;&#xD;&#xA;    }&#xD;&#xA;    .sub-menu.mega-menu .mega-item-title {&#xD;&#xA;        font-size: 13px;&#xD;&#xA;        font-family: sans-serif;&#xD;&#xA;        text-align: left;&#xD;&#xA;        font-weight: 500;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;        text-overflow: ellipsis;&#xD;&#xA;    }&#xD;&#xA;    ul.menu {&#xD;&#xA;        float: left;&#xD;&#xA;    }&#xD;&#xA;    .megamenu ul {&#xD;&#xA;        position: relative;&#xD;&#xA;        margin: 0;&#xD;&#xA;        padding: 0 15px;&#xD;&#xA;    }&#xD;&#xA;    .has-mega-menu ul.menu > li.menu-item {&#xD;&#xA;        width: 100%;&#xD;&#xA;        float: none;&#xD;&#xA;        text-align: left;&#xD;&#xA;        padding: 0 0 0 10px;&#xD;&#xA;    }&#xD;&#xA;    .main-menu ul li a, .megamenu ul li a {&#xD;&#xA;        display: block;&#xD;&#xA;        line-height: 1.5;&#xD;&#xA;        font-size: 12px;&#xD;&#xA;    }&#xD;&#xA;    .menu-hidden {&#xD;&#xA;        display: none;&#xD;&#xA;    }