    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;      <head>&#xD;&#xA;        <title>Codemirror: Grab Title Value</title>&#xD;&#xA;        <meta charset='utf-8'>&#xD;&#xA;        <meta name='viewport' content='initial-scale=1.0'>&#xD;&#xA;        <meta http-equiv='X-UA-Compatible' content='IE=9' />&#xD;&#xA;        <link type='text/css' rel='stylesheet' href='http://necolas.github.io/normalize.css/3.0.1/normalize.css'/>&#xD;&#xA;        <script type='text/javascript' src='http://code.jquery.com/jquery-latest.min.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/lib/codemirror.js'></script>&#xD;&#xA;        <link rel='stylesheet'  href='http://codemirror.net/lib/codemirror.css'>&#xD;&#xA;        <link rel='stylesheet'  href='http://codemirror.net/addon/fold/foldgutter.css' />&#xD;&#xA;        <script src='http://codemirror.net/javascripts/code-completion.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/javascripts/css-completion.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/javascripts/html-completion.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/mode/javascript/javascript.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/mode/xml/xml.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/mode/css/css.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/mode/htmlmixed/htmlmixed.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/edit/closetag.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/edit/matchbrackets.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/selection/active-line.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/keymap/extra.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/fold/foldcode.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/fold/foldgutter.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/fold/brace-fold.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/fold/xml-fold.js'></script>&#xD;&#xA;        <script src='http://codemirror.net/addon/fold/comment-fold.js'></script>&#xD;&#xA;      </head>&#xD;&#xA;      <body>&#xD;&#xA;        <div>&#xD;&#xA;          <input type="text" class="projectname" placeholder="Find title tag in editor and add what's inside it here..." />&#xD;&#xA;        </div>&#xD;&#xA;        <textarea id='code' name='code'><!doctype html>&#xD;&#xA;    <html>&#xD;&#xA;      <head>&#xD;&#xA;        <meta charset=utf-8>&#xD;&#xA;        <title>HTML5 canvas demo</title>&#xD;&#xA;      </head>&#xD;&#xA;      <body>&#xD;&#xA;        hello world!&#xD;&#xA;      </body>&#xD;&#xA;    </html></textarea>&#xD;&#xA;        <iframe id='preview'></iframe>&#xD;&#xA;      </body>&#xD;&#xA;    </html>