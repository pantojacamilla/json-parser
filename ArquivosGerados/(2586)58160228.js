   body,&#xD;&#xA;    html {&#xD;&#xA;      background: #110101;&#xD;&#xA;      font-family: 'Roboto', sans-serif;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .split-slideshow {&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .slideshow {&#xD;&#xA;      position: absolute;&#xD;&#xA;      z-index: 1;&#xD;&#xA;      padding-top: 40px;&#xD;&#xA;      left: 0;&#xD;&#xA;      width: 100vw;&#xD;&#xA;      height: 100vh;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slider {&#xD;&#xA;      width: 100vw;&#xD;&#xA;      height: 100vw;&#xD;&#xA;      z-index: 2;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slider * {&#xD;&#xA;      outline: none;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slider .item {&#xD;&#xA;      height: 100vh;&#xD;&#xA;      width: 100vw;&#xD;&#xA;      position: relative;&#xD;&#xA;      overflow: hidden;&#xD;&#xA;      border: none;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slider .item .text {&#xD;&#xA;      display: none;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slider .item img {&#xD;&#xA;      min-width: 101%;&#xD;&#xA;      min-height: 101%;&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: 50%;&#xD;&#xA;      left: 50%;&#xD;&#xA;      -webkit-transform: translate(-50%, -50%);&#xD;&#xA;              transform: translate(-50%, -50%);&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slick-dots {&#xD;&#xA;      position: fixed;&#xD;&#xA;      z-index: 100;&#xD;&#xA;      width: 40px;&#xD;&#xA;      height: auto;&#xD;&#xA;      bottom: auto;&#xD;&#xA;      top: 50%;&#xD;&#xA;      right: 0;&#xD;&#xA;      -webkit-transform: translateY(-50%);&#xD;&#xA;              transform: translateY(-50%);&#xD;&#xA;      left: auto;&#xD;&#xA;      color: #fff;&#xD;&#xA;      display: block;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slick-dots li {&#xD;&#xA;      display: block;&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: auto;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slick-dots li button {&#xD;&#xA;      position: relative;&#xD;&#xA;      width: 20px;&#xD;&#xA;      height: 15px;&#xD;&#xA;      text-align: center;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slick-dots li button:before {&#xD;&#xA;      content: '';&#xD;&#xA;      background: #fff;&#xD;&#xA;      color: #fff;&#xD;&#xA;      height: 2px;&#xD;&#xA;      width: 20px;&#xD;&#xA;      border-radius: 0;&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: 50%;&#xD;&#xA;      right: 0;&#xD;&#xA;      left: auto;&#xD;&#xA;      -webkit-transform: translateY(-50%);&#xD;&#xA;              transform: translateY(-50%);&#xD;&#xA;      -webkit-transition: all .3s ease-in-out;&#xD;&#xA;      transition: all .3s ease-in-out;&#xD;&#xA;      opacity: 0.6;&#xD;&#xA;    }&#xD;&#xA;    .slideshow .slick-dots li.slick-active button:before {&#xD;&#xA;      width: 40px;&#xD;&#xA;      opacity: 1;&#xD;&#xA;    }&#xD;&#xA;    .slideshow.slideshow-right {&#xD;&#xA;      left: 0;&#xD;&#xA;      z-index: 1;&#xD;&#xA;      width: 50vw;&#xD;&#xA;      pointer-events: none;&#xD;&#xA;    }&#xD;&#xA;    .slideshow.slideshow-right .slider {&#xD;&#xA;      left: 0;&#xD;&#xA;      position: absolute;&#xD;&#xA;    }&#xD;&#xA;    .slideshow-text {&#xD;&#xA;      position: absolute;&#xD;&#xA;      top: 56%;&#xD;&#xA;      left: 50%;&#xD;&#xA;      -webkit-transform: translate(-50%, -50%);&#xD;&#xA;              transform: translate(-50%, -50%);&#xD;&#xA;      z-index: 100;&#xD;&#xA;      font-size: 80px;&#xD;&#xA;      width: 100vw;&#xD;&#xA;      text-align: center;&#xD;&#xA;      color: #fff;&#xD;&#xA;      font-family: 'Roboto Condensed', sans-serif;&#xD;&#xA;      font-weight: 100;&#xD;&#xA;      pointer-events: none;&#xD;&#xA;      text-transform: uppercase;&#xD;&#xA;      letter-spacing: 20px;&#xD;&#xA;      line-height: 1.5;&#xD;&#xA;    }&#xD;&#xA;    @media (max-width: 767px) {&#xD;&#xA;      .slideshow-text {&#xD;&#xA;        font-size: 40px;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    .ss{&#xD;&#xA;      text-decoration: none;&#xD;&#xA;      color: white;&#xD;&#xA;      border: white 2px solid;&#xD;&#xA;    }&#xD;&#xA;Sorry for the long excerpt of code, I just don't really know what exactly is the problem or if there are multiple issues occurring at once. I've taken out CSS code from the excerpt that even I know most likely is not the culprit.&#xD;&#xA;EDIT: the HTML: &#xD;&#xA;    <body>&#xD;&#xA;      <div class="split-slideshow">&#xD;&#xA;        <div class="slideshow">&#xD;&#xA;          <div class="slider">&#xD;&#xA;            <div class="item">&#xD;&#xA;              <img src="img/ban1.png" />&#xD;&#xA;            </div>&#xD;&#xA;            <div class="item">&#xD;&#xA;              <img src="img/ban2.png" />&#xD;&#xA;            </div>&#xD;&#xA;            <div class="item">&#xD;&#xA;              <img src="img/ban3.png" />&#xD;&#xA;            </div>&#xD;&#xA;            <div class="item">&#xD;&#xA;              <img src="img/ban4.png" />&#xD;&#xA;            </div>&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;        <div class="slideshow-text">&#xD;&#xA;          <div class="item"><a href="#" class="ss">TEXT ONE</a></div>&#xD;&#xA;          <div class="item"><a href="#" class="ss">TEXT TWO</a></div>&#xD;&#xA;          <div class="item"><a href="#" class="ss">TEXT THREE</a></div>&#xD;&#xA;          <div class="item"><a href="#" class="ss">TEXT FOUR</a></div>&#xD;&#xA;        </div>&#xD;&#xA;      </div>&#xD;&#xA;      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>&#xD;&#xA;      <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.js'></script>&#xD;&#xA;      <script src='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js'></script>&#xD;&#xA;      <script src="js/splitslick/js/index.js"></script>&#xD;&#xA;      <div class="map">&#xD;&#xA;        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.2685758805533!2d-82.46569269999999!3d28.0773494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c74f729035a1%3A0xddc564fe471ed4fa!2s14304%20Capitol%20Dr%2C%20Tampa%2C%20FL%2033613!5e0!3m2!1sen!2sus!4v1569802270070!5m2!1sen!2sus"&#xD;&#xA;          width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>&#xD;&#xA;      </div>&#xD;&#xA;    </body>&#xD;&#xA;Another edit: a snippet! The demo here actually runs a bit differently than what my computer interprets, but since the point that the iframe can't be seen stands, it's not a big deal at all.