    var questions = [&#xD;&#xA;      {&#xD;&#xA;        one: "In which HTML element do we put in Javascript code?",&#xD;&#xA;        choices1: ['<js>', '<script>', '<body>', '<link>']&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        2: 'Which HTML attribute is used to reference an external Javascript file?',&#xD;&#xA;        choices2: ['src', 'rel', 'type', 'href']&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        3: 'How would you write "Hello" in an alert box?',&#xD;&#xA;        choices3: ['msg("Hello")', 'alertBox("Hello")', 'document.write("Hello")', 'alert("Hello")']&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        4: 'Javascript is directly related the the "Java" programming language',&#xD;&#xA;        choices4: ['true', 'false']&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        5: "A variable in Javascript must start with which special character",&#xD;&#xA;        choices5: ['@', '$', '#', 'No Special Character']&#xD;&#xA;      }&#xD;&#xA;    ]&#xD;&#xA;    var h3Q1 = document.querySelector('.q1');&#xD;&#xA;    h3Q1.innerHTML = questions[0].one;&#xD;&#xA;    var br = '<br>';&#xD;&#xA;    var form = document.querySelector('[name=quizForm]');&#xD;&#xA;    for (var i = 0; i <= questions[0].choices1.length; i++) {&#xD;&#xA;      var input = document.createElement('input');&#xD;&#xA;      var textNode = document.createTextNode(questions[0].choices1[i]);&#xD;&#xA;      input.type = 'radio';&#xD;&#xA;      input.name = 'q1';&#xD;&#xA;      input.value = 'a';&#xD;&#xA;      input.id = 'q1a';&#xD;&#xA;      input.appendChild(textNode);&#xD;&#xA;      form.insertBefore(input, form[0]);&#xD;&#xA;      input.insertAdjacentHTML('afterend', br);&#xD;&#xA;    }