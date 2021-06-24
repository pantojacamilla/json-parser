    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>&#xD;&#xA;    <div class="menu-container">&#xD;&#xA;      <input type="checkbox" id="menuCheck">&#xD;&#xA;      <label for="menuCheck" class="menu-label">&#xD;&#xA;                        <svg version="1.1" id="menuIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"&#xD;&#xA;                             width="40px" height="20px" viewbox="0 0 500 310" enable-background="new 0 0 500 310" xml:space="preserve">&#xD;&#xA;                        <line id="topPath" fill="none" stroke="#6D6D6D" stroke-width="40" stroke-miterlimit="10" x1="3" y1="21.695" x2="498" y2="21.695"/>&#xD;&#xA;                        <line id="midPath" fill="none" stroke="#6D6D6D" stroke-width="40" stroke-miterlimit="10" x1="3" y1="154.5" x2="498" y2="154.5"/>&#xD;&#xA;                        <line id="botPath" fill="none" stroke="#6D6D6D" stroke-width="40" stroke-miterlimit="10" x1="3" y1="287.305" x2="498" y2="287.305"/>&#xD;&#xA;                        </svg>&#xD;&#xA;                    </label>&#xD;&#xA;      <div class="menu-nav-container">&#xD;&#xA;        <svg version="1.1" id="menuNav" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25" height="260" viewbox="0 0 22.333 500" enable-background="new 0 0 22.333 500" xml:space="preserve">&#xD;&#xA;                            <line id="line" fill="none" stroke="#6D6D6D" stroke-width="2" stroke-miterlimit="10" x1="10.948" y1="1" x2="10.948" y2="307"/>&#xD;&#xA;                            <circle id="ball" fill="#6D6D6D" cx="10.948" cy="28.16" r="8.636"/>&#xD;&#xA;                        </svg>&#xD;&#xA;        <ul class="menu-list">&#xD;&#xA;          <li class="menu-item" id="home"><a href="#homeCont" class="scroll-to inactive active" onclick="changeMenu('homeCont', 'ballHome')">Home</a></li>&#xD;&#xA;          <li class="menu-item" id="work"><a href="#workCont" class="scroll-to inactive" onclick="changeMenu('workCont', 'ballWork')">Work</a></li>&#xD;&#xA;          <li class="menu-item" id="about"><a href="#aboutCont" class="scroll-to inactive" onclick="changeMenu('aboutCont', 'ballAbout')">About</a></li>&#xD;&#xA;        </ul>&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    <div class="content-container home-container col-12" id="homeCont">&#xD;&#xA;                    <div class="particle-bg"></div>&#xD;&#xA;                    <div class="logo-container">&#xD;&#xA;                        <img class="logo" src="img/dSteynLogo.png">&#xD;&#xA;                        <h1 class="logo-heading">darian steyn</h1>&#xD;&#xA;                    </div>&#xD;&#xA;                    &#xD;&#xA;                    <a href="#workCont" class="scroll-down toWork scroll-to"></a>&#xD;&#xA;                </div><!--END OF HOME CONTAINER-->&#xD;&#xA;                &#xD;&#xA;                <div class="content-container work-container col-12" id="workCont">&#xD;&#xA;                    &#xD;&#xA;                    <a href="#aboutCont" class="scroll-down toAbout scroll-to"></a>&#xD;&#xA;                </div><!--END OF WORK CONTAINER-->&#xD;&#xA;                &#xD;&#xA;                <div class="content-container about-container col-12" id="aboutCont">&#xD;&#xA;                &#xD;&#xA;                </div><!--END OF ABOUT CONTAINER-->