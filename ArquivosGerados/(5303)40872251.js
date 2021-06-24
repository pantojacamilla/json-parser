    @charset "utf-8";&#xD;&#xA;     * {&#xD;&#xA;      margin: 0;&#xD;&#xA;      padding: 0;&#xD;&#xA;      list-style: none;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;    }&#xD;&#xA;    /* Uporabno za Sticky footer na koncu internetne strani */&#xD;&#xA;    html,&#xD;&#xA;    body {&#xD;&#xA;      height: 100%;&#xD;&#xA;    }&#xD;&#xA;    body {&#xD;&#xA;      padding-top: 30px;&#xD;&#xA;      text-align: left;&#xD;&#xA;      font-size: 100%;&#xD;&#xA;      font-family: "Trebuchet MD", Arial, Helvetica, sans-serif;&#xD;&#xA;    }&#xD;&#xA;    /* Vse kar je v glavi internetne strani oziroma slika glave */&#xD;&#xA;    .header {&#xD;&#xA;      width: 90%;&#xD;&#xA;      margin: auto;&#xD;&#xA;      padding-bottom: 10px;&#xD;&#xA;    }&#xD;&#xA;    .header img {&#xD;&#xA;      width: 100%;&#xD;&#xA;    }&#xD;&#xA;    /* Konec glave internetne strani*/&#xD;&#xA;    /* Vse kar je v glavnem menuju internetne strani */&#xD;&#xA;    .full {&#xD;&#xA;      background-color: #00528b;&#xD;&#xA;      height: 70px;&#xD;&#xA;      width: 85%;&#xD;&#xA;      margin: auto;&#xD;&#xA;      border-radius: 5px;&#xD;&#xA;    }&#xD;&#xA;    .mainheader {&#xD;&#xA;      height: 70px;&#xD;&#xA;      background-color: #00528b;&#xD;&#xA;      border-radius: 5px;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav ul {&#xD;&#xA;      height: 70px;&#xD;&#xA;      width: 714px;&#xD;&#xA;      margin: auto;&#xD;&#xA;      z-index: 1000;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav ul ul.hidden {&#xD;&#xA;      position: absolute;&#xD;&#xA;    }&#xD;&#xA;    /* Skrij podmenuje dokler jih ne potrebuješ */&#xD;&#xA;    .mainheader nav ul li ul {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /* Oblika podmenujev */&#xD;&#xA;    .mainheader nav ul li:hover ul li {&#xD;&#xA;      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);&#xD;&#xA;      max-width: 200px;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav ul li:hover ul a {&#xD;&#xA;      color: #000;&#xD;&#xA;      font-size: 18px;&#xD;&#xA;      background-color: #fff;&#xD;&#xA;      padding: 5px;&#xD;&#xA;    }&#xD;&#xA;    /* Hover za povezave v podmenujih */&#xD;&#xA;    .mainheader nav ul li:hover ul a:hover {&#xD;&#xA;      background-color: #777;&#xD;&#xA;    }&#xD;&#xA;    /* Pokaži podmenuje ko je potrebno */&#xD;&#xA;    /* + izberi vse .hidden in .hidden:hover takoj po .mainheader nav ul li a:hover */&#xD;&#xA;    .mainheader nav ul li a:hover + .hidden,&#xD;&#xA;    .hidden:hover {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    /* Podmenuji se postavijo v vertikalo */&#xD;&#xA;    .mainheader nav ul li ul li {&#xD;&#xA;      display: block;&#xD;&#xA;      float: none;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav ul li ul li a {&#xD;&#xA;      width: auto;&#xD;&#xA;      min-width: 100px;&#xD;&#xA;      padding: 0 20px;&#xD;&#xA;      text-align: left;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav ul li {&#xD;&#xA;      display: inline-block;&#xD;&#xA;      float: left;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav a:link,&#xD;&#xA;    .mainheader nav a:visited {&#xD;&#xA;      color: #fff;&#xD;&#xA;      display: block;&#xD;&#xA;      padding: 24.5px 6px 16px 5px;&#xD;&#xA;      font-size: 18px;&#xD;&#xA;    }&#xD;&#xA;    .mainheader nav a:hover {&#xD;&#xA;      color: #777;&#xD;&#xA;    }&#xD;&#xA;    /* Oblika show-menu in skrij ga po defoltu */&#xD;&#xA;    .show-menu {&#xD;&#xA;      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;&#xD;&#xA;      font-size: 18px;&#xD;&#xA;      color: #fff;&#xD;&#xA;      padding: 24.5px 6px 16px 5px;&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      text-align: center;&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /* Skrij checkbox */&#xD;&#xA;    input[type=checkbox] {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    /* Interaktivna menujska vrstica */&#xD;&#xA;    @media screen and (max-width: 853px) {&#xD;&#xA;      /* Prikaži show-menu oziroma menujsko vrstico */&#xD;&#xA;      input[type=checkbox]:checked ~ #menu {&#xD;&#xA;        display: block;&#xD;&#xA;      }&#xD;&#xA;      .header {&#xD;&#xA;        width: 100%;&#xD;&#xA;      }&#xD;&#xA;      .full {&#xD;&#xA;        width: 95%;&#xD;&#xA;      }&#xD;&#xA;      /* Podmenuji se postavijo v linijo */&#xD;&#xA;      nav ul {&#xD;&#xA;        display: none;&#xD;&#xA;      }&#xD;&#xA;      /* Oblika pod podmenujev */&#xD;&#xA;      .mainheader nav ul {&#xD;&#xA;        width: 100%;&#xD;&#xA;      }&#xD;&#xA;      .mainheader nav ul li ul.hidden li a {&#xD;&#xA;        width: auto;&#xD;&#xA;      }&#xD;&#xA;      .mainheader nav ul li a:hover + .hidden,&#xD;&#xA;      .hidden:hover {&#xD;&#xA;        width: 200px;&#xD;&#xA;      }&#xD;&#xA;      /* Ustvari vertikalne presledke */&#xD;&#xA;      nav li {&#xD;&#xA;        background: #00528b;&#xD;&#xA;      }&#xD;&#xA;      nav li a {&#xD;&#xA;        text-align: center;&#xD;&#xA;      }&#xD;&#xA;      /* Ustvari vse povezave v popolni širini */&#xD;&#xA;      nav ul li {&#xD;&#xA;        width: 100%;&#xD;&#xA;        text-align: center;&#xD;&#xA;      }&#xD;&#xA;      nav ul li ul li {&#xD;&#xA;        width: auto;&#xD;&#xA;        background-color: #777;&#xD;&#xA;        margin-top: 0px;&#xD;&#xA;      }&#xD;&#xA;      /* Pokaži 'show menu' povezave */&#xD;&#xA;      .show-menu {&#xD;&#xA;        display: block;&#xD;&#xA;        cursor: pointer;&#xD;&#xA;      }&#xD;&#xA;      /* Oblika podmenuja, ki omogoča slideToggle */&#xD;&#xA;      li.bottom-radius {&#xD;&#xA;        border-bottom-left-radius: 5px;&#xD;&#xA;        border-bottom-right-radius: 5px;&#xD;&#xA;      }&#xD;&#xA;      #menu {&#xD;&#xA;        height: 494px;&#xD;&#xA;        border-top: 1px solid #fff;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    /* Konec glavnega menuja internetne strani */