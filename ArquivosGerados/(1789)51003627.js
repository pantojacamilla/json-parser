    *,&#xD;&#xA;    *::after,&#xD;&#xA;    *::before {&#xD;&#xA;      -webkit-box-sizing: border-box;&#xD;&#xA;      -moz-box-sizing: border-box;&#xD;&#xA;      box-sizing: border-box;&#xD;&#xA;    }&#xD;&#xA;    html {&#xD;&#xA;      font-size: 62.5%;&#xD;&#xA;    }&#xD;&#xA;    body {&#xD;&#xA;      font-size: 1.6rem;&#xD;&#xA;      font-family: "Open Sans", sans-serif;&#xD;&#xA;      color: #2c343b;&#xD;&#xA;      background-color: #f2f2f2;&#xD;&#xA;    }&#xD;&#xA;    a {&#xD;&#xA;      color: #d44457;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    img {&#xD;&#xA;      max-width: 100%;&#xD;&#xA;    }&#xD;&#xA;    ul {&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;    }&#xD;&#xA;    li {&#xD;&#xA;      list-style: none;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero {&#xD;&#xA;      height: 300px;&#xD;&#xA;      width: 100%;&#xD;&#xA;      padding-left: 0px;&#xD;&#xA;      padding-right: 0px;&#xD;&#xA;      position: relative;&#xD;&#xA;      -webkit-font-smoothing: antialiased;&#xD;&#xA;      -moz-osx-font-smoothing: grayscale;&#xD;&#xA;      background-color: rgba(0, 0, 0, 0.03);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider {&#xD;&#xA;      position: relative;&#xD;&#xA;      height: 100%;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li {&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: 0;&#xD;&#xA;      left: 0;&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 100%;&#xD;&#xA;      -webkit-transform: translateX(100%);&#xD;&#xA;      -moz-transform: translateX(100%);&#xD;&#xA;      -ms-transform: translateX(100%);&#xD;&#xA;      -o-transform: translateX(100%);&#xD;&#xA;      transform: translateX(100%);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.selected {&#xD;&#xA;      /* this is the visible slide */&#xD;&#xA;      position: relative;&#xD;&#xA;      -webkit-transform: translateX(0);&#xD;&#xA;      -moz-transform: translateX(0);&#xD;&#xA;      -ms-transform: translateX(0);&#xD;&#xA;      -o-transform: translateX(0);&#xD;&#xA;      transform: translateX(0);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.move-left {&#xD;&#xA;      /* slide hidden on the left */&#xD;&#xA;      -webkit-transform: translateX(-100%);&#xD;&#xA;      -moz-transform: translateX(-100%);&#xD;&#xA;      -ms-transform: translateX(-100%);&#xD;&#xA;      -o-transform: translateX(-100%);&#xD;&#xA;      transform: translateX(-100%);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.is-moving,&#xD;&#xA;    .cd-hero-slider li.selected {&#xD;&#xA;      /* the is-moving class is assigned to the slide which is moving outside the viewport */&#xD;&#xA;      -webkit-transition: -webkit-transform 0.5s;&#xD;&#xA;      -moz-transition: -moz-transform 0.5s;&#xD;&#xA;      transition: transform 0.5s;&#xD;&#xA;    }&#xD;&#xA;    /* --------------------------------&#xD;&#xA;    Single slide style&#xD;&#xA;    -------------------------------- */&#xD;&#xA;    .cd-hero-slider li {&#xD;&#xA;      background-position: center center;&#xD;&#xA;      background-size: cover;&#xD;&#xA;      background-repeat: no-repeat;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .cd-full-width,&#xD;&#xA;    .cd-hero-slider .cd-half-width {&#xD;&#xA;      position: absolute;&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 100%;&#xD;&#xA;      z-index: 1;&#xD;&#xA;      left: 0;&#xD;&#xA;      top: 0;&#xD;&#xA;      text-align: center;&#xD;&#xA;      -webkit-backface-visibility: hidden;&#xD;&#xA;      backface-visibility: hidden;&#xD;&#xA;      -webkit-transform: translateZ(0);&#xD;&#xA;      -moz-transform: translateZ(0);&#xD;&#xA;      -ms-transform: translateZ(0);&#xD;&#xA;      -o-transform: translateZ(0);&#xD;&#xA;      transform: translateZ(0);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .cd-half-width {&#xD;&#xA;      width: 45%;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .cd-half-width:first-of-type {&#xD;&#xA;      left: 5%;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .cd-half-width:nth-of-type(2) {&#xD;&#xA;      right: 5%;&#xD;&#xA;      left: auto;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .cd-content {&#xD;&#xA;      position: relative;&#xD;&#xA;      top: calc(50% - 30px);&#xD;&#xA;      transform: translateY(-52%) !important;&#xD;&#xA;      padding: 0 50px;&#xD;&#xA;    }&#xD;&#xA;    /*&#xD;&#xA;        animations & transitions&#xD;&#xA;    */&#xD;&#xA;    .cd-hero-slider .cd-half-width {&#xD;&#xA;      opacity: 0;&#xD;&#xA;      -webkit-transform: translateX(40px);&#xD;&#xA;      -moz-transform: translateX(40px);&#xD;&#xA;      -ms-transform: translateX(40px);&#xD;&#xA;      -o-transform: translateX(40px);&#xD;&#xA;      transform: translateX(40px);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .move-left .cd-half-width {&#xD;&#xA;      -webkit-transform: translateX(-40px);&#xD;&#xA;      -moz-transform: translateX(-40px);&#xD;&#xA;      -ms-transform: translateX(-40px);&#xD;&#xA;      -o-transform: translateX(-40px);&#xD;&#xA;      transform: translateX(-40px);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .selected .cd-half-width {&#xD;&#xA;      /* this is the visible slide */&#xD;&#xA;      opacity: 1;&#xD;&#xA;      -webkit-transform: translateX(0);&#xD;&#xA;      -moz-transform: translateX(0);&#xD;&#xA;      -ms-transform: translateX(0);&#xD;&#xA;      -o-transform: translateX(0);&#xD;&#xA;      transform: translateX(0);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .is-moving .cd-half-width {&#xD;&#xA;      /* this is the slide moving outside the viewport&#xD;&#xA;        wait for the end of the transition on the <li> parent before set opacity to 0 and translate to 40px/-40px */&#xD;&#xA;      -webkit-transition: opacity 0s 0.5s, -webkit-transform 0s 0.5s;&#xD;&#xA;      -moz-transition: opacity 0s 0.5s, -moz-transform 0s 0.5s;&#xD;&#xA;      transition: opacity 0s 0.5s, transform 0s 0.5s;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.selected.from-left .cd-half-width:nth-of-type(2),&#xD;&#xA;    .cd-hero-slider li.selected.from-right .cd-half-width:first-of-type {&#xD;&#xA;      /* this is the selected slide - different animation if it's entering from left or right */&#xD;&#xA;      -webkit-transition: opacity 0.4s 0.2s, -webkit-transform 0.5s 0.2s;&#xD;&#xA;      -moz-transition: opacity 0.4s 0.2s, -moz-transform 0.5s 0.2s;&#xD;&#xA;      transition: opacity 0.4s 0.2s, transform 0.5s 0.2s;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.selected.from-left .cd-half-width:first-of-type,&#xD;&#xA;    .cd-hero-slider li.selected.from-right .cd-half-width:nth-of-type(2) {&#xD;&#xA;      /* this is the selected slide - different animation if it's entering from left or right */&#xD;&#xA;      -webkit-transition: opacity 0.4s 0.4s, -webkit-transform 0.5s 0.4s;&#xD;&#xA;      -moz-transition: opacity 0.4s 0.4s, -moz-transform 0.5s 0.4s;&#xD;&#xA;      transition: opacity 0.4s 0.4s, transform 0.5s 0.4s;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .cd-full-width h1,&#xD;&#xA;    .cd-hero-slider .cd-full-width h2,&#xD;&#xA;    .cd-hero-slider .cd-full-width h3,&#xD;&#xA;    .cd-hero-slider .cd-full-width h4,&#xD;&#xA;    .cd-hero-slider .cd-full-width h5,&#xD;&#xA;    .cd-hero-slider .cd-full-width h6,&#xD;&#xA;    .cd-hero-slider .cd-full-width p,&#xD;&#xA;    .cd-hero-slider .cd-full-width a,&#xD;&#xA;    .cd-hero-slider .cd-full-width .button {&#xD;&#xA;      opacity: 0;&#xD;&#xA;      -webkit-transform: translateX(100px);&#xD;&#xA;      -moz-transform: translateX(100px);&#xD;&#xA;      -ms-transform: translateX(100px);&#xD;&#xA;      -o-transform: translateX(100px);&#xD;&#xA;      transform: translateX(100px);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width h1,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width h2,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width h3,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width h4,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width h5,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width h6,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width p,&#xD;&#xA;    .cd-hero-slider .move-left .cd-full-width .button {&#xD;&#xA;      opacity: 0;&#xD;&#xA;      -webkit-transform: translateX(-100px);&#xD;&#xA;      -moz-transform: translateX(-100px);&#xD;&#xA;      -ms-transform: translateX(-100px);&#xD;&#xA;      -o-transform: translateX(-100px);&#xD;&#xA;      transform: translateX(-100px);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width h1,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width h2,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width h3,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width h4,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width h5,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width h6,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width p,&#xD;&#xA;    .cd-hero-slider .selected .cd-full-width .button {&#xD;&#xA;      /* this is the visible slide */&#xD;&#xA;      opacity: 1;&#xD;&#xA;      -webkit-transform: translateX(0);&#xD;&#xA;      -moz-transform: translateX(0);&#xD;&#xA;      -ms-transform: translateX(0);&#xD;&#xA;      -o-transform: translateX(0);&#xD;&#xA;      transform: translateX(0);&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width h1,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width h2,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width h3,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width h4,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width h5,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width h6,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width p,&#xD;&#xA;    .cd-hero-slider li.is-moving .cd-full-width .button {&#xD;&#xA;      /* this is the slide moving outside the viewport&#xD;&#xA;        wait for the end of the transition on the li parent before set opacity to 0 and translate to 100px/-100px */&#xD;&#xA;      -webkit-transition: opacity 0s 0.5s, -webkit-transform 0s 0.5s;&#xD;&#xA;      -moz-transition: opacity 0s 0.5s, -moz-transform 0s 0.5s;&#xD;&#xA;      transition: opacity 0s 0.5s, transform 0s 0.5s;&#xD;&#xA;    }&#xD;&#xA;    /* different timings for different elements */&#xD;&#xA;    .cd-hero-slider li.selected h1,&#xD;&#xA;    .cd-hero-slider li.selected h2,&#xD;&#xA;    .cd-hero-slider li.selected h3,&#xD;&#xA;    .cd-hero-slider li.selected h4,&#xD;&#xA;    .cd-hero-slider li.selected h5,&#xD;&#xA;    .cd-hero-slider li.selected h6 {&#xD;&#xA;      -webkit-transition: opacity 0.4s 0.2s, -webkit-transform 0.5s 0.2s;&#xD;&#xA;      -moz-transition: opacity 0.4s 0.2s, -moz-transform 0.5s 0.2s;&#xD;&#xA;      transition: opacity 0.4s 0.2s, transform 0.5s 0.2s;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.selected p {&#xD;&#xA;      -webkit-transition: opacity 0.4s 0.3s, -webkit-transform 0.5s 0.3s;&#xD;&#xA;      -moz-transition: opacity 0.4s 0.3s, -moz-transform 0.5s 0.3s;&#xD;&#xA;      transition: opacity 0.4s 0.3s, transform 0.5s 0.3s;&#xD;&#xA;    }&#xD;&#xA;    .cd-hero-slider li.selected .button,&#xD;&#xA;    .cd-hero-slider li.selected input[type="button"],&#xD;&#xA;    .cd-hero-slider li.selected button {&#xD;&#xA;      -webkit-transition: opacity 0.4s 0.4s, -webkit-transform 0.5s 0.4s, background-color 0.2s 0s;&#xD;&#xA;      -moz-transition: opacity 0.4s 0.4s, -moz-transform 0.5s 0.4s, background-color 0.2s 0s;&#xD;&#xA;      transition: opacity 0.4s 0.4s, transform 0.5s 0.4s, background-color 0.2s 0s;&#xD;&#xA;    }&#xD;&#xA;    /*&#xD;&#xA;        slider navigation&#xD;&#xA;    */&#xD;&#xA;    .cd-slider-nav {&#xD;&#xA;      position: absolute;&#xD;&#xA;      width: 100%;&#xD;&#xA;      bottom: 0;&#xD;&#xA;      z-index: 2;&#xD;&#xA;      text-align: center;&#xD;&#xA;      height: 30px;&#xD;&#xA;    }&#xD;&#xA;    .cd-slider-nav nav {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      position: relative;&#xD;&#xA;      height: 100%;&#xD;&#xA;    }&#xD;&#xA;    .cd-slider-nav a {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      float: left;&#xD;&#xA;      width: 15px;&#xD;&#xA;      height: 15px;&#xD;&#xA;      margin: 5px;&#xD;&#xA;      border-radius: 50%;&#xD;&#xA;      background-color: rgba(0, 0, 0, 0.2);&#xD;&#xA;    }&#xD;&#xA;    .cd-slider-nav a.selected {&#xD;&#xA;      background-color: rgba(0, 0, 0, 0.5);&#xD;&#xA;    }&#xD;&#xA;    /* --------------------------------&#xD;&#xA;    Javascript disabled&#xD;&#xA;    -------------------------------- */&#xD;&#xA;    .no-js .cd-hero-slider li {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    .no-js .cd-hero-slider li.selected {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .no-js .cd-slider-nav {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    @import 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,900';&#xD;&#xA;    body {&#xD;&#xA;      margin: 0px 0px 0px 0px;&#xD;&#xA;    }&#xD;&#xA;    .nav2 {&#xD;&#xA;      width: 100%;&#xD;&#xA;      transition: top 0.2s ease-out;&#xD;&#xA;    }&#xD;&#xA;    .banner {&#xD;&#xA;      text-align: center;&#xD;&#xA;      width: 100%;&#xD;&#xA;      box-shadow: inset 0px -1px 0px 0px rgba(0, 0, 0, 0.13);&#xD;&#xA;    }&#xD;&#xA;    .nav2 ul#menu {&#xD;&#xA;      padding-left: 0;&#xD;&#xA;      display: flex;&#xD;&#xA;    }&#xD;&#xA;    .nav2 .ul2 .li2 {&#xD;&#xA;      flex-grow: 1;&#xD;&#xA;    }&#xD;&#xA;    .nav-bar {&#xD;&#xA;      /* Rectangle 1: */&#xD;&#xA;      background: #FFFFFF;&#xD;&#xA;      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.11), 0px 4px 6px 0px rgba(0, 0, 0, 0.11);&#xD;&#xA;      width: 100%;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    //-------------------------------------------------------&#xD;&#xA;    /*Strip the ul of padding and list styling*/&#xD;&#xA;    .ul2 {&#xD;&#xA;      list-style-type: none;&#xD;&#xA;      margin: 0;&#xD;&#xA;      position: absolute;&#xD;&#xA;    }&#xD;&#xA;    /*Create a horizontal list with spacing*/&#xD;&#xA;    .li2 {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      float: center;&#xD;&#xA;    }&#xD;&#xA;    /*Style for menu links*/&#xD;&#xA;    .li2 .a2 {&#xD;&#xA;      display: block;&#xD;&#xA;      min-width: 140px;&#xD;&#xA;      height: 50px;&#xD;&#xA;      text-align: center;&#xD;&#xA;      line-height: 50px;&#xD;&#xA;      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;&#xD;&#xA;      color: #fff;&#xD;&#xA;      background: #2f3036;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    /*Hover state for top level links*/&#xD;&#xA;    .li2:hover .a2 {&#xD;&#xA;      background: #19c589;&#xD;&#xA;    }&#xD;&#xA;    /*Style for dropdown links*/&#xD;&#xA;    .li2:hover .ul2 .a2 {&#xD;&#xA;      background: #f3f3f3;&#xD;&#xA;      color: #2f3036;&#xD;&#xA;      height: 40px;&#xD;&#xA;      line-height: 40px;&#xD;&#xA;    }&#xD;&#xA;    /*Hover state for dropdown links*/&#xD;&#xA;    .li2:hover .ul2 .a2:hover {&#xD;&#xA;      background: #19c589;&#xD;&#xA;      color: #fff;&#xD;&#xA;    }&#xD;&#xA;    /*Hide dropdown links until they are needed*/&#xD;&#xA;    .li2 .ul2 {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /*Make dropdown links vertical*/&#xD;&#xA;    .li2 .ul2 .li2 {&#xD;&#xA;      display: block;&#xD;&#xA;      float: none;&#xD;&#xA;    }&#xD;&#xA;    /*Prevent text wrapping*/&#xD;&#xA;    .li2 .ul2 .li2 .a2 {&#xD;&#xA;      width: auto;&#xD;&#xA;      min-width: 100px;&#xD;&#xA;    }&#xD;&#xA;    /*Display the dropdown on hover*/&#xD;&#xA;    .ul2 .li2 .a2:hover+.hidden,&#xD;&#xA;    .hidden:hover {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    /*Style 'show menu' label button and hide it by default*/&#xD;&#xA;    .show-menu {&#xD;&#xA;      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      color: #fff;&#xD;&#xA;      background: #19c589;&#xD;&#xA;      text-align: center;&#xD;&#xA;      padding-left: 0px;&#xD;&#xA;      padding-right: 0px;&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /*Hide checkbox*/&#xD;&#xA;    input[type=checkbox] {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /*Show menu when invisible checkbox is checked*/&#xD;&#xA;    input[type=checkbox]:checked~#menu {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    /*Responsive Styles*/&#xD;&#xA;    @media screen and (max-width: 760px) {&#xD;&#xA;      /*Make dropdown links appear inline*/&#xD;&#xA;      .nav2 .ul2#menu {&#xD;&#xA;        position: static;&#xD;&#xA;        display: none;&#xD;&#xA;      }&#xD;&#xA;      /*Create vertical spacing*/&#xD;&#xA;      .li2 {&#xD;&#xA;        margin-bottom: 0px;&#xD;&#xA;      }&#xD;&#xA;      /*Make all menu links full width*/&#xD;&#xA;      .ul2 .li2,&#xD;&#xA;      .li2 .a2 {&#xD;&#xA;        width: 100%;&#xD;&#xA;      }&#xD;&#xA;      /*Display 'show menu' link*/&#xD;&#xA;      .show-menu {&#xD;&#xA;        display: block;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .hero-image {&#xD;&#xA;      /* The image used */&#xD;&#xA;      /* Set a specific height */&#xD;&#xA;      height: 50%;&#xD;&#xA;      width: 100%;&#xD;&#xA;      /* Position and center the image to scale nicely on all screens */&#xD;&#xA;      background-position: center;&#xD;&#xA;      background-repeat: no-repeat;&#xD;&#xA;      background-size: cover;&#xD;&#xA;      position: relative;&#xD;&#xA;      vertical-align: top;&#xD;&#xA;    }&#xD;&#xA;    #menu {&#xD;&#xA;      margin: 0;&#xD;&#xA;    }&#xD;&#xA;    @charset "UTF-8";&#xD;&#xA;    /* CSS Document */&#xD;&#xA;    .wrapper {&#xD;&#xA;      display: grid;&#xD;&#xA;      grid-template-columns: 40% 1fr 1fr;&#xD;&#xA;      grid-template-rows: 250px 250px;&#xD;&#xA;      grid-template-areas: "box-1 box-2 box-4" "box-1 box-3 box-5";&#xD;&#xA;      width: 1500px;&#xD;&#xA;    }&#xD;&#xA;    .box-1 {&#xD;&#xA;      grid-area: box-1;&#xD;&#xA;      background-color: #e5e5e5;&#xD;&#xA;    }&#xD;&#xA;    .box-2 {&#xD;&#xA;      grid-area: box-2;&#xD;&#xA;      background-color: #ffbe88;&#xD;&#xA;    }&#xD;&#xA;    .box-3 {&#xD;&#xA;      grid-area: box-3;&#xD;&#xA;      background-color: #8ae1ff;&#xD;&#xA;    }&#xD;&#xA;    .box-4 {&#xD;&#xA;      grid-area: box-4;&#xD;&#xA;      background-color: #ff8a8a;&#xD;&#xA;    }&#xD;&#xA;    .box-5 {&#xD;&#xA;      grid-area: box-5;&#xD;&#xA;      background-color: #8aff95;&#xD;&#xA;    }&#xD;&#xA;    *,&#xD;&#xA;    *::before,&#xD;&#xA;    *::after {&#xD;&#xA;      box-sizing: border-box;&#xD;&#xA;    }&#xD;&#xA;    html {}&#xD;&#xA;    body {&#xD;&#xA;      text-rendering: optimizeLegibility;&#xD;&#xA;      -webkit-font-smoothing: antialiased;&#xD;&#xA;      -moz-osx-font-smoothing: grayscale;&#xD;&#xA;      -moz-font-feature-settings: "liga" on;&#xD;&#xA;    }&#xD;&#xA;    img {&#xD;&#xA;      height: auto;&#xD;&#xA;      max-width: 100%;&#xD;&#xA;      vertical-align: middle;&#xD;&#xA;    }&#xD;&#xA;    .btn {&#xD;&#xA;      background-color: white;&#xD;&#xA;      border: 1px solid #cccccc;&#xD;&#xA;      color: #696969;&#xD;&#xA;      padding: 0.5rem;&#xD;&#xA;      text-transform: lowercase;&#xD;&#xA;    }&#xD;&#xA;    .btn--block {&#xD;&#xA;      display: block;&#xD;&#xA;      width: 100%;&#xD;&#xA;    }&#xD;&#xA;    .cards {&#xD;&#xA;      display: flex;&#xD;&#xA;      flex-wrap: wrap;&#xD;&#xA;      list-style: none;&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;    }&#xD;&#xA;    .cards__item {&#xD;&#xA;      display: flex;&#xD;&#xA;      padding: 1rem;&#xD;&#xA;    }&#xD;&#xA;    @media (min-width: 40rem) {&#xD;&#xA;      .cards__item {&#xD;&#xA;        width: 50%;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @media (min-width: 56rem) {&#xD;&#xA;      .cards__item {&#xD;&#xA;        width: 33.3333%;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .card {&#xD;&#xA;      background-color: white;&#xD;&#xA;      border-radius: 0.25rem;&#xD;&#xA;      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);&#xD;&#xA;      display: flex;&#xD;&#xA;      flex-direction: column;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .card:hover .card__image {&#xD;&#xA;      -webkit-filter: contrast(100%);&#xD;&#xA;      filter: contrast(100%);&#xD;&#xA;    }&#xD;&#xA;    .card__content {&#xD;&#xA;      display: flex;&#xD;&#xA;      flex: 1 1 auto;&#xD;&#xA;      flex-direction: column;&#xD;&#xA;      padding: 1rem;&#xD;&#xA;    }&#xD;&#xA;    .card__image {&#xD;&#xA;      background-position: center center;&#xD;&#xA;      background-repeat: no-repeat;&#xD;&#xA;      background-size: cover;&#xD;&#xA;      border-top-left-radius: 0.25rem;&#xD;&#xA;      border-top-right-radius: 0.25rem;&#xD;&#xA;      -webkit-filter: contrast(70%);&#xD;&#xA;      filter: contrast(70%);&#xD;&#xA;      overflow: hidden;&#xD;&#xA;      position: relative;&#xD;&#xA;      transition: -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);&#xD;&#xA;      transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);&#xD;&#xA;      transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);&#xD;&#xA;    }&#xD;&#xA;    .card__image::before {&#xD;&#xA;      content: "";&#xD;&#xA;      display: block;&#xD;&#xA;      padding-top: 56.25%;&#xD;&#xA;    }&#xD;&#xA;    @media (min-width: 40rem) {&#xD;&#xA;      .card__image::before {&#xD;&#xA;        padding-top: 66.6%;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .card__image--flowers {&#xD;&#xA;      background-image: url(https://unsplash.it/800/600?image=82);&#xD;&#xA;    }&#xD;&#xA;    .card__image--river {&#xD;&#xA;      background-image: url(https://unsplash.it/800/600?image=11);&#xD;&#xA;    }&#xD;&#xA;    .card__image--record {&#xD;&#xA;      background-image: url(https://unsplash.it/800/600?image=39);&#xD;&#xA;    }&#xD;&#xA;    .card__image--fence {&#xD;&#xA;      background-image: url(https://unsplash.it/800/600?image=59);&#xD;&#xA;    }&#xD;&#xA;    .card__title {&#xD;&#xA;      color: #696969;&#xD;&#xA;      font-size: 1.25rem;&#xD;&#xA;      font-weight: 300;&#xD;&#xA;      letter-spacing: 2px;&#xD;&#xA;      text-transform: uppercase;&#xD;&#xA;    }&#xD;&#xA;    .card__text {&#xD;&#xA;      flex: 1 1 auto;&#xD;&#xA;      font-size: 0.875rem;&#xD;&#xA;      line-height: 1.5;&#xD;&#xA;      margin-bottom: 1.25rem;&#xD;&#xA;    }