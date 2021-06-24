    /* =================================&#xD;&#xA;              Main Navigation Area&#xD;&#xA;       ================================= */&#xD;&#xA;    .nav-area {&#xD;&#xA;      font-family: "Roboto", sans-serif;&#xD;&#xA;      display: flex;&#xD;&#xA;      justify-content: center;&#xD;&#xA;      align-items: center;&#xD;&#xA;      height: 75px;&#xD;&#xA;      position: relative;&#xD;&#xA;      z-index: 1030;&#xD;&#xA;    }&#xD;&#xA;    .nav-area .logo a {&#xD;&#xA;      display: flex;&#xD;&#xA;      align-items: center;&#xD;&#xA;    }&#xD;&#xA;    .nav-area .logo a svg {&#xD;&#xA;      width: auto;&#xD;&#xA;      height: 40px;&#xD;&#xA;      fill: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .center-nav {&#xD;&#xA;      margin-right: auto;&#xD;&#xA;      margin-left: auto;&#xD;&#xA;    }&#xD;&#xA;    .center-nav a {&#xD;&#xA;      position: relative;&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      padding: 28px 10px;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      font-family: "Roboto", sans-serif;&#xD;&#xA;      font-weight: lighter;&#xD;&#xA;    }&#xD;&#xA;    .center-nav a:after,&#xD;&#xA;    .center-nav a:before {&#xD;&#xA;      transition: all .5s;&#xD;&#xA;    }&#xD;&#xA;    .center-nav a:after {&#xD;&#xA;      position: absolute;&#xD;&#xA;      bottom: 0;&#xD;&#xA;      left: 0;&#xD;&#xA;      right: 0;&#xD;&#xA;      margin: auto;&#xD;&#xA;      width: 0;&#xD;&#xA;      content: '.';&#xD;&#xA;      color: transparent;&#xD;&#xA;      background: #ca49d9;&#xD;&#xA;      background: -moz-linear-gradient(left, #ca49d9 0%, #1771A8 100%);&#xD;&#xA;      background: -webkit-linear-gradient(left, #ca49d9 0%, #1771A8 100%);&#xD;&#xA;      background: linear-gradient(to right, #ca49d9 0%, #1771A8 100%);&#xD;&#xA;      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ca49d9', endColorstr='#1771A8 ', GradientType=1);&#xD;&#xA;      height: 4px;&#xD;&#xA;    }&#xD;&#xA;    .center-nav a:hover:after {&#xD;&#xA;      width: 100%;&#xD;&#xA;    }&#xD;&#xA;    .center-nav a:hover {&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .center-nav a:not(:last-child) {&#xD;&#xA;      margin-right: 5em;&#xD;&#xA;    }&#xD;&#xA;    .right-nav {&#xD;&#xA;      display: flex;&#xD;&#xA;      align-items: center;&#xD;&#xA;    }&#xD;&#xA;    .right-nav .btn-submit {&#xD;&#xA;      font-family: "Roboto", sans-serif;&#xD;&#xA;      background: #ffffff;&#xD;&#xA;      padding: .5em 2em;&#xD;&#xA;      -webkit-border-radius: 2px;&#xD;&#xA;      -moz-border-radius: 2px;&#xD;&#xA;      border-radius: 1px;&#xD;&#xA;      color: #787878;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .right-nav .btn-submit:hover {&#xD;&#xA;      color: #616161;&#xD;&#xA;    }&#xD;&#xA;    .right-nav svg {&#xD;&#xA;      width: 20px;&#xD;&#xA;      height: auto;&#xD;&#xA;      fill: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .right-nav a {&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      font-family: "Roboto", sans-serif;&#xD;&#xA;    }&#xD;&#xA;    .right-nav a:hover {&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      color: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .right-nav a:not(.btn-submit) {&#xD;&#xA;      margin-right: 2em;&#xD;&#xA;    }&#xD;&#xA;    .sticky {&#xD;&#xA;      position: fixed;&#xD;&#xA;      top: 0;&#xD;&#xA;      left: 0;&#xD;&#xA;      width: 100%;&#xD;&#xA;      background: #ffffff;&#xD;&#xA;      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);&#xD;&#xA;    }&#xD;&#xA;    .sticky .nav-area {&#xD;&#xA;      display: flex;&#xD;&#xA;      justify-content: center;&#xD;&#xA;      align-items: center;&#xD;&#xA;      height: 65px;&#xD;&#xA;      flex-direction: row;&#xD;&#xA;    }&#xD;&#xA;    .sticky a {&#xD;&#xA;      color: #656565;&#xD;&#xA;    }&#xD;&#xA;    .sticky a:hover {&#xD;&#xA;      color: #656565;&#xD;&#xA;    }&#xD;&#xA;    .sticky .logo a svg {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      fill: #888A8C;&#xD;&#xA;    }&#xD;&#xA;    .sticky .logo a svg #XMLID_1_ {&#xD;&#xA;      fill: #9750DC;&#xD;&#xA;    }&#xD;&#xA;    .sticky .btn-submit {&#xD;&#xA;      background: #2452a2;&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);&#xD;&#xA;      -moz-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);&#xD;&#xA;      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);&#xD;&#xA;    }&#xD;&#xA;    .sticky .btn-submit:hover {&#xD;&#xA;      color: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .sticky .right-nav a svg {&#xD;&#xA;      fill: #2452a2;&#xD;&#xA;    }&#xD;&#xA;    .sticky .m-nav svg {&#xD;&#xA;      fill: #2452a2;&#xD;&#xA;    }&#xD;&#xA;    .m-nav {&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      fill: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .m-nav svg {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      width: 22px !important;&#xD;&#xA;      height: auto;&#xD;&#xA;      vertical-align: middle;&#xD;&#xA;    }&#xD;&#xA;    .mnav-overlay {&#xD;&#xA;      height: 0;&#xD;&#xA;      width: 100%;&#xD;&#xA;      position: fixed;&#xD;&#xA;      z-index: 2090;&#xD;&#xA;      top: 0;&#xD;&#xA;      left: 0;&#xD;&#xA;      background: #0c1476;&#xD;&#xA;      /* fallback for old browsers */&#xD;&#xA;      background: -webkit-linear-gradient(135deg, #0c1476, #680fac 60%);&#xD;&#xA;      /* Chrome 10-25, Safari 5.1-6 */&#xD;&#xA;      background: linear-gradient(135deg, #0c1476, #680fac 60%);&#xD;&#xA;      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */&#xD;&#xA;      overflow-y: hidden;&#xD;&#xA;      transition: 0.5s;&#xD;&#xA;    }&#xD;&#xA;    .mobile-nav {&#xD;&#xA;      display: flex;&#xD;&#xA;      justify-content: center;&#xD;&#xA;      align-items: center;&#xD;&#xA;      flex-direction: column;&#xD;&#xA;      height: 100%;&#xD;&#xA;    }&#xD;&#xA;    .mobile-nav a img {&#xD;&#xA;      border-bottom: 1px solid #ddd;&#xD;&#xA;      padding-bottom: 10px;&#xD;&#xA;      width: 120px;&#xD;&#xA;      height: auto;&#xD;&#xA;    }&#xD;&#xA;    .mnav-overlay a {&#xD;&#xA;      font-family: "Roboto", sans-serif;&#xD;&#xA;      padding: 8px;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      font-size: 22px;&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      display: block;&#xD;&#xA;      transition: 0.3s;&#xD;&#xA;    }&#xD;&#xA;    .mnav-overlay a:hover,&#xD;&#xA;    .mnav-overlay a:focus {&#xD;&#xA;      color: #f1f1f1;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    .mnav-overlay .closebtn {&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: .8em;&#xD;&#xA;      right: .8em;&#xD;&#xA;      font-size: 20px;&#xD;&#xA;    }&#xD;&#xA;    .mnav-overlay .closebtn:hover {&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    @media screen and (max-height: 450px) {&#xD;&#xA;      .mnav-overlay {&#xD;&#xA;        overflow-y: auto;&#xD;&#xA;      }&#xD;&#xA;      .mnav-overlay a {&#xD;&#xA;        font-size: 20px;&#xD;&#xA;      }&#xD;&#xA;      .mnav-overlay .closebtn {&#xD;&#xA;        font-size: 20px;&#xD;&#xA;        font-family: "Roboto", sans-serif;&#xD;&#xA;        top: 15px;&#xD;&#xA;        right: 15px;&#xD;&#xA;        text-decoration: none;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media (min-width: 991px) {&#xD;&#xA;      .m-nav {&#xD;&#xA;        display: none;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media (max-width: 991px) {&#xD;&#xA;      .nav-area {&#xD;&#xA;        padding: 15px;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .logo a {&#xD;&#xA;        margin-right: 5px;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .logo a svg {&#xD;&#xA;        width: 100px;&#xD;&#xA;        height: auto;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .right-nav {&#xD;&#xA;        margin-left: auto;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .right-nav .btn-submit {&#xD;&#xA;        padding: 8px;&#xD;&#xA;        position: relative;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .right-nav a {&#xD;&#xA;        font-size: 16px;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .right-nav a:not(:last-child) {&#xD;&#xA;        margin-right: .6em;&#xD;&#xA;      }&#xD;&#xA;      .nav-area .right-nav a svg {&#xD;&#xA;        width: 16px;&#xD;&#xA;        height: auto;&#xD;&#xA;      }&#xD;&#xA;      .center-nav {&#xD;&#xA;        display: none;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media (max-width: 576px) {&#xD;&#xA;      .right-nav {&#xD;&#xA;        margin-left: auto;&#xD;&#xA;      }&#xD;&#xA;      .right-nav .btn-submit {&#xD;&#xA;        padding: 5px;&#xD;&#xA;      }&#xD;&#xA;      .right-nav img {&#xD;&#xA;        width: 16px;&#xD;&#xA;        height: auto;&#xD;&#xA;      }&#xD;&#xA;      .right-nav a {&#xD;&#xA;        font-size: 11px;&#xD;&#xA;      }&#xD;&#xA;      .right-nav a:not(:last-child) {&#xD;&#xA;        margin-right: .8em;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media (max-width: 1200px) {&#xD;&#xA;      .center-nav {&#xD;&#xA;        margin-right: auto;&#xD;&#xA;        margin-left: auto;&#xD;&#xA;      }&#xD;&#xA;      .center-nav a {&#xD;&#xA;        color: #ffffff;&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        font-size: 14px;&#xD;&#xA;        font-family: "Roboto", sans-serif;&#xD;&#xA;      }&#xD;&#xA;      .center-nav a:hover {&#xD;&#xA;        text-decoration: none;&#xD;&#xA;        color: #ffffff;&#xD;&#xA;      }&#xD;&#xA;      .center-nav a:not(:last-child) {&#xD;&#xA;        margin-right: 1em;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    /*This class is applicable for all page except home page*/&#xD;&#xA;    .nav-bg {&#xD;&#xA;      position: fixed;&#xD;&#xA;      top: 0;&#xD;&#xA;      width: 100%;&#xD;&#xA;      background: #ffffff;&#xD;&#xA;      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .nav-area {&#xD;&#xA;      display: flex;&#xD;&#xA;      justify-content: center;&#xD;&#xA;      align-items: center;&#xD;&#xA;      height: 65px;&#xD;&#xA;      flex-direction: row;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg a {&#xD;&#xA;      color: #656565;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg a:hover {&#xD;&#xA;      color: #656565;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .logo a svg {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      fill: #888A8C;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .logo a svg #XMLID_1_ {&#xD;&#xA;      fill: #9750DC;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .btn-submit {&#xD;&#xA;      background: #2452a2;&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);&#xD;&#xA;      -moz-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);&#xD;&#xA;      box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .btn-submit:hover {&#xD;&#xA;      color: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .right-nav a svg {&#xD;&#xA;      fill: #2452a2;&#xD;&#xA;    }&#xD;&#xA;    .nav-bg .m-nav svg {&#xD;&#xA;      fill: #2452a2;&#xD;&#xA;    }&#xD;&#xA;    /* =================================&#xD;&#xA;            Style For Search&#xD;&#xA;       ================================= */&#xD;&#xA;    #search-container {&#xD;&#xA;      position: fixed;&#xD;&#xA;      display: flex;&#xD;&#xA;      align-items: flex-start;&#xD;&#xA;      justify-content: flex-start;&#xD;&#xA;      text-align: center;&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 75px;&#xD;&#xA;      transition: all 0.6s ease;&#xD;&#xA;      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);&#xD;&#xA;      background: rebeccapurple;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #search-container #search-close {&#xD;&#xA;      transition: background-color 0.6s ease;&#xD;&#xA;      position: absolute;&#xD;&#xA;      color: white;&#xD;&#xA;      top: 50%;&#xD;&#xA;      transform: translateY(-50%);&#xD;&#xA;      right: 3%;&#xD;&#xA;      font-size: 1.2em;&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      font-style: initial;&#xD;&#xA;    }&#xD;&#xA;    .search-input {&#xD;&#xA;      color: white;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      width: 98%;&#xD;&#xA;      background-color: transparent;&#xD;&#xA;      border: 0;&#xD;&#xA;      outline: 0;&#xD;&#xA;    }&#xD;&#xA;    #main-search-form {&#xD;&#xA;      width: 100%;&#xD;&#xA;      display: flex;&#xD;&#xA;      align-items: center;&#xD;&#xA;      justify-content: center;&#xD;&#xA;      height: 100%;&#xD;&#xA;    }&#xD;&#xA;    #main-search-form input {&#xD;&#xA;      text-align: center;&#xD;&#xA;      font-family: "Roboto", sans-serif;&#xD;&#xA;      color: #ffffff;&#xD;&#xA;    }&#xD;&#xA;    #main-search-form input::-webkit-input-placeholder {&#xD;&#xA;      /* Chrome/Opera/Safari */&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      text-align: center;&#xD;&#xA;      font-style: italic;&#xD;&#xA;    }&#xD;&#xA;    #main-search-form input::-moz-placeholder {&#xD;&#xA;      /* Firefox 19+ */&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      text-align: center;&#xD;&#xA;      font-style: italic;&#xD;&#xA;    }&#xD;&#xA;    #main-search-form input:-ms-input-placeholder {&#xD;&#xA;      /* IE 10+ */&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    #main-search-form input:-moz-placeholder {&#xD;&#xA;      /* Firefox 18- */&#xD;&#xA;      color: #ffffff;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    .move {&#xD;&#xA;      transition: all 0.6s ease;&#xD;&#xA;      position: fixed;&#xD;&#xA;      top: 0;&#xD;&#xA;      left: 0;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;      width: 100%;&#xD;&#xA;      display: flex;&#xD;&#xA;    }