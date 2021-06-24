    body {&#xD;&#xA;        background-color: #eee;&#xD;&#xA;    }&#xD;&#xA;    .container {&#xD;&#xA;        width: 370px;&#xD;&#xA;        height: 550px;&#xD;&#xA;        background: darkgray;&#xD;&#xA;        z-index: -2;&#xD;&#xA;        margin: 0 auto;&#xD;&#xA;        border-radius: 20px;&#xD;&#xA;    }&#xD;&#xA;    /*  *   * TOP BAR  *   *   */&#xD;&#xA;    .top-bar {&#xD;&#xA;        height: 50px;&#xD;&#xA;        width: 100%;&#xD;&#xA;        background:  #00b0ff;&#xD;&#xA;        display: flex;&#xD;&#xA;        align-items: center;&#xD;&#xA;        z-index: 999;&#xD;&#xA;        border-top-left-radius: inherit;&#xD;&#xA;        border-top-right-radius: inherit;&#xD;&#xA;    }&#xD;&#xA;    .top-bar-ico {&#xD;&#xA;        width: 50px;&#xD;&#xA;        text-align: center;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;        z-index: 999;&#xD;&#xA;    }&#xD;&#xA;    .toggle-color {&#xD;&#xA;        color: white;&#xD;&#xA;    }&#xD;&#xA;    /*  *   *   *   *   */&#xD;&#xA;    /*  *   *  MENU *   *   */&#xD;&#xA;    .menu {&#xD;&#xA;        height: 500px;&#xD;&#xA;        transition: 0.5s linear;&#xD;&#xA;        width: 0;&#xD;&#xA;        z-index: 999;&#xD;&#xA;        display: flex;&#xD;&#xA;        flex-direction: column;&#xD;&#xA;        padding: 0 5px;&#xD;&#xA;    }&#xD;&#xA;    .active-menu {&#xD;&#xA;        width: 90%;&#xD;&#xA;        background:  #00b0ff;&#xD;&#xA;        z-index: 999;&#xD;&#xA;        border-bottom-left-radius: inherit;&#xD;&#xA;    }&#xD;&#xA;    .active-menu > * {&#xD;&#xA;        background-color: white;&#xD;&#xA;    }&#xD;&#xA;    /*  *   *   *   *   */&#xD;&#xA;    /*  *   * MENU ITEMS  *   *   */&#xD;&#xA;    .menu > .item {&#xD;&#xA;        height: 50px;&#xD;&#xA;    }&#xD;&#xA;    .item:not(:first-child)  {&#xD;&#xA;        margin-top: 10px;&#xD;&#xA;    }&#xD;&#xA;    .item {&#xD;&#xA;        display: grid;&#xD;&#xA;        grid-template-columns: 50px 1fr;&#xD;&#xA;        grid-gap: 5px;&#xD;&#xA;    }&#xD;&#xA;    /*  *   *   *   *   */