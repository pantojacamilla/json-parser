    <!DOCTYPE html>&#xD;&#xA;    <html lang="en">&#xD;&#xA;    <head>&#xD;&#xA;        <style>&#xD;&#xA;            *&#xD;&#xA;            {&#xD;&#xA;                margin:0;&#xD;&#xA;                padding:0;&#xD;&#xA;                box-sizing: border-box;&#xD;&#xA;            }&#xD;&#xA;            .main&#xD;&#xA;            {&#xD;&#xA;                width: 60%;&#xD;&#xA;                height: 500px;&#xD;&#xA;                margin:100px auto;&#xD;&#xA;                position: relative;&#xD;&#xA;            }&#xD;&#xA;            .sidebar&#xD;&#xA;            {&#xD;&#xA;                border-left: 2px dashed #434a54;&#xD;&#xA;                width: 30%;&#xD;&#xA;                float: right;&#xD;&#xA;                position: absolute;&#xD;&#xA;                top:0;&#xD;&#xA;                right:0;&#xD;&#xA;                height:auto;&#xD;&#xA;            }&#xD;&#xA;    &#xD;&#xA;            .sidebar ul&#xD;&#xA;            {&#xD;&#xA;                margin-left: 32px;&#xD;&#xA;                font-size: 60px;&#xD;&#xA;                color:#ffc732;&#xD;&#xA;    &#xD;&#xA;            }&#xD;&#xA;            ul li{&#xD;&#xA;                width: 100%;&#xD;&#xA;                height: 60px;&#xD;&#xA;                line-height: 60px;&#xD;&#xA;                margin-bottom: 10px;&#xD;&#xA;                position: relative;&#xD;&#xA;                cursor: pointer;&#xD;&#xA;                z-index: 1;&#xD;&#xA;            }&#xD;&#xA;            li.part:hover span&#xD;&#xA;            {&#xD;&#xA;    &#xD;&#xA;                color:#ffc732;&#xD;&#xA;            }&#xD;&#xA;    &#xD;&#xA;            li.part span{&#xD;&#xA;                width:100px ;&#xD;&#xA;                font-size: 23px;&#xD;&#xA;                color: #775702;;&#xD;&#xA;                display: inline-block;&#xD;&#xA;                position: absolute;&#xD;&#xA;                top:0;&#xD;&#xA;                left:0;&#xD;&#xA;                text-align: right;&#xD;&#xA;                font-family:"B Nazanin";&#xD;&#xA;            }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;            ul>li:first-child::before&#xD;&#xA;            {&#xD;&#xA;                content: "";&#xD;&#xA;                width:5px;&#xD;&#xA;                height: 24px;&#xD;&#xA;                background-color:white;&#xD;&#xA;                position: absolute;&#xD;&#xA;                top:0px;&#xD;&#xA;                left:-35px;&#xD;&#xA;                z-index: -1;&#xD;&#xA;            }&#xD;&#xA;            ul>li:last-child::before&#xD;&#xA;            {&#xD;&#xA;                content: "";&#xD;&#xA;                width:5px;&#xD;&#xA;                height: 30px;&#xD;&#xA;                position: absolute;&#xD;&#xA;                bottom:-13px;&#xD;&#xA;                left:-35px;&#xD;&#xA;                background-color: white;&#xD;&#xA;                z-index: -1;&#xD;&#xA;            }&#xD;&#xA;            .circle {&#xD;&#xA;                width: 28px;&#xD;&#xA;                height: 28px;&#xD;&#xA;                border-radius: 50%;&#xD;&#xA;                border: 3px solid #ffc732;&#xD;&#xA;                position: absolute;&#xD;&#xA;                top: 19px;&#xD;&#xA;                left: -46px;&#xD;&#xA;                background-color: white;&#xD;&#xA;                z-index: -1;&#xD;&#xA;                display: none;&#xD;&#xA;            }&#xD;&#xA;            .content {&#xD;&#xA;                width: 70%;&#xD;&#xA;                height: auto;&#xD;&#xA;                padding: 50px;&#xD;&#xA;            }&#xD;&#xA;            /***********************slider**************/&#xD;&#xA;            .mySlides&#xD;&#xA;            {display: none}&#xD;&#xA;            .slideshow-container img&#xD;&#xA;            {&#xD;&#xA;                width: 100%;&#xD;&#xA;                height:100%;&#xD;&#xA;            }&#xD;&#xA;            .slideshow-container {&#xD;&#xA;                max-width: 1000px;&#xD;&#xA;                position: relative;&#xD;&#xA;                margin: auto;&#xD;&#xA;            }&#xD;&#xA;            .prev, .next {&#xD;&#xA;                cursor: pointer;&#xD;&#xA;                position: absolute;&#xD;&#xA;                top: 50%;&#xD;&#xA;                width: auto;&#xD;&#xA;                padding: 16px;&#xD;&#xA;                margin-top: -22px;&#xD;&#xA;                color: white;&#xD;&#xA;                font-weight: bold;&#xD;&#xA;                font-size: 18px;&#xD;&#xA;                transition: 0.6s ease;&#xD;&#xA;                border-radius: 0 3px 3px 0;&#xD;&#xA;                user-select: none;&#xD;&#xA;            }&#xD;&#xA;            .next {&#xD;&#xA;                right: 0;&#xD;&#xA;                border-radius: 3px 0 0 3px;&#xD;&#xA;            }&#xD;&#xA;            .prev:hover, .next:hover {&#xD;&#xA;                background-color: rgba(0,0,0,0.8);&#xD;&#xA;            }&#xD;&#xA;            .text {&#xD;&#xA;                color: #f2f2f2;&#xD;&#xA;                font-size: 15px;&#xD;&#xA;                padding: 8px 12px;&#xD;&#xA;                position: absolute;&#xD;&#xA;                bottom: 8px;&#xD;&#xA;                width: 100%;&#xD;&#xA;                text-align: center;&#xD;&#xA;            }&#xD;&#xA;            .dot {&#xD;&#xA;                cursor: pointer;&#xD;&#xA;                height: 15px;&#xD;&#xA;                width: 15px;&#xD;&#xA;                margin: 0 2px;&#xD;&#xA;                background-color: #bbb;&#xD;&#xA;                border-radius: 50%;&#xD;&#xA;                display: inline-block;&#xD;&#xA;                transition: background-color 0.6s ease;&#xD;&#xA;            }&#xD;&#xA;            .active, .dot:hover {&#xD;&#xA;                background-color: #717171;&#xD;&#xA;            }&#xD;&#xA;            .fade {&#xD;&#xA;                -webkit-animation-name: fade;&#xD;&#xA;                -webkit-animation-duration: 1.5s;&#xD;&#xA;                animation-name: fade;&#xD;&#xA;                animation-duration: 1.5s;&#xD;&#xA;            }&#xD;&#xA;            @keyframes fade {&#xD;&#xA;                from {opacity: .4}&#xD;&#xA;                to {opacity: 1}&#xD;&#xA;            }&#xD;&#xA;        </style>&#xD;&#xA;        <meta charset="UTF-8">&#xD;&#xA;        <title>Title</title>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;    <div class="main">&#xD;&#xA;        <div class="sidebar">&#xD;&#xA;            <ul>&#xD;&#xA;                <li class="part" >&#xD;&#xA;                    <button class="circle" style="display: block;!important;"  id="btn1" value="1" onclick="showVal(this.value)"></button>&#xD;&#xA;                    <span >رویداد اول</span>&#xD;&#xA;                </li>&#xD;&#xA;                <li class="part">&#xD;&#xA;                    <button class="circle" id="btn2" value="2" onclick="showVal(this.value)" ></button>&#xD;&#xA;                    <span >رویداد دوم</span>&#xD;&#xA;                </li>&#xD;&#xA;                <li class="part" >&#xD;&#xA;                    <button class="circle" id="btn3" value="3" onclick="showVal(this.value)" ></button>&#xD;&#xA;                    <span >رویداد سوم</span>&#xD;&#xA;                </li>&#xD;&#xA;                <li class="part" >&#xD;&#xA;                    <button class="circle" id="btn4" value="4" onclick="showVal(this.value)"></button>&#xD;&#xA;                    <span >رویداد چهارم</span>&#xD;&#xA;                </li>&#xD;&#xA;            </ul>&#xD;&#xA;    &#xD;&#xA;        </div>&#xD;&#xA;        <div class="content" id="e1">&#xD;&#xA;            <h2>&#xD;&#xA;                slider1&#xD;&#xA;            </h2>&#xD;&#xA;            <div class="slideshow-container" id="testslider">&#xD;&#xA;    &#xD;&#xA;                <div class="mySlides fade">&#xD;&#xA;                    <img src="1%20(1).png" id="slimg1" >&#xD;&#xA;                    <div class="text" >Caption Text</div>&#xD;&#xA;                </div>&#xD;&#xA;    &#xD;&#xA;                <div class="mySlides fade" id="slimg2">&#xD;&#xA;                    <img src="1%20(2).png">&#xD;&#xA;                    <div class="text">Caption Two</div>&#xD;&#xA;                </div>&#xD;&#xA;    &#xD;&#xA;                <div class="mySlides fade" id="slimg3">&#xD;&#xA;                    <img src="1%20(3).png" >&#xD;&#xA;                    <div class="text">Caption Three</div>&#xD;&#xA;                </div>&#xD;&#xA;    &#xD;&#xA;                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>&#xD;&#xA;                <a class="next" onclick="plusSlides(1)">&#10095;</a>&#xD;&#xA;    &#xD;&#xA;            </div>&#xD;&#xA;            <br>&#xD;&#xA;    &#xD;&#xA;            <div style="text-align:center">&#xD;&#xA;                <span class="dot" onclick="currentSlide(1)"></span>&#xD;&#xA;                <span class="dot" onclick="currentSlide(2)"></span>&#xD;&#xA;                <span class="dot" onclick="currentSlide(3)"></span>&#xD;&#xA;            </div>&#xD;&#xA;        </div>&#xD;&#xA;        <div class="content" id="e2">&#xD;&#xA;            <h2>slider2</h2>&#xD;&#xA;            <div class="slideshow-container">&#xD;&#xA;    &#xD;&#xA;                <div class="mySlides fade">&#xD;&#xA;                    <img src="image2.jpg">&#xD;&#xA;                    <div class="text">Caption Text</div>&#xD;&#xA;                </div>&#xD;&#xA;    &#xD;&#xA;                <div class="mySlides fade">&#xD;&#xA;                    <img src="image2.jpg" >&#xD;&#xA;                    <div class="text">Caption Two</div>&#xD;&#xA;                </div>&#xD;&#xA;    &#xD;&#xA;                <div class="mySlides fade">&#xD;&#xA;                    <img src="image2.jpg">&#xD;&#xA;                    <div class="text">Caption Three</div>&#xD;&#xA;                </div>&#xD;&#xA;    &#xD;&#xA;                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>&#xD;&#xA;                <a class="next" onclick="plusSlides(1)">&#10095;</a>&#xD;&#xA;    &#xD;&#xA;            </div>&#xD;&#xA;        </div>&#xD;&#xA;    </div>&#xD;&#xA;    <script type="text/javascript">&#xD;&#xA;        var i,j;&#xD;&#xA;        var x=document.getElementsByClassName("part");&#xD;&#xA;        var circle = document.getElementsByClassName("circle");&#xD;&#xA;        var s = document.getElementsByClassName("content");&#xD;&#xA;        var test = document.getElementById("el");&#xD;&#xA;        for(j=0;j<x.length;j++)&#xD;&#xA;        {&#xD;&#xA;            x[j].addEventListener("click",function(){&#xD;&#xA;                for(i=0;i<circle.length;i++){&#xD;&#xA;                    let t = circle[i];&#xD;&#xA;                    t.style.display="none";&#xD;&#xA;    &#xD;&#xA;                }&#xD;&#xA;                for(j=0;j<s.length;j++){&#xD;&#xA;                    let m = s[j];&#xD;&#xA;                    m.style.display="none";&#xD;&#xA;                }&#xD;&#xA;                var y=this.firstElementChild;&#xD;&#xA;                y.style.display="block";&#xD;&#xA;    &#xD;&#xA;            });&#xD;&#xA;        }&#xD;&#xA;        function  show(evt,name) {&#xD;&#xA;            document.getElementById(name).style.display="block";&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;        var slideIndex = 1;&#xD;&#xA;        showSlides(slideIndex);&#xD;&#xA;    &#xD;&#xA;        function plusSlides(n) {&#xD;&#xA;            showSlides(slideIndex += n);&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;        function currentSlide(n) {&#xD;&#xA;            showSlides(slideIndex = n);&#xD;&#xA;        }&#xD;&#xA;        function showSlides(n) {&#xD;&#xA;            var i;&#xD;&#xA;            var slides = document.getElementsByClassName("mySlides");&#xD;&#xA;            var dots = document.getElementsByClassName("dot");&#xD;&#xA;            if (n > slides.length) {slideIndex = 1}&#xD;&#xA;            if (n < 1) {slideIndex = slides.length}&#xD;&#xA;            for (i = 0; i < slides.length; i++) {&#xD;&#xA;                slides[i].style.display = "none";&#xD;&#xA;            }&#xD;&#xA;            for (i = 0; i < dots.length; i++) {&#xD;&#xA;                dots[i].className = dots[i].className.replace(" active", "");&#xD;&#xA;            }&#xD;&#xA;            slides[slideIndex-1].style.display = "block";&#xD;&#xA;            dots[slideIndex-1].className += " active";&#xD;&#xA;        }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;        // document.getElementById("myBtn2").addEventListener("click",testfunction(2));&#xD;&#xA;        //&#xD;&#xA;        // function testfunction(test) {&#xD;&#xA;        //&#xD;&#xA;        //     i=test;&#xD;&#xA;        //     for (i=1 ;i<3;i++){&#xD;&#xA;        //     document.getElementById(i).style.display = "none";&#xD;&#xA;        //     }&#xD;&#xA;        // }&#xD;&#xA;    </script>&#xD;&#xA;    &#xD;&#xA;    </body>&#xD;&#xA;    </html>