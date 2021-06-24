    @font-face {&#xD;&#xA;      font-family: myDirector;&#xD;&#xA;      src: url('https://raw.githubusercontent.com/Y-Taras/FreeCodeCamp/master/Simon/fonts/myDirector-Bold.otf');&#xD;&#xA;    }&#xD;&#xA;    #outerCircle {&#xD;&#xA;        display: flex;&#xD;&#xA;        flex-wrap: wrap;&#xD;&#xA;        margin: 0 auto;&#xD;&#xA;        width: 560px;&#xD;&#xA;        border: 2px dotted grey;&#xD;&#xA;        position: relative;&#xD;&#xA;    }&#xD;&#xA;    .bigButton {&#xD;&#xA;        height: 250px;&#xD;&#xA;        width: 250px;&#xD;&#xA;        border: solid #464646;&#xD;&#xA;        transition: all 1s;&#xD;&#xA;        -webkit-transition: all 1s;&#xD;&#xA;        -moz-transition: all 1s;&#xD;&#xA;        -o-transition: background-color 0.5s ease;&#xD;&#xA;    }&#xD;&#xA;    #greenButton {&#xD;&#xA;        background-color: rgb(9, 174, 37);&#xD;&#xA;        border-radius: 100% 0 0 0;&#xD;&#xA;        border-width: 20px 10px 10px 20px;&#xD;&#xA;    }&#xD;&#xA;    .liteGreen#greenButton {&#xD;&#xA;        background-color: #86f999;&#xD;&#xA;    }&#xD;&#xA;    #redButton {&#xD;&#xA;        background-color: rgb(174, 9, 15);&#xD;&#xA;        border-radius: 0 100% 0 0;&#xD;&#xA;        border-width: 20px 20px 10px 10px;&#xD;&#xA;    }&#xD;&#xA;    .liteRed#redButton {&#xD;&#xA;        background-color: #f9868a;&#xD;&#xA;    }&#xD;&#xA;    #yellowButton {&#xD;&#xA;        background-color: rgb(174, 174, 9);&#xD;&#xA;        border-radius: 0 0 0 100%;&#xD;&#xA;        border-width: 10px 10px 20px 20px;&#xD;&#xA;    }&#xD;&#xA;    .liteYell#yellowButton {&#xD;&#xA;        background-color: #f9f986;&#xD;&#xA;    }&#xD;&#xA;    #blueButton {&#xD;&#xA;        background-color: rgb(9, 37, 174);&#xD;&#xA;        border-radius: 0 0 100% 0;&#xD;&#xA;        border-width: 10px 20px 20px 10px;&#xD;&#xA;    }&#xD;&#xA;    .liteBlue#blueButton {&#xD;&#xA;        background-color: #8699f9;&#xD;&#xA;    }&#xD;&#xA;    div#innerCircle {&#xD;&#xA;        border: 15px solid #464646;&#xD;&#xA;        border-radius: 50%;&#xD;&#xA;        position: absolute;&#xD;&#xA;        top: 25%;&#xD;&#xA;        right: 25%;&#xD;&#xA;        background-color: #c4c7ce;&#xD;&#xA;    }&#xD;&#xA;    div.additionalBorder {&#xD;&#xA;        margin: 4px;&#xD;&#xA;        border-radius: 50%;&#xD;&#xA;        height: 242px;&#xD;&#xA;        width: 242px;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    p#tradeMark {&#xD;&#xA;        margin: auto;&#xD;&#xA;        height: 104px;&#xD;&#xA;        text-align: center;&#xD;&#xA;        font-size: 68px;&#xD;&#xA;        font-family: myDirector;&#xD;&#xA;        color: #c4c7ce;&#xD;&#xA;        background-color: black;&#xD;&#xA;        border-color: antiquewhite;&#xD;&#xA;        line-height: 162px;&#xD;&#xA;    }&#xD;&#xA;    span#reg {&#xD;&#xA;        font-size: 12px;&#xD;&#xA;    }&#xD;&#xA;    .partition {&#xD;&#xA;        height: 6px;&#xD;&#xA;    }&#xD;&#xA;    .buttons {&#xD;&#xA;        height: 128px;&#xD;&#xA;        border-radius: 0 0 128px 128px;&#xD;&#xA;        border: 2px solid black;&#xD;&#xA;    }&#xD;&#xA;    /* Start and Strict buttons*/&#xD;&#xA;    table {&#xD;&#xA;        margin-left: 5px;&#xD;&#xA;    }&#xD;&#xA;    td {&#xD;&#xA;        text-align: center;&#xD;&#xA;        width: auto;&#xD;&#xA;        padding: 2px 10px;&#xD;&#xA;        vertical-align: bottom;&#xD;&#xA;    }&#xD;&#xA;    div.innerCount {&#xD;&#xA;        width: 54px;&#xD;&#xA;        height: 40px;&#xD;&#xA;        background-color: #34000e;&#xD;&#xA;        color: crimson;&#xD;&#xA;        border-radius: 11px;&#xD;&#xA;        font-size: 28px;&#xD;&#xA;        line-height: 42px;&#xD;&#xA;        text-align: center;&#xD;&#xA;        font-family: 'Segment7Standard', italic;&#xD;&#xA;    }&#xD;&#xA;    button#innerStart {&#xD;&#xA;        width: 27px;&#xD;&#xA;        height: 27px;&#xD;&#xA;        border: 4px solid #404241;&#xD;&#xA;        border-radius: 50%;&#xD;&#xA;        background: #a50005;&#xD;&#xA;        box-shadow: 0 0 3px gray;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;    }&#xD;&#xA;    div.strict {&#xD;&#xA;        display: flex;&#xD;&#xA;        flex-direction: column;&#xD;&#xA;        justify-content: center;&#xD;&#xA;        align-items: center;&#xD;&#xA;    }&#xD;&#xA;    button#strictButton {&#xD;&#xA;        width: 27px;&#xD;&#xA;        height: 27px;&#xD;&#xA;        border: 4px solid #404241;&#xD;&#xA;        border-radius: 50%;&#xD;&#xA;        background: yellow;&#xD;&#xA;        box-shadow: 0 0 3px gray;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;    }&#xD;&#xA;    div#strictIndicator {&#xD;&#xA;        width: 6px;&#xD;&#xA;        height: 6px;&#xD;&#xA;        margin-bottom: 2px;&#xD;&#xA;        background-color: #850000;&#xD;&#xA;        border-radius: 50%;&#xD;&#xA;        border: 1px solid #5f5f5f;&#xD;&#xA;    }&#xD;&#xA;    #switcher {&#xD;&#xA;        display: flex;&#xD;&#xA;        justify-content: center;&#xD;&#xA;        align-items: center;&#xD;&#xA;    }&#xD;&#xA;    .labels {&#xD;&#xA;        font-family: 'Roboto', sans-serif;&#xD;&#xA;        margin: 4px;&#xD;&#xA;    }&#xD;&#xA;    /* toggle switch */&#xD;&#xA;    .checkbox > input[type=checkbox] {&#xD;&#xA;        visibility: hidden;&#xD;&#xA;    }&#xD;&#xA;    .checkbox {&#xD;&#xA;        display: inline-block;&#xD;&#xA;        position: relative;&#xD;&#xA;        width: 60px;&#xD;&#xA;        height: 30px;&#xD;&#xA;        border: 2px solid #424242;&#xD;&#xA;    }&#xD;&#xA;    .checkbox > label {&#xD;&#xA;        position: absolute;&#xD;&#xA;        width: 30px;&#xD;&#xA;        height: 26px;&#xD;&#xA;        top: 2px;&#xD;&#xA;        right: 2px;&#xD;&#xA;        background-color: #a50005;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;    }&#xD;&#xA;    .checkbox > input[type=checkbox]:checked + label {&#xD;&#xA;        right: 28px;&#xD;&#xA;    }