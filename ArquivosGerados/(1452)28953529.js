    var questions = ["Question 1","Question 2","Question 3","Question 4"];&#xD;&#xA;    var currentQuestionIndex = 0;&#xD;&#xA;    function showQuestion() {&#xD;&#xA;        &#xD;&#xA;        if (currentQuestionIndex <= questions.length-1) {&#xD;&#xA;            &#xD;&#xA;            var question = $('#question');&#xD;&#xA;                console.log(questions[currentQuestionIndex]);&#xD;&#xA;                question.text(questions[currentQuestionIndex]);&#xD;&#xA;            &#xD;&#xA;            currentQuestionIndex = currentQuestionIndex+1;&#xD;&#xA;            questionTimer();&#xD;&#xA;        } else {&#xD;&#xA;            console.log("End question 1");&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function questionTimer() {&#xD;&#xA;        setTimeout(function () {&#xD;&#xA;            showQuestion();&#xD;&#xA;        }, 3000);&#xD;&#xA;    }&#xD;&#xA;    showQuestion();