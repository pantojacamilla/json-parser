    /* When Class changed to slideUp, Animation will start */&#xD;&#xA;    .slideUp {&#xD;&#xA;      animation-name: slideUp;&#xD;&#xA;      -webkit-animation-name: slideUp;&#xD;&#xA;      animation-duration: 1s;&#xD;&#xA;      -webkit-animation-duration: 1s;&#xD;&#xA;      visibility: visible;&#xD;&#xA;    }&#xD;&#xA;    @keyframes slideUp {&#xD;&#xA;      0% {&#xD;&#xA;        opacity: 0;&#xD;&#xA;        -webkit-transform: translateY(70%);&#xD;&#xA;      }&#xD;&#xA;      100% {&#xD;&#xA;        opacity: 1;&#xD;&#xA;        -webkit-transform: translateY(0%);&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    @-webkit-keyframes slideUp {&#xD;&#xA;      0% {&#xD;&#xA;        opacity: 0;&#xD;&#xA;        -webkit-transform: translateY(70%);&#xD;&#xA;      }&#xD;&#xA;      100% {&#xD;&#xA;        opacity: 1;&#xD;&#xA;        -webkit-transform: translateY(0%);&#xD;&#xA;      }&#xD;&#xA;    }