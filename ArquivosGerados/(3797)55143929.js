    <body>&#xD;&#xA;        <div class="wrapper">&#xD;&#xA;            <div class="scene">&#xD;&#xA;                <div class="card">&#xD;&#xA;                    <div class="cardFace cardFaceFront">front</div>&#xD;&#xA;                    <div class="cardFace cardFaceBack">back</div>&#xD;&#xA;                </div>&#xD;&#xA;            </div>&#xD;&#xA;            <div class="scene">&#xD;&#xA;                <div class="card">&#xD;&#xA;                    <div class="cardFace cardFaceFront">front</div>&#xD;&#xA;                    <div class="cardFace cardFaceBack">back</div>&#xD;&#xA;                </div>&#xD;&#xA;            </div>&#xD;&#xA;        </div>&#xD;&#xA;    </body> &#xD;&#xA;    body {&#xD;&#xA;        margin: 0;&#xD;&#xA;        padding: 0;&#xD;&#xA;        border: 0;&#xD;&#xA;        font-size: 100%;&#xD;&#xA;        overflow: hidden;&#xD;&#xA;        color: #fff;&#xD;&#xA;        background: hsl(227, 10%, 10%);&#xD;&#xA;        min-height: 100vh;&#xD;&#xA;        min-width: 100vw;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .wrapper {&#xD;&#xA;        display: flex;&#xD;&#xA;        justify-content: space-evenly;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .scene {&#xD;&#xA;      width: 200px;&#xD;&#xA;      height: 260px;&#xD;&#xA;      border: 1px solid #CCC;&#xD;&#xA;      margin: 40px 0;&#xD;&#xA;      perspective: 600px;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .card {&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 100%;&#xD;&#xA;      transition: transform 1s;&#xD;&#xA;      transform-style: preserve-3d;&#xD;&#xA;      cursor: pointer;&#xD;&#xA;      position: relative;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .card.is-flipped {&#xD;&#xA;      transform: rotateY(180deg);&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .cardFace {&#xD;&#xA;      position: absolute;&#xD;&#xA;      width: 100%;&#xD;&#xA;      height: 100%;&#xD;&#xA;      line-height: 260px;&#xD;&#xA;      color: white;&#xD;&#xA;      text-align: center;&#xD;&#xA;      font-weight: bold;&#xD;&#xA;      font-size: 40px;&#xD;&#xA;      backface-visibility: hidden;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .cardFaceFront {&#xD;&#xA;      background: red;&#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    .cardFaceBack {&#xD;&#xA;      background: blue;&#xD;&#xA;      transform: rotateY(180deg);&#xD;&#xA;    }    &#xD;&#xA;    &#xD;&#xA;    function flipCard() {&#xD;&#xA;        var card = document.querySelector('.card');&#xD;&#xA;        card.addEventListener('click', function () {&#xD;&#xA;            card.classList.toggle('is-flipped');&#xD;&#xA;        });&#xD;&#xA;    }