    .todo {text-align: center;}&#xD;&#xA;    ul {list-style: none;}&#xD;&#xA;    .complete {color: green;}&#xD;&#xA;    li:hover {cursor: pointer;}&#xD;&#xA;    .complete {&#xD;&#xA;      position: relative;&#xD;&#xA;    }&#xD;&#xA;    .complete:before {&#xD;&#xA;      position: absolute;&#xD;&#xA;      content: "";&#xD;&#xA;      left: 0;&#xD;&#xA;      top: 50%;&#xD;&#xA;      right: 0;&#xD;&#xA;      border-top: 1px solid;&#xD;&#xA;      border-color: inherit;&#xD;&#xA;      &#xD;&#xA;      -webkit-transform:rotate(-5deg);&#xD;&#xA;      -moz-transform:rotate(-5deg);&#xD;&#xA;      -ms-transform:rotate(-5deg);&#xD;&#xA;      -o-transform:rotate(-5deg);&#xD;&#xA;      transform:rotate(-5deg);&#xD;&#xA;    }