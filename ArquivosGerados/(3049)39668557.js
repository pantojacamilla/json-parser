        <!DOCTYPE html>&#xD;&#xA;    <html lang="en">&#xD;&#xA;    <head>&#xD;&#xA;    <title>PageTitle</title>&#xD;&#xA;    &#xD;&#xA;    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>&#xD;&#xA;    <style>&#xD;&#xA;      .my-content {&#xD;&#xA;        background-color: light-blue;&#xD;&#xA;    	margin: 250px 50px 100px 50px;&#xD;&#xA;    	border-radius: 10px;&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .quote {&#xD;&#xA;        margin: 0px 50px 0px 50px;&#xD;&#xA;        text-align: center;&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .quoteBy {&#xD;&#xA;        margin: 0px 25px 0px 0px;&#xD;&#xA;    	text-align: right;&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .buttonLine {    &#xD;&#xA;        margin: 50px 0px 0px 0px;    &#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      .twitter-share-button {&#xD;&#xA;        margin: 0px 0px 0px 50px;&#xD;&#xA;      }  &#xD;&#xA;      &#xD;&#xA;      #newQuoteButton {&#xD;&#xA;        margin: 0px 200px 100px 0px;&#xD;&#xA;      }    &#xD;&#xA;    </style>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;    <div class="container-fluid">&#xD;&#xA;      <div class="my-content">&#xD;&#xA;        <h1 class="quote" id="idQuote">Quick Brown Fox Jumped Over The Lazy Dog! Quick Brown Fox Jumped Over The Lazy Dog!</h1>&#xD;&#xA;        <h4 class="quoteBy" id="idQuoteBy">....The Quick Fox</h4>&#xD;&#xA;    	<div class="buttonLine" style="clear:both">&#xD;&#xA;    	  <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world" data-size="large">Tweet</a>&#xD;&#xA;    	  <button id="newQuoteButton" onclick="myFunction()">New Quote</button>&#xD;&#xA;    	</div>  &#xD;&#xA;      </div>&#xD;&#xA;      &#xD;&#xA;      <footer>&#xD;&#xA;        <p class="text-center"> Compiled by: Someones Name</p>    &#xD;&#xA;      </footer>&#xD;&#xA;    </div>&#xD;&#xA;    <script type="text/javascript">&#xD;&#xA;    window.twttr = (function(d, s, id) {&#xD;&#xA;      var js, fjs = d.getElementsByTagName(s)[0],&#xD;&#xA;        t = window.twttr || {};&#xD;&#xA;      if (d.getElementById(id)) return t;&#xD;&#xA;      js = d.createElement(s);&#xD;&#xA;      js.id = id;&#xD;&#xA;      js.src = "https://platform.twitter.com/widgets.js";&#xD;&#xA;      fjs.parentNode.insertBefore(js, fjs);&#xD;&#xA;     &#xD;&#xA;      t._e = [];&#xD;&#xA;      t.ready = function(f) {&#xD;&#xA;        t._e.push(f);&#xD;&#xA;      };&#xD;&#xA;     &#xD;&#xA;      return t;&#xD;&#xA;    }(document, "script", "twitter-wjs"));&#xD;&#xA;    &#xD;&#xA;    function myFunction() {&#xD;&#xA;      //nothing&#xD;&#xA;    }&#xD;&#xA;    </script>&#xD;&#xA;    </body>&#xD;&#xA;    </html>