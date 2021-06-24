    body {&#xD;&#xA;      margin: auto;&#xD;&#xA;      min-width: 250px;&#xD;&#xA;    }&#xD;&#xA;    /* Include the padding and border in an element's total width and height */&#xD;&#xA;    * {&#xD;&#xA;      box-sizing: border-box;&#xD;&#xA;    }&#xD;&#xA;    /* Remove margins and padding from the list */&#xD;&#xA;    ul {&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;    }&#xD;&#xA;    /* Style the list items */&#xD;&#xA;    ul li {&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      position: relative;&#xD;&#xA;      padding: 12px 8px 12px 40px;&#xD;&#xA;      list-style-type: none;&#xD;&#xA;      background: #eee;&#xD;&#xA;      font-size: 18px;&#xD;&#xA;      transition: 0.2s;&#xD;&#xA;      &#xD;&#xA;      /* make the list items unselectable */&#xD;&#xA;      -webkit-user-select: none;&#xD;&#xA;      -moz-user-select: none;&#xD;&#xA;      -ms-user-select: none;&#xD;&#xA;      user-select: none;&#xD;&#xA;    }&#xD;&#xA;    /* Set all odd list items to a different color (zebra-stripes) */&#xD;&#xA;    ul li:nth-child(odd) {&#xD;&#xA;      background: #f9f9f9;&#xD;&#xA;    }&#xD;&#xA;    /* Darker background-color on hover */&#xD;&#xA;    ul li:hover {&#xD;&#xA;      background: #ddd;&#xD;&#xA;    }&#xD;&#xA;    /* When clicked on, add a background color and strike out text */&#xD;&#xA;    ul li.checked {&#xD;&#xA;      background: #888;&#xD;&#xA;      color: #fff;&#xD;&#xA;      text-decoration: line-through;&#xD;&#xA;    }&#xD;&#xA;    /* Style the close button */&#xD;&#xA;    .close {&#xD;&#xA;      position: absolute;&#xD;&#xA;      right: 0px;&#xD;&#xA;      top: 0;&#xD;&#xA;      padding: 12px 16px 12px 16px;&#xD;&#xA;    }&#xD;&#xA;    .close:hover {&#xD;&#xA;      background-color: #f44336;&#xD;&#xA;      color: white;&#xD;&#xA;    }&#xD;&#xA;    /* Style the header */&#xD;&#xA;    .header {&#xD;&#xA;      background-color: grey;&#xD;&#xA;      padding: 30px 40px;&#xD;&#xA;      color: white;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    /* Clear floats after the header */&#xD;&#xA;    .header:after {&#xD;&#xA;      content: "";&#xD;&#xA;      display: table;&#xD;&#xA;      clear: both;&#xD;&#xA;    }&#xD;&#xA;    /* Style the input */&#xD;&#xA;    input {&#xD;&#xA;      border: none;&#xD;&#xA;      width: 75%;&#xD;&#xA;      padding: 10px;&#xD;&#xA;      float: left;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;    }&#xD;&#xA;    /* Style the "Add" button */&#xD;&#xA;    .addBtn {&#xD;&#xA;      padding: 10px;&#xD;&#xA;      width: 25%;&#xD;&#xA;      background: #d9d9d9;&#xD;&#xA;      color: #555;&#xD;&#xA;      float: left;&#xD;&#xA;      text-align: center;&#xD;&#xA;      font-size: 16px;&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      transition: 0.3s;&#xD;&#xA;    }&#xD;&#xA;    .addBtn:hover {&#xD;&#xA;      background-color: #bbb;&#xD;&#xA;    }&#xD;&#xA;    .footer {&#xD;&#xA;        position: fixed;&#xD;&#xA;        left: 0;&#xD;&#xA;        bottom: 0;&#xD;&#xA;        width: 100%;&#xD;&#xA;    }