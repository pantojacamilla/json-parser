    <head>&#xD;&#xA;      <style>&#xD;&#xA;        @import url('https://necolas.github.io/normalize.css/latest/normalize.css');&#xD;&#xA;        * {&#xD;&#xA;          box-sizing: border-box;&#xD;&#xA;        }&#xD;&#xA;        .clearfix:after {&#xD;&#xA;          content: "";&#xD;&#xA;          display: block;&#xD;&#xA;          clear: both;&#xD;&#xA;        }&#xD;&#xA;        .vertically-center {&#xD;&#xA;          position: relative;&#xD;&#xA;          top: 50%;&#xD;&#xA;          transform: translateY( -50% );&#xD;&#xA;        }&#xD;&#xA;      </style>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;      <main class="clearfix">&#xD;&#xA;        <div class="circle vertically-center"></div>&#xD;&#xA;        <div class="about-container">&#xD;&#xA;          <h3>About</h3>&#xD;&#xA;          <p>&#xD;&#xA;            This problem is wierd. When <strong>snippet is made full screen</strong> &#xD;&#xA;            and browser width is shrunk to less than <strong>550px</strong> <em>&#xD;&#xA;            ( You will know you're at 550px because the background will darken )</em> &#xD;&#xA;            the layout changes - as expected. However when window is expanded beyond &#xD;&#xA;            550px again and <strong>Reload Frame</strong> is clicked the layout &#xD;&#xA;            unexpectedly updates itself. <br><br>What's going on?&#xD;&#xA;          </p>&#xD;&#xA;        </div>&#xD;&#xA;      </main>&#xD;&#xA;      <button onclick="location.reload()">Reload Frame</button>&#xD;&#xA;    </body>