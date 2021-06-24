    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;      <head><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">&#xD;&#xA;    <meta name="apple-mobile-web-app-capable" content="yes" />&#xD;&#xA;    <meta name="mobile-web-app-capable" content="yes" />&#xD;&#xA;      </head><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">&#xD;&#xA;    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">&#xD;&#xA;        <script>&#xD;&#xA;            function LengthConverter() &#xD;&#xA;            {&#xD;&#xA;            var inchRef,inchtoCmResultRef;&#xD;&#xA;            var inch,centimetres;&#xD;&#xA;            inchRef=document.getElementById("inchToCmValue");&#xD;&#xA;            inchtoCmResultRef=document.getElementById("inchtoCmResult");&#xD;&#xA;            inch=Number(inchRef.value);&#xD;&#xA;            centimetres=Number(inchtoCmResultRef.value)&#xD;&#xA;            centimetres=2.54*inch&#xD;&#xA;            inchtoCmResultRef.innerText=centimetres;&#xD;&#xA;          &#xD;&#xA;            }&#xD;&#xA;            function LengthConvertercmToinch()&#xD;&#xA;            {&#xD;&#xA;            var inch2Ref,cmtoInchResultRef;&#xD;&#xA;            var inchTwo,centimetresTwo;&#xD;&#xA;            inch2Ref=document.getElementById("cmToInchValue");&#xD;&#xA;            cmtoInchResultRef=document.getElementById("cmToInchRe");&#xD;&#xA;            inchTwo=Number(inch2Ref.value);&#xD;&#xA;            centimetresTwo=Number(cmtoInchResultRef.value)&#xD;&#xA;            inchTwo=centimetresTwo/2.54&#xD;&#xA;            cmtoInchResultRef.innerText=inchTwo;&#xD;&#xA;            }&#xD;&#xA;        </script>&#xD;&#xA;    <script defer src="https://code.getmdl.io/1.3.0/material.min.js">&#xD;&#xA;        &#xD;&#xA;        </script>&#xD;&#xA;      <body>&#xD;&#xA;            <!-- Always shows a header, even in smaller screens. -->&#xD;&#xA;    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">&#xD;&#xA;      <header class="mdl-layout__header">&#xD;&#xA;        <div class="mdl-layout__header-row">&#xD;&#xA;          <!-- Length -->&#xD;&#xA;          <span class="mdl-layout-title">Length</span>&#xD;&#xA;          <!-- Add spacer, to align navigation to the right -->&#xD;&#xA;          <div class="mdl-layout-spacer"></div>&#xD;&#xA;          <!-- Navigation. We hide it in small screens. -->&#xD;&#xA;          <nav class="mdl-navigation mdl-layout--large-screen-only">&#xD;&#xA;            <a class="mdl-navigation__link" href="">Length</a>&#xD;&#xA;            <a class="mdl-navigation__link" href="Mass.html">Mass</a>&#xD;&#xA;          </nav>&#xD;&#xA;        </div>&#xD;&#xA;      </header>&#xD;&#xA;      <div class="mdl-layout__drawer">&#xD;&#xA;        <span class="mdl-layout-title">Change conversion</span>&#xD;&#xA;        <nav class="mdl-navigation">&#xD;&#xA;          <a class="mdl-navigation__link" href="">Length</a>&#xD;&#xA;          <a class="mdl-navigation__link" href="Mass.html">Mass</a>&#xD;&#xA;        </nav>&#xD;&#xA;      </div>&#xD;&#xA;      <main class="mdl-layout__content">&#xD;&#xA;        <div class="page-content"><div class="mdl-grid">&#xD;&#xA;      <div class="mdl-cell mdl-cell--4-col"><h3>Centimetres to inches</h3>&#xD;&#xA;    <!-- Numeric Textfield with Floating Label -->&#xD;&#xA;    <form action="#">&#xD;&#xA;      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">&#xD;&#xA;        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="cmToInchValue">&#xD;&#xA;        <label class="mdl-textfield__label" for="cmToInchValue">Centimetres...</label>&#xD;&#xA;        <span class="mdl-textfield__error">Input is not a number!</span>&#xD;&#xA;      </div>&#xD;&#xA;    </form>&#xD;&#xA;    <!-- Raised button with ripple --><h4>Inches:</h4>&#xD;&#xA;    <span id="cmToInchRe"></span><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onclick="LengthConvertercmToinch()">Convert to Inches</button>&#xD;&#xA;    </div>&#xD;&#xA;      <div class="mdl-cell mdl-cell--4-col"><h3>Inches to centimetres</h3>&#xD;&#xA;    <!-- Numeric Textfield with Floating Label -->&#xD;&#xA;    <form action="#">&#xD;&#xA;      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">&#xD;&#xA;        <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="inchToCmValue">&#xD;&#xA;        <label class="mdl-textfield__label" for="inchToCmValue">Inches...</label>&#xD;&#xA;        <span class="mdl-textfield__error">Input is not a number!</span>&#xD;&#xA;      </div>&#xD;&#xA;    </form>&#xD;&#xA;    <!-- Raised button with ripple --><h4>Centimetres:</h4>&#xD;&#xA;    <span id="inchtoCmResult"></span> <button onclick="LengthConverter()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Convert to Centimetres</button>&#xD;&#xA;    </div>&#xD;&#xA;    </div>&#xD;&#xA;    </div>&#xD;&#xA;      </main>&#xD;&#xA;    </div>&#xD;&#xA;    </body>&#xD;&#xA;    </html>