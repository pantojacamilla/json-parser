    body&#xD;&#xA;    {&#xD;&#xA;        font-family:arial;&#xD;&#xA;    }&#xD;&#xA;    .flipswitch&#xD;&#xA;    {&#xD;&#xA;        position: relative;&#xD;&#xA;        background: white;&#xD;&#xA;        width: 120px;&#xD;&#xA;        height: 40px;&#xD;&#xA;        -webkit-appearance: initial;&#xD;&#xA;        border-radius: 3px;&#xD;&#xA;        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);&#xD;&#xA;        outline:none;&#xD;&#xA;        font-size: 14px;&#xD;&#xA;        font-family: Trebuchet, Arial, sans-serif;&#xD;&#xA;        font-weight: bold;&#xD;&#xA;        cursor:pointer;&#xD;&#xA;        border:1px solid #ddd;&#xD;&#xA;    }&#xD;&#xA;    .flipswitch:indeterminate:after&#xD;&#xA;    {&#xD;&#xA;        position:absolute;&#xD;&#xA;        top:5%;&#xD;&#xA;        display:block; &#xD;&#xA;        line-height:32px;&#xD;&#xA;        width:45%;&#xD;&#xA;        height:90%;&#xD;&#xA;        box-sizing:border-box;&#xD;&#xA;        text-align:center;&#xD;&#xA;        color:black;&#xD;&#xA;        border:#888 1px solid;&#xD;&#xA;        border-radius:3px;&#xD;&#xA;    }&#xD;&#xA;    .flipswitch:not(:indeterminate):after&#xD;&#xA;    {&#xD;&#xA;        position:absolute;&#xD;&#xA;        top:5%;&#xD;&#xA;        display:block; &#xD;&#xA;        line-height:32px;&#xD;&#xA;        width:45%;&#xD;&#xA;        height:90%;&#xD;&#xA;        box-sizing:border-box;&#xD;&#xA;        text-align:center;&#xD;&#xA;        transition: all 0.3s ease-in 0s; &#xD;&#xA;        color:black;&#xD;&#xA;        border:#888 1px solid;&#xD;&#xA;        border-radius:3px;&#xD;&#xA;    }&#xD;&#xA;    .flipswitch:indeterminate:after&#xD;&#xA;    {&#xD;&#xA;      left:30%;&#xD;&#xA;      content:"???";&#xD;&#xA;      background:grey;&#xD;&#xA;    }&#xD;&#xA;    .flipswitch:not(:indeterminate):after&#xD;&#xA;    {&#xD;&#xA;        left:2%;&#xD;&#xA;        content: "OFF";&#xD;&#xA;        background:#f00;&#xD;&#xA;    }&#xD;&#xA;    .flipswitch:not(:indeterminate):checked:after&#xD;&#xA;    {&#xD;&#xA;        left:53%;&#xD;&#xA;        content: "ON";  &#xD;&#xA;        background:#0f0;&#xD;&#xA;    }