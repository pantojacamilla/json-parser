    <nav>&#xD;&#xA;      <div class="navButtons">&#xD;&#xA;          <div id="about">about</div>&#xD;&#xA;          <div id="portfolio">portfolio</div>&#xD;&#xA;          <div id="contact">contact</div>&#xD;&#xA;      </div>   &#xD;&#xA;    </nav>&#xD;&#xA;    &#xD;&#xA; <!-- language: lang-js -->&#xD;&#xA;    &#xD;&#xA;    document.getElementsByClassName("navButtons").addEventListener("mouseover", mouseOver);&#xD;&#xA;    document.getElementsByClassName("navButtons").addEventListener("mouseout", mouseOut);&#xD;&#xA;    &#xD;&#xA;    function mouseOver() {&#xD;&#xA;        document.getElementsByClassName("navButtons").style.color = "red";&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    function mouseOut() {&#xD;&#xA;        document.getElementsByClassName("navButtons").style.color = "black";&#xD;&#xA;    }