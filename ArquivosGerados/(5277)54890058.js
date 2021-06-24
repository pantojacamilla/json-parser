    $(document).ready(function() {&#xD;&#xA;      var correctAnswers = 0;&#xD;&#xA;      var incorrectAnswers = 0;&#xD;&#xA;      var unansweredQuestions = 0;&#xD;&#xA;      var timeRemaining = 16;&#xD;&#xA;      var intervalID;&#xD;&#xA;      var indexQandA = 0;&#xD;&#xA;      var answered = false;&#xD;&#xA;      var correct;&#xD;&#xA;      var start = $(".start").html("Start Game");&#xD;&#xA;      start.on("click", startGame);&#xD;&#xA;      var triviaQandA = [{&#xD;&#xA;        question: "What is the fastest animal?",&#xD;&#xA;        answer: ["cheetah", "turtle", "giraffe", "elephant"],&#xD;&#xA;        correct: "0",&#xD;&#xA;        image: ("assets/images/circle.png")&#xD;&#xA;      }, {&#xD;&#xA;        question: "When you are blue you turn?",&#xD;&#xA;        answer: ["red", "green", "blue", "yellow"],&#xD;&#xA;        correct: "2",&#xD;&#xA;        image: ("assets/images/dot.jpg")&#xD;&#xA;      }];&#xD;&#xA;      function startGame() {&#xD;&#xA;        $(".start").hide();&#xD;&#xA;        correctAnswers = 0;&#xD;&#xA;        incorrectAnswers = 0;&#xD;&#xA;        unansweredQuestions = 0;&#xD;&#xA;        loadQandA();&#xD;&#xA;      }&#xD;&#xA;      function loadQandA() {&#xD;&#xA;        answered = false;&#xD;&#xA;        timeRemaining = 16;&#xD;&#xA;        intervalID = setInterval(timer, 1000);&#xD;&#xA;        if (answered === false) {&#xD;&#xA;          timer();&#xD;&#xA;        }&#xD;&#xA;        correct = triviaQandA[indexQandA].correct;&#xD;&#xA;        var question = triviaQandA[indexQandA].question;&#xD;&#xA;        $(".question").html(question);&#xD;&#xA;        for (var i = 0; i < 4; i++) {&#xD;&#xA;          var answer = triviaQandA[indexQandA].answer[i];&#xD;&#xA;          $(".answers").append("<h4 class = answersAll id =" + i + ">" + answer + "</h4>");&#xD;&#xA;        }&#xD;&#xA;        $("h4").click(function() {&#xD;&#xA;          var id = $(this).attr("id");&#xD;&#xA;          if (id === correct) {&#xD;&#xA;            answered = true;&#xD;&#xA;            $(".question").text("The answer is: " + triviaQandA[indexQandA].answer[correct]);&#xD;&#xA;            correctAnswer();&#xD;&#xA;          } else {&#xD;&#xA;            answered = true;&#xD;&#xA;            $(".question").text("You chose: " + triviaQandA[indexQandA].answer[id] + "    the correct answer is: " + triviaQandA[indexQandA].answer[correct]);&#xD;&#xA;            incorrectAnswer();&#xD;&#xA;          }&#xD;&#xA;          console.log(correct);&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;      function timer() {&#xD;&#xA;        if (timeRemaining === 0) {&#xD;&#xA;          answered = true;&#xD;&#xA;          clearInterval(intervalID);&#xD;&#xA;          $(".question").text("The correct answer is: " + triviaQandA[indexQandA].answer[correct]);&#xD;&#xA;          unAnswered();&#xD;&#xA;        } else if (answered === true) {&#xD;&#xA;          clearInterval(intervalID);&#xD;&#xA;        } else {&#xD;&#xA;          timeRemaining--;&#xD;&#xA;          $(".timeRemaining").text("You have " + timeRemaining);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      function correctAnswer() {&#xD;&#xA;        correctAnswers++;&#xD;&#xA;        $(".timeRemaining").text("You are spot on!!!").css({&#xD;&#xA;          "color": "#3d414f"&#xD;&#xA;        });&#xD;&#xA;        reset();&#xD;&#xA;      }&#xD;&#xA;      function incorrectAnswer() {&#xD;&#xA;        incorrectAnswers++;&#xD;&#xA;        $(".timeRemaining").text("You are sooo wrong").css({&#xD;&#xA;          "color": "#3d414f"&#xD;&#xA;        });&#xD;&#xA;        reset();&#xD;&#xA;      }&#xD;&#xA;      function unAnswered() {&#xD;&#xA;        unansweredQuestions++;&#xD;&#xA;        $(".timeRemaining").text("You didn't choose anything...").css({&#xD;&#xA;          "color": "#3d414f"&#xD;&#xA;        });&#xD;&#xA;        reset();&#xD;&#xA;      }&#xD;&#xA;      function reset() {&#xD;&#xA;        $(".answersAll").remove();&#xD;&#xA;        $(".answers").append("<img class=answerImage width='150' height='150' src='" + triviaQandA[indexQandA].image + "'>");&#xD;&#xA;        indexQandA++;&#xD;&#xA;        if (indexQandA < triviaQandA.length) {&#xD;&#xA;          setTimeout(function() {&#xD;&#xA;            loadQandA();&#xD;&#xA;            $(".answerImage").remove();&#xD;&#xA;          }, 2000);&#xD;&#xA;        } else {&#xD;&#xA;          setTimeout(function() {&#xD;&#xA;            $(".question").remove();&#xD;&#xA;            $(".timeRemaining").remove();&#xD;&#xA;            $(".answerImage").remove();&#xD;&#xA;            $(".answers").append("<h4 class = answersAll end>Correct answers: " + correctAnswers + "</h4>");&#xD;&#xA;            $(".answers").append("<h4 class = answersAll end>Wrong answers: " + incorrectAnswers + "</h4>");&#xD;&#xA;            $(".answers").append("<h4 class = answersAll end>Unanswered questions: " + unansweredQuestions + "</h4>");&#xD;&#xA;            correctAnswers = 0;&#xD;&#xA;            incorrectAnswers = 0;&#xD;&#xA;            unansweredQuestions = 0;&#xD;&#xA;            // setTimeout(function() {&#xD;&#xA;            //     location.reload();&#xD;&#xA;            // }, 5000);&#xD;&#xA;            var start = $(".start-over").html("Start Game");&#xD;&#xA;            start.on("click", startGame);&#xD;&#xA;          }, 2000);&#xD;&#xA;        }&#xD;&#xA;      };&#xD;&#xA;    });