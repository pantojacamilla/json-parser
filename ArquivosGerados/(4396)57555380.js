    ul {&#xD;&#xA;      list-style-type: none;&#xD;&#xA;    }&#xD;&#xA;    #myUL {&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;    }&#xD;&#xA;    .box {&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      -webkit-user-select: none;&#xD;&#xA;      -moz-user-select: none;&#xD;&#xA;      -ms-user-select: none;&#xD;&#xA;      user-select: none;&#xD;&#xA;    }&#xD;&#xA;    .box::before {&#xD;&#xA;      content: "\2610";&#xD;&#xA;      color: black;&#xD;&#xA;      display: inline-block;&#xD;&#xA;      margin-right: 6px;&#xD;&#xA;    }&#xD;&#xA;    .check-box::before {&#xD;&#xA;      content: "\2611";&#xD;&#xA;      color: dodgerblue;&#xD;&#xA;    }&#xD;&#xA;    .nested {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    .active {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    #result {&#xD;&#xA;      font-size: 2em;&#xD;&#xA;    }