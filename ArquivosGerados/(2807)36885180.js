        .square { &#xD;&#xA;            border: 5px solid red;&#xD;&#xA;            position: relative;&#xD;&#xA;            text-align: center;&#xD;&#xA;            /*width: 50%;*/&#xD;&#xA;          }&#xD;&#xA;        .square:after {&#xD;&#xA;        content: "";&#xD;&#xA;        display: block;&#xD;&#xA;        padding-bottom: 100%;&#xD;&#xA;          }&#xD;&#xA;          .content {&#xD;&#xA;            position: absolute;&#xD;&#xA;            width: 200px;&#xD;&#xA;            height: 200px;&#xD;&#xA;            border:solid blue 1px;&#xD;&#xA;            font-size: 2em;&#xD;&#xA;            top:0%;&#xD;&#xA;            left:0%;&#xD;&#xA;            padding-top: 0%;&#xD;&#xA;          }&#xD;&#xA;        .col-xs-15 {&#xD;&#xA;            width: 20%;&#xD;&#xA;            float: left;&#xD;&#xA;        }&#xD;&#xA;        @media screen and (min-width: 768px) {&#xD;&#xA;        .col-sm-15 {&#xD;&#xA;            width: 20%;&#xD;&#xA;            float: left;&#xD;&#xA;        }&#xD;&#xA;        }&#xD;&#xA;        @media screen and (min-width: 992px) {&#xD;&#xA;        .col-md-15 {&#xD;&#xA;            width: 20%;&#xD;&#xA;            float: left;&#xD;&#xA;        }&#xD;&#xA;        }&#xD;&#xA;        @media screen and (min-width: 1200px) {&#xD;&#xA;        .col-lg-15 {&#xD;&#xA;            width: 20%;&#xD;&#xA;            float: left;&#xD;&#xA;        }&#xD;&#xA;        }