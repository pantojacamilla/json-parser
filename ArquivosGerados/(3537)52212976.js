        <html>&#xD;&#xA;        <head>&#xD;&#xA;        <!-- linking stylesheets -->&#xD;&#xA;        <link rel="stylesheet" type="text/css" href="../css/style.css">&#xD;&#xA;        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">&#xD;&#xA;        <!-- linking stylesheets end -->&#xD;&#xA;        <!-- linking javascript -->&#xD;&#xA;        <script type="text/javascript" src="../javascript/javascript.js"></script>&#xD;&#xA;        <!-- linking javascript end -->&#xD;&#xA;        &#xD;&#xA;        <!-- linking jquery into the spreadsheet starts -->&#xD;&#xA;        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>&#xD;&#xA;        <!-- linking jquery into the spreadsheet ends -->&#xD;&#xA;        </head>&#xD;&#xA;        <body>&#xD;&#xA;        <div class="clear">&#xD;&#xA;        </div>&#xD;&#xA;        <div class="signup2container-stage1">&#xD;&#xA;          <div id="signupsectioncontainer-stage2">&#xD;&#xA;            <h1 id="signup2title">Sign Up</h1>&#xD;&#xA;            <div id="signupsectioncontainer-stage3">&#xD;&#xA;              <div id="signup2validationinputs">&#xD;&#xA;                <input class="name signuptextinputsstyle1" type="text" placeholder="First Name" required/>&#xD;&#xA;                <p>&#xD;&#xA;                  <span id="validname" class="emsg hidden">Please Enter a Valid Name</span>&#xD;&#xA;                </p>&#xD;&#xA;                <input class="signuptextinputsstyle1" type="text" name="" placeholder="Last Name">&#xD;&#xA;                <input class="signuptextinputsstyle1" type="text" name="" placeholder="Choose a Username">&#xD;&#xA;                <input class="signuptextinputsstyle1" type="text" name="" placeholder="Date Of Birth">&#xD;&#xA;                <input class="signuptextinputsstyle1" type="text" name="" placeholder="Email">&#xD;&#xA;                <input class="signuptextinputsstyle1" type="password" name="" placeholder="Create Password">&#xD;&#xA;                <input class="signuptextinputsstyle1" type="password" name="" placeholder="Confirm Password">&#xD;&#xA;                <button id="signup2submitbutton">SIGN UP</button>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;        <!-- Script for First Name Starts -->&#xD;&#xA;        <script type="text/javascript">&#xD;&#xA;        $(document).ready(function(){&#xD;&#xA;        var $regexname=/^([a-zA-Z]{2,16})$/;&#xD;&#xA;        $('.name').on('keypress keydown keyup',function(){&#xD;&#xA;        if (!$(this).val().match($regexname)) {&#xD;&#xA;        // there is a mismatch, hence show the error message&#xD;&#xA;        $('.emsg').removeClass('hidden');&#xD;&#xA;        }&#xD;&#xA;        else{&#xD;&#xA;        // else, do not display message&#xD;&#xA;        $('.emsg').addClass('hidden');&#xD;&#xA;        }});});&#xD;&#xA;        </script>&#xD;&#xA;        <!-- Script for First Name Ends -->&#xD;&#xA;        <!-- Script for Last Name Starts -->&#xD;&#xA;        <!-- Script for Last Name Ends -->&#xD;&#xA;        </body>&#xD;&#xA;        </html>