    @charset "utf-8";&#xD;&#xA;    body {&#xD;&#xA;      font-family: tahoma;&#xD;&#xA;      color:#282828;&#xD;&#xA;      margin: 0px;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .nav { &#xD;&#xA;        display: flex;&#xD;&#xA;        width: 100%;&#xD;&#xA;        height: 50%;&#xD;&#xA;        justify-content: center;&#xD;&#xA;    }&#xD;&#xA;    .nav > nav {&#xD;&#xA;        padding: 20px;&#xD;&#xA;        align-self: center;&#xD;&#xA;        border: 1px solid #000000;&#xD;&#xA;        margin: 0 10px 0 0;&#xD;&#xA;        transition: background 0.2s ease-in-out;&#xD;&#xA;    }&#xD;&#xA;    .nav > nav:hover {&#xD;&#xA;        cursor: pointer;&#xD;&#xA;        background: #cecece;&#xD;&#xA;    }&#xD;&#xA;    nav.active-nav.active, .active {&#xD;&#xA;      background: #cecece;&#xD;&#xA;    }&#xD;&#xA;    .contentDetails {&#xD;&#xA;        margin: 40px;&#xD;&#xA;        height: 100%;&#xD;&#xA;        display: block;&#xD;&#xA;        position: absolute;&#xD;&#xA;    }&#xD;&#xA;    /* SLIDE IN OUT */&#xD;&#xA;    .slide-enter {&#xD;&#xA;      transform: translate(100%, 0%);&#xD;&#xA;      opacity: 1;&#xD;&#xA;    }&#xD;&#xA;    .slide-leave-to {&#xD;&#xA;      transform: translate(-100%, -0%);&#xD;&#xA;      opacity: 0;&#xD;&#xA;    }&#xD;&#xA;    .slide-leave-active,&#xD;&#xA;    .slide-enter-active {&#xD;&#xA;      position: absolute;&#xD;&#xA;      transition: transform 1s ease-in-out, &#xD;&#xA;                  opacity 0.2s ease-in-out;&#xD;&#xA;    }&#xD;&#xA;      &#xD;&#xA;    /* FLIP IT */&#xD;&#xA;    .flipit-enter,&#xD;&#xA;    .flipit-leave-to {&#xD;&#xA;      opacity: 0;&#xD;&#xA;      transform: rotateY(50deg);&#xD;&#xA;    }&#xD;&#xA;    .flipit-enter-to,&#xD;&#xA;    .flipit-leave {&#xD;&#xA;      opacity: 1;&#xD;&#xA;      transform: rotateY(0deg);&#xD;&#xA;    }&#xD;&#xA;    .flipit-enter-active,&#xD;&#xA;    .flipit-leave-active {&#xD;&#xA;      transition: opacity, transform 200ms ease-out;&#xD;&#xA;    }&#xD;&#xA;    /* SLIDE UP */&#xD;&#xA;    .slideup-enter,&#xD;&#xA;    .slideup-leave-to {&#xD;&#xA;      opacity: 0;&#xD;&#xA;      position: absolute;&#xD;&#xA;      right: -9999px&#xD;&#xA;    }&#xD;&#xA;    .slideup-enter-to,&#xD;&#xA;    .slideup-leave {&#xD;&#xA;      opacity: 1;&#xD;&#xA;      right: 0;&#xD;&#xA;    }&#xD;&#xA;    .slideup-enter-active,&#xD;&#xA;    .slideup-leave-active {&#xD;&#xA;      transition: right, transform 200ms ease-in-out;&#xD;&#xA;    }