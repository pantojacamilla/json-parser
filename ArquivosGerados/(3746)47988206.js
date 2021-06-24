    body {&#xD;&#xA;        padding: 0;&#xD;&#xA;        margin: 0;&#xD;&#xA;    }&#xD;&#xA;    #all {&#xD;&#xA;        width: 680px;&#xD;&#xA;        margin-left: auto;&#xD;&#xA;        margin-right: auto;&#xD;&#xA;    }&#xD;&#xA;    #page-flip {&#xD;&#xA;        &#xD;&#xA;        position: absolute;&#xD;&#xA;        padding: 40px 40px 40px 0;&#xD;&#xA;        width: 300px;&#xD;&#xA;        height: 400px;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #r1 {&#xD;&#xA;        position: absolute;&#xD;&#xA;        z-index: 2;&#xD;&#xA;        -webkit-transform-origin: 1315px 500px;&#xD;&#xA;        -webkit-transform: translate(-1030px, -500px) rotate(-32deg);&#xD;&#xA;        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;    }&#xD;&#xA;    #p1 {&#xD;&#xA;        width: 1285px;&#xD;&#xA;        height: 1388px;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #p1 > div {&#xD;&#xA;        -webkit-transform-origin: 285px 0;&#xD;&#xA;        -webkit-transform: translate(1030px, 500px) rotate(32deg);&#xD;&#xA;        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;        width: 285px;&#xD;&#xA;        height: 388px;&#xD;&#xA;        background-image: url(http://cssdeck.com/uploads/media/items/8/87WOlJH.jpg);&#xD;&#xA;    }&#xD;&#xA;    #p1 > div > div {&#xD;&#xA;        width: 10px;&#xD;&#xA;        height: 388px;&#xD;&#xA;        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), to(rgba(0,0,0,0)));&#xD;&#xA;    }&#xD;&#xA;    #p2 > div {&#xD;&#xA;        width: 285px;&#xD;&#xA;        height: 388px;&#xD;&#xA;        -webkit-box-shadow: 0 0 11px rgba(0, 0, 0, .5);&#xD;&#xA;        position: absolute;&#xD;&#xA;        z-index: 1;&#xD;&#xA;        background-image: url(http://cssdeck.com/uploads/media/items/4/4FpEEbu.jpg);&#xD;&#xA;    }&#xD;&#xA;    #r3 {&#xD;&#xA;        -webkit-transform-origin: 1315px 500px;&#xD;&#xA;        -webkit-transform: translate(-1030px, -500px) rotate(-32deg);&#xD;&#xA;        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;        position: absolute;&#xD;&#xA;        z-index: 2;&#xD;&#xA;    }&#xD;&#xA;    #s3 {&#xD;&#xA;        -webkit-transform-origin: 70px 500px;&#xD;&#xA;        -webkit-transform: translate(215px, -500px) rotate(-32deg) translate(40px, 0);&#xD;&#xA;        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;        position: absolute;&#xD;&#xA;        z-index: 1;&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #s3 {&#xD;&#xA;        -webkit-transform-origin: 325px 500px;&#xD;&#xA;        -webkit-transform: translate(-40px, -500px) rotate(0deg) translate(40px, 0);&#xD;&#xA;    }&#xD;&#xA;    #sp3 {&#xD;&#xA;        width: 25px;&#xD;&#xA;        height: 1000px;&#xD;&#xA;        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), to(rgba(0,0,0,0))); &#xD;&#xA;        -webkit-transition-property: width;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #sp3 { width: 11px }&#xD;&#xA;    .s {&#xD;&#xA;        width: 285px;&#xD;&#xA;        height: 388px;&#xD;&#xA;        position: absolute;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;        z-index: 3;&#xD;&#xA;    }&#xD;&#xA;    #s2 {&#xD;&#xA;        -webkit-transform-origin: 45px 500px;&#xD;&#xA;        -webkit-transform: translate(240px, -500px) rotate(-32deg);&#xD;&#xA;        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;        position: absolute;&#xD;&#xA;    }&#xD;&#xA;    #sp2 {&#xD;&#xA;        width: 15px;&#xD;&#xA;        height: 1000px;&#xD;&#xA;        background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .18)), to(rgba(0,0,0,0)));&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #s4 {&#xD;&#xA;        opacity: 1;&#xD;&#xA;        -webkit-transition-duration: 0.5s;&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #s4 { opacity: 0 }&#xD;&#xA;    #page-flip.active #s2 {&#xD;&#xA;        -webkit-transform-origin: 300px 500px;&#xD;&#xA;        -webkit-transform: translate(-15px, -500px) rotate(0deg);&#xD;&#xA;    }&#xD;&#xA;    #p3 {&#xD;&#xA;        width: 1285px;&#xD;&#xA;        height: 1388px;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #p3 > div {&#xD;&#xA;        -webkit-transform-origin: 0 0;&#xD;&#xA;        -webkit-transform: translate(1255px, 500px) rotate(-32deg);&#xD;&#xA;        -webkit-transition-property: -webkit-transform, -webkit-transform-origin;&#xD;&#xA;        -webkit-transition-duration: 1s;&#xD;&#xA;        -webkit-box-shadow: 0 0 11px rgba(0, 0, 0, .5);&#xD;&#xA;        width: 285px;&#xD;&#xA;        height: 388px;&#xD;&#xA;        background-image: url(http://cssdeck.com/uploads/media/items/6/6S8oF28.jpg);&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    #p3 > div > div {&#xD;&#xA;        width: 9px;&#xD;&#xA;        height: 500px;&#xD;&#xA;        float: right;&#xD;&#xA;        background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgba(0,0,0,.20)));&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #r1 {&#xD;&#xA;        -webkit-transform-origin: 1570px 500px;&#xD;&#xA;        -webkit-transform: translate(-1285px, -500px) rotate(0deg);&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #p1 > div {&#xD;&#xA;        -webkit-transform-origin: 285px 0;&#xD;&#xA;        -webkit-transform: translate(1285px, 500px) rotate(0deg);&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #r3 {&#xD;&#xA;        -webkit-transform-origin: 1570px 500px;&#xD;&#xA;        -webkit-transform: translate(-1285px, -500px) rotate(0deg);&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #p3 > div {&#xD;&#xA;        -webkit-transform-origin: 0 0;&#xD;&#xA;        -webkit-transform: translate(1000px, 500px) rotate(0deg);&#xD;&#xA;    }&#xD;&#xA;    a {&#xD;&#xA;        display: block;&#xD;&#xA;        position: absolute;&#xD;&#xA;        margin: -20000px 0 0 0;&#xD;&#xA;        padding: 1px;&#xD;&#xA;        z-index: 3;&#xD;&#xA;        -webkit-transition-property: margin;&#xD;&#xA;        -webkit-transition-duration: 0.01s;&#xD;&#xA;    }&#xD;&#xA;    #coke {&#xD;&#xA;        width: 253px;&#xD;&#xA;        height: 158px;&#xD;&#xA;    }&#xD;&#xA;    a:hover {&#xD;&#xA;        padding: 0;&#xD;&#xA;        border: 1px dotted #92C7C1;&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #coke {&#xD;&#xA;        -webkit-transition-delay: .8s;&#xD;&#xA;        margin: 33px 0 0 14px;&#xD;&#xA;    }&#xD;&#xA;    #meninas {&#xD;&#xA;        width: 253px;&#xD;&#xA;        height: 167px;&#xD;&#xA;    }&#xD;&#xA;    #page-flip.active #meninas {&#xD;&#xA;        -webkit-transition-delay: .8s;&#xD;&#xA;        margin: 203px 0 0 14px;&#xD;&#xA;    }