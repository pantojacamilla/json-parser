    html,&#xD;&#xA;    body {&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;    &#xD;&#xA;      background: #C2B3A0;&#xD;&#xA;    }&#xD;&#xA;    /*user-select: none;*/&#xD;&#xA;    /*background: url(bg.jpg);*/&#xD;&#xA;    #cupboard {&#xD;&#xA;        height: 613px;&#xD;&#xA;        width: 617px;&#xD;&#xA;        position: relative;&#xD;&#xA;        left: 35%;&#xD;&#xA;        margin-left: -112px;&#xD;&#xA;        top: 24px;&#xD;&#xA;        bottom: 31px;&#xD;&#xA;        perspective: 500;&#xD;&#xA;        background: url(bg.png);&#xD;&#xA;        background-position: center center;&#xD;&#xA;        background-size: 95%;&#xD;&#xA;        background-repeat: no-repeat;&#xD;&#xA;        background-attachment: fixed;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    #cupboard img {&#xD;&#xA;        position: inherit;&#xD;&#xA;        height: 200px;&#xD;&#xA;        width: 200px;&#xD;&#xA;        float:left;&#xD;&#xA;        margin-left: 62px;&#xD;&#xA;        margin-top: 82px;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    #cupboard .door#left {&#xD;&#xA;      zoom:.6;&#xD;&#xA;      position: absolute;&#xD;&#xA;      width: 512px;&#xD;&#xA;      height: 100%;&#xD;&#xA;      background-image: url(dl.jpg);&#xD;&#xA;      transition: transform 1s ease;&#xD;&#xA;      transform: rotateY(0);&#xD;&#xA;    }&#xD;&#xA;    #cupboard .door#right {&#xD;&#xA;      zoom:.6;&#xD;&#xA;      position: absolute;&#xD;&#xA;      width: 517px;&#xD;&#xA;      height: 100%;&#xD;&#xA;      background-image: url(dr.jpg);&#xD;&#xA;      transition: transform 1s ease;&#xD;&#xA;      transform: rotateY(0);&#xD;&#xA;    }&#xD;&#xA;    #cupboard .door#left {&#xD;&#xA;      transform-origin: top left;&#xD;&#xA;      left: 0;&#xD;&#xA;    }&#xD;&#xA;    #cupboard .door#right {&#xD;&#xA;      transform-origin: top right;&#xD;&#xA;      right: 0;&#xD;&#xA;    }&#xD;&#xA;    #cupboard:hover #left,&#xD;&#xA;    #cupboard.hover #left {&#xD;&#xA;      -webkit-transform: rotateY(-90deg);&#xD;&#xA;      transform: rotateY(-90deg);&#xD;&#xA;    }&#xD;&#xA;    #cupboard:hover #right,&#xD;&#xA;    #cupboard.hover #right {&#xD;&#xA;      -webkit-transform: rotateY(90deg);&#xD;&#xA;      transform: rotateY(90deg);&#xD;&#xA;    }