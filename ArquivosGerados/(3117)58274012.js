    .toggle-button-wrapper {&#xD;&#xA;        display: flex;&#xD;&#xA;    }&#xD;&#xA;    .toggle-btn-dark .toggle-button-wrapper {&#xD;&#xA;            margin-bottom: 0;&#xD;&#xA;            margin-right: 1rem;&#xD;&#xA;      }&#xD;&#xA;      .toggle-btn-dark .toggle-button {&#xD;&#xA;                display: inline-block;&#xD;&#xA;                text-decoration: none;&#xD;&#xA;                cursor: pointer;&#xD;&#xA;                display: flex;&#xD;&#xA;                align-items: center;&#xD;&#xA;                justify-content: center;&#xD;&#xA;                width: 3.6rem;&#xD;&#xA;                height: 2.4rem;&#xD;&#xA;                background-color: #ccc;&#xD;&#xA;                color: black;&#xD;&#xA;                &:hover {&#xD;&#xA;                    background-color: darken(#ccc, 5%);&#xD;&#xA;                }&#xD;&#xA;                &#xD;&#xA;            }&#xD;&#xA;            .toggle-btn-dark .toggle-button .icon {&#xD;&#xA;                    fill: black;&#xD;&#xA;                    margin: auto;&#xD;&#xA;                }&#xD;&#xA;      .toggle-btn-dark .toggle-button-selected {&#xD;&#xA;                background: purple;&#xD;&#xA;                fill: white;&#xD;&#xA;                color: white;&#xD;&#xA;                &:hover,&#xD;&#xA;                &:active {&#xD;&#xA;                    cursor: default;&#xD;&#xA;                    background-color: lighten(purple, 5%);&#xD;&#xA;                }&#xD;&#xA;               }&#xD;&#xA;     .toggle-btn-dark .toggle-button-selected .icon {&#xD;&#xA;          fill: white;&#xD;&#xA;      }&#xD;&#xA;     .toggle-btn-light.toggle-button-wrapper {&#xD;&#xA;            margin-bottom: 0;&#xD;&#xA;            margin-right: 1rem;&#xD;&#xA;            }&#xD;&#xA;            .toggle-btn-light .toggle-button {&#xD;&#xA;                border: 1px solid #ccc;&#xD;&#xA;                display: inline-block;&#xD;&#xA;                text-decoration: none;&#xD;&#xA;                cursor: pointer;&#xD;&#xA;                display: flex;&#xD;&#xA;                align-items: center;&#xD;&#xA;                justify-content: center;&#xD;&#xA;                width: 3.6rem;&#xD;&#xA;                height: 2.4rem;&#xD;&#xA;                background-color: pink;&#xD;&#xA;                color:  black;&#xD;&#xA;                &:hover {&#xD;&#xA;                    background-color: darken(pink, 5%);&#xD;&#xA;                }&#xD;&#xA;               }&#xD;&#xA;                .toggle-btn-light .toggle-button .icon {&#xD;&#xA;                    fill: black;&#xD;&#xA;                    margin: auto;&#xD;&#xA;                }&#xD;&#xA;         &#xD;&#xA;            .toggle-btn-light .toggle-button-selected {&#xD;&#xA;                background-color: hotpink;&#xD;&#xA;                color:  white;&#xD;&#xA;                &:hover,&#xD;&#xA;                &:active {&#xD;&#xA;                    cursor: default;&#xD;&#xA;                    background-color: darken(hotpink, 5%);&#xD;&#xA;                }&#xD;&#xA;                }&#xD;&#xA;        .toggle-btn-light .toggle-button-selected .icon {&#xD;&#xA;                    fill: white;&#xD;&#xA;                }&#xD;&#xA;    .toggle-button.first{&#xD;&#xA;            border-left-style: none;&#xD;&#xA;            border-top-left-radius: 1.4rem;&#xD;&#xA;            border-bottom-left-radius: 1.4rem;&#xD;&#xA;            border-top-right-radius: 0;&#xD;&#xA;            border-bottom-right-radius: 0;&#xD;&#xA;    }&#xD;&#xA;    .toggle-button.last  {&#xD;&#xA;            border-top-right-radius: 1.4rem;&#xD;&#xA;            border-bottom-right-radius: 1.4rem;&#xD;&#xA;            border-top-left-radius: 0;&#xD;&#xA;            border-bottom-left-radius: 0;&#xD;&#xA;    }