       .multi-item-carousel{&#xD;&#xA;      .carousel-inner{&#xD;&#xA;        > .item{&#xD;&#xA;          transition:  ease-in-out left;&#xD;&#xA;        }&#xD;&#xA;        .active{&#xD;&#xA;          &.left{&#xD;&#xA;            left:-33%;&#xD;&#xA;          }&#xD;&#xA;          &.right{&#xD;&#xA;            left:33%;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        .next{&#xD;&#xA;          left: 33%;&#xD;&#xA;        }&#xD;&#xA;        .prev{&#xD;&#xA;          left: -33%;&#xD;&#xA;        }&#xD;&#xA;        @media all and (transform-3d), (-webkit-transform-3d) {&#xD;&#xA;          > .item{&#xD;&#xA;            // use your favourite prefixer here&#xD;&#xA;            transition: 500ms ease-in-out left;&#xD;&#xA;            transition: 500ms ease-in-out all;&#xD;&#xA;            backface-visibility: visible;&#xD;&#xA;            transform: none!important;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      .carouse-control{&#xD;&#xA;        &.left, &.right{&#xD;&#xA;          background-image: none;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    // non-related styling:&#xD;&#xA;    body{&#xD;&#xA;      background: #333;&#xD;&#xA;      color: #ddd;&#xD;&#xA;    }&#xD;&#xA;    h1{&#xD;&#xA;      color: white;&#xD;&#xA;      font-size: 2.25em;&#xD;&#xA;      text-align: center;&#xD;&#xA;      margin-top: 1em;&#xD;&#xA;      margin-bottom: 2em;&#xD;&#xA;      text-shadow: 0px 2px 0px rgba(0, 0, 0, 1);&#xD;&#xA;    }