    <!DOCTYPE html>&#xD;&#xA;    <html>&#xD;&#xA;    <head>&#xD;&#xA;	   <title>Create Your Own Survey</title>&#xD;&#xA;	   <link rel="stylesheet" type="text/css" href="index.css">&#xD;&#xA;	   <script type="text/javascript" src="index.js"></script>&#xD;&#xA;    </head>&#xD;&#xA;    <body>&#xD;&#xA;	   <div id="model-side">&#xD;&#xA;		   <form id="question-form" method="" action="">&#xD;&#xA;			   <label>Create a question for the survey:</label>&#xD;&#xA;			   <input id="question-box" type="text" size="35"/><br/>&#xD;&#xA;			   <input type="submit" value="Submit Question"/>&#xD;&#xA;		   </form>&#xD;&#xA;	   </div>&#xD;&#xA;	   <div id="view-side">&#xD;&#xA;		   <form id="survey-form" method="" action="">&#xD;&#xA;			   <label>Current View</label>&#xD;&#xA;		   </form>&#xD;&#xA;	   </div>&#xD;&#xA;    </body>&#xD;&#xA;    </html>&#xD;&#xA;    //javascript&#xD;&#xA;    window.onload = init;&#xD;&#xA;    function init() {&#xD;&#xA;	   document.getElementById("question-form").addEventListener("submit", &#xD;&#xA;       validateQuestion);&#xD;&#xA;    }&#xD;&#xA;    function validateQuestion() {&#xD;&#xA;	   let questionValue = document.getElementById("question-box").value;&#xD;&#xA;	   if(questionValue == "" || questionValue == undefined) {&#xD;&#xA;		 alert("Fill the box with information so it can be added to the survey!");&#xD;&#xA;		   return;&#xD;&#xA;	   }else {&#xD;&#xA;		   addQuestion(questionValue);&#xD;&#xA;	   }&#xD;&#xA;    }&#xD;&#xA;    function addQuestion(question) {&#xD;&#xA;	   let label = document.createElement("label");&#xD;&#xA;	   label.innerHTML = question;&#xD;&#xA;	   document.getElementById("survey-form").appendChild(label);&#xD;&#xA;    }