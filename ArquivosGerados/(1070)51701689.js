     <nav>&#xD;&#xA;                <div class="container">&#xD;&#xA;                    <a href="#" id="brand">Brand</a>&#xD;&#xA;                    <button>&#xD;&#xA;                        <span></span>&#xD;&#xA;                        <span></span>&#xD;&#xA;                        <span></span>&#xD;&#xA;                    </button>&#xD;&#xA;        &#xD;&#xA;                    <ul class="navbar-menu">&#xD;&#xA;                        <li>&#xD;&#xA;                            <a href="#">Home</a>&#xD;&#xA;                        </li>&#xD;&#xA;                        <li>&#xD;&#xA;                            <a href="#">About</a>&#xD;&#xA;                        </li>&#xD;&#xA;                        <li>&#xD;&#xA;                            <a href="#">Team</a>&#xD;&#xA;                        </li>&#xD;&#xA;                        <li>&#xD;&#xA;                            <a href="#">Timeline</a>&#xD;&#xA;                        </li>&#xD;&#xA;                        <li>&#xD;&#xA;                            <a href="#">Conact</a>&#xD;&#xA;                        </li>&#xD;&#xA;                    </ul>&#xD;&#xA;        &#xD;&#xA;                </div>&#xD;&#xA;            </nav>&#xD;&#xA;          <script>&#xD;&#xA;                document.addEventListener("DOMContentLoaded", function () {&#xD;&#xA;                    'use strict';&#xD;&#xA;                    var c, currentScrollTop = 0;&#xD;&#xA;                    var navbar = document.querySelector(".nav");&#xD;&#xA;                    window.addEventListener('scroll', function () {&#xD;&#xA;                        var a = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;&#xD;&#xA;                        var b = navbar.hight();&#xD;&#xA;                        currentScrollTop = a;&#xD;&#xA;                        if (c < currentScrollTop && a > b + b) {&#xD;&#xA;                            navbar.addClass("scrollUp");&#xD;&#xA;                        }&#xD;&#xA;                        else if (c > currentScrollTop && !(a <= b)) {&#xD;&#xA;                            navbar.removeClass("scrollUp");&#xD;&#xA;                        }&#xD;&#xA;                        c = currentScrollTop;&#xD;&#xA;        &#xD;&#xA;                    });&#xD;&#xA;        &#xD;&#xA;                });&#xD;&#xA;        &#xD;&#xA;        &#xD;&#xA;            </script>