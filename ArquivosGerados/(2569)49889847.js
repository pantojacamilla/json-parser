    .post {&#xD;&#xA;      position: relative;&#xD;&#xA;    }&#xD;&#xA;    .post .post__nav {&#xD;&#xA;      display: flex;&#xD;&#xA;      flex-wrap: wrap;&#xD;&#xA;      align-items: stretch;&#xD;&#xA;      width: 100px;&#xD;&#xA;    }&#xD;&#xA;    .post .post__nav a {&#xD;&#xA;      padding: 20px 0px;&#xD;&#xA;      text-align: center;&#xD;&#xA;      width: 100%;&#xD;&#xA;      cursor: pointer;&#xD;&#xA;    }&#xD;&#xA;    .post .post__nav a:hover,&#xD;&#xA;    .post .post__nav a.post__nav--selected {&#xD;&#xA;      color: #737d8b;&#xD;&#xA;      font-weight: 700;&#xD;&#xA;    }&#xD;&#xA;    .post .post__slide {&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: 0px;&#xD;&#xA;      left: 100px;&#xD;&#xA;      width: 0px;&#xD;&#xA;      display: flex;&#xD;&#xA;      flex-direction: column;&#xD;&#xA;      height: 100%;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;      opacity: 0;&#xD;&#xA;      transition: opacity 0.1s linear 0s;&#xD;&#xA;    }&#xD;&#xA;    .post .post__slide.post__slide--visible {&#xD;&#xA;      width: calc(100% - 100px);&#xD;&#xA;      overflow: scroll;&#xD;&#xA;      opacity: 1;&#xD;&#xA;    }