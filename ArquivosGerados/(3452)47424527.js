    html, body, div {&#xD;&#xA;        margin: 0px;&#xD;&#xA;        padding: 0px;&#xD;&#xA;    }&#xD;&#xA;    body {&#xD;&#xA;        width: 100vw;&#xD;&#xA;        height: 100vh;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    div.progress {&#xD;&#xA;        max-width:300px;&#xD;&#xA;        width: 100vw;&#xD;&#xA;        &#xD;&#xA;        float: left;&#xD;&#xA;        position: relative;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;        height: 100%;&#xD;&#xA;        background-image: url("https://i.imgur.com/SKfSqEv.jpg");&#xD;&#xA;        background-size: 500px;&#xD;&#xA;        border-right: 1px solid black;&#xD;&#xA;    }&#xD;&#xA;    div.progress div.top {&#xD;&#xA;        height: 100vh;&#xD;&#xA;        position: relative;&#xD;&#xA;        bottom: 100%;&#xD;&#xA;    }&#xD;&#xA;    div.progress div.top div.white{&#xD;&#xA;        background-color: white;&#xD;&#xA;        width:100%;&#xD;&#xA;        height:100%;&#xD;&#xA;    }&#xD;&#xA;    div.progress div.top div.beer-top {&#xD;&#xA;        /*background-image is at the bottom since it is bse64 */&#xD;&#xA;        background-repeat: repeat-x;&#xD;&#xA;        background-position-y: bottom;&#xD;&#xA;        background-position-x: left;&#xD;&#xA;        background-size: 302px, 100px;&#xD;&#xA;        height: 100px;&#xD;&#xA;    }&#xD;&#xA;    /*div.progress div.top {&#xD;&#xA;        background-position: bottom;&#xD;&#xA;        height: 100%;&#xD;&#xA;        background-image: url("img/beer-top.png");&#xD;&#xA;    }*/&#xD;&#xA;    div.main {&#xD;&#xA;        float: left;&#xD;&#xA;    }&#xD;&#xA;    div.progress div.top div.beer-top {&#xD;&#xA;        background-image:  url('https://preview.ibb.co/k2x2V6/beer_top.png');&#xD;&#xA;    }