    // the game starts here&#xD;&#xA;    function startGame() {&#xD;&#xA;      // the user&#xD;&#xA;      var userChoice = prompt("Do you choose rock, paper or scissors?");&#xD;&#xA;      // if invalid input&#xD;&#xA;      while ((userChoice != "rock") && (userChoice != "paper") && (userChoice != "scissors")) {&#xD;&#xA;        userChoice = prompt("Please select again, this time correctly!");&#xD;&#xA;      }&#xD;&#xA;      alert("You chose " + userChoice);&#xD;&#xA;      // computer&#xD;&#xA;      var computerChoice = Math.random();&#xD;&#xA;      if (computerChoice < 0.34) {&#xD;&#xA;        computerChoice = "rock";&#xD;&#xA;      } else if (computerChoice <= 0.67) {&#xD;&#xA;        computerChoice = "paper";&#xD;&#xA;      } else {&#xD;&#xA;        computerChoice = "scissors";&#xD;&#xA;      }&#xD;&#xA;      alert("Computer pick: " + computerChoice);&#xD;&#xA;      // comparison between user and computer&#xD;&#xA;      var compare = function(choice1, choice2) {&#xD;&#xA;        // if both selections are the same&#xD;&#xA;        if (choice1 == choice2) {&#xD;&#xA;          alert("Tie, restart the game!");&#xD;&#xA;          startGame();&#xD;&#xA;        }&#xD;&#xA;        // if the user selects rock&#xD;&#xA;        else if (choice1 == "rock") {&#xD;&#xA;          if (choice2 == "scissors") {&#xD;&#xA;            return "You have won the game!";&#xD;&#xA;          } else {&#xD;&#xA;            return "LOOOOOSSEEER!";&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        // if the user selects scissors&#xD;&#xA;        else if (choice1 == "scissors") {&#xD;&#xA;          if (choice2 == "rock") {&#xD;&#xA;            return "You have won the game!";&#xD;&#xA;          }&#xD;&#xA;        } else {&#xD;&#xA;          return "LOOOOOSSEEER";&#xD;&#xA;        }&#xD;&#xA;      };&#xD;&#xA;      alert(compare(userChoice, computerChoice));&#xD;&#xA;    }&#xD;&#xA;    // startGame();