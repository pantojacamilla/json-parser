    $(document).ready(function(){&#xD;&#xA;      var human;&#xD;&#xA;      var computer;&#xD;&#xA;      var board = new Board()&#xD;&#xA;      var game;&#xD;&#xA;      function Human(symbol){&#xD;&#xA;        this.name = "Player",&#xD;&#xA;        this.symbol = symbol;&#xD;&#xA;      }&#xD;&#xA;      function Computer(symbol){&#xD;&#xA;        this.name = "Computer",&#xD;&#xA;        this.symbol = symbol;&#xD;&#xA;      }&#xD;&#xA;      //Modal opens when page is rendered. User can choose symbol&#xD;&#xA;      $("#myModal").modal()&#xD;&#xA;      $("#xPlayer").on('click',function(){&#xD;&#xA;        human = new Human("X");&#xD;&#xA;        computer = new Computer("O");&#xD;&#xA;        board.initalize();&#xD;&#xA;        game = new Game(human)&#xD;&#xA;        game.play();&#xD;&#xA;      })&#xD;&#xA;      $("#oPlayer").on('click',function(){&#xD;&#xA;        human = new Human("O")&#xD;&#xA;        computer = new Computer("X");&#xD;&#xA;        board.initalize();&#xD;&#xA;        game = new Game(computer)&#xD;&#xA;        game.play();&#xD;&#xA;      })&#xD;&#xA;      //Board constuctor&#xD;&#xA;      function Board(){&#xD;&#xA;      this.board = []&#xD;&#xA;      this.status = "";&#xD;&#xA;      }&#xD;&#xA;      //method calls for an empty board filled with "E"&#xD;&#xA;      Board.prototype.initalize = function(){&#xD;&#xA;        $("td p").empty()&#xD;&#xA;        this.board = ["E","E","E","E","E","E","E","E","E"]&#xD;&#xA;        this.status = "New Game";&#xD;&#xA;      }&#xD;&#xA;      //return true if there is a win. Otherwise, false&#xD;&#xA;      Board.prototype.win = function(){&#xD;&#xA;        var B = this.board;&#xD;&#xA;        //check row&#xD;&#xA;        for (var i = 0; i <= 6; i = i + 3){&#xD;&#xA;          if (B[i] !== "E" && (B[i] === B[i+1]) && (B[i+1] === B[i+2])){&#xD;&#xA;            board.status = "Winner is: " + game.currentPlayer.name&#xD;&#xA;            return true&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        //check column&#xD;&#xA;        for (var i = 0; i <= 2 ; i++ ){&#xD;&#xA;          if (B[i] !== "E" && (B[i] === B[i+3]) && (B[i+3] === B[i+6])){&#xD;&#xA;            board.status = "Winner is: " + game.currentPlayer.name&#xD;&#xA;            return true&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        //check diagonal&#xD;&#xA;        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {&#xD;&#xA;          if(B[i] !== "E" && (B[i] == B[i + j])  && (B[i + j] === B[i + 2 * j]) ) {&#xD;&#xA;            board.status = "Winner is: " + game.currentPlayer.name&#xD;&#xA;            return true;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return false&#xD;&#xA;      }&#xD;&#xA;      //checks if the current status is draw. If so, updates the status to "Draw"&#xD;&#xA;      Board.prototype.draw = function(){&#xD;&#xA;        //checks if the board itself is draw&#xD;&#xA;        for(var i = 0; i < this.board.length ; i++){&#xD;&#xA;          if (this.board[i] === "E"){&#xD;&#xA;            return false;&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        board.status = "Draw!"&#xD;&#xA;        return true;&#xD;&#xA;      }&#xD;&#xA;      //method returns array of indexes that are not empty cells in the board&#xD;&#xA;      Board.prototype.available = function(){&#xD;&#xA;        var B = this.board;&#xD;&#xA;        var indexes = [];&#xD;&#xA;        for (var i = 0; i < B.length ; i ++){&#xD;&#xA;          if (B[i] === "E"){&#xD;&#xA;            indexes.push(i)&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return indexes;&#xD;&#xA;      }&#xD;&#xA;      //checks first if the User Input is valid or not&#xD;&#xA;      Board.prototype.validMove = function(position){&#xD;&#xA;      var availableCells =  this.available();&#xD;&#xA;      return availableCells.includes(position);&#xD;&#xA;      }&#xD;&#xA;      //updates the board when using jQuery click&#xD;&#xA;      Board.prototype.updateBoard = function(position,playerInput) {&#xD;&#xA;        var availableCells =  this.available();&#xD;&#xA;        if (availableCells.includes(position)){&#xD;&#xA;          this.board[position] = playerInput&#xD;&#xA;        }&#xD;&#xA;      };&#xD;&#xA;      function Game(firstPlayer){&#xD;&#xA;        this.currentPlayer = firstPlayer;&#xD;&#xA;        this.over = false;&#xD;&#xA;        this.win = "";&#xD;&#xA;      }&#xD;&#xA;      Game.prototype.switchPlayer = function(){&#xD;&#xA;        this.currentPlayer = (this.currentPlayer === human) ? computer : human&#xD;&#xA;      }&#xD;&#xA;      Game.prototype.restart = function(){&#xD;&#xA;        board.initalize();&#xD;&#xA;      }&#xD;&#xA;      Game.prototype.gameover = function(){&#xD;&#xA;        if (board.win() || board.draw()){&#xD;&#xA;          alert(board.status)&#xD;&#xA;          game.restart();&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      Game.prototype.play = function(){&#xD;&#xA;        board.status = "Game playing"&#xD;&#xA;        if(game.currentPlayer === computer){&#xD;&#xA;          computer.makeMove();&#xD;&#xA;          game.switchPlayer();&#xD;&#xA;        };&#xD;&#xA;        // console.log(game.currentPlayer)&#xD;&#xA;        $("td").click(function(){&#xD;&#xA;          var position = $(this).attr("id");&#xD;&#xA;          var positionNumber = parseInt(position.slice(4,5));&#xD;&#xA;          // This here renders to the board and updates board.board&#xD;&#xA;          if(board.validMove(positionNumber)){&#xD;&#xA;          //Checks if the move is valid. If it is, append it.&#xD;&#xA;          //Otherwise, alert the user that it is taken&#xD;&#xA;            $(this).find("p").append(game.currentPlayer.symbol)&#xD;&#xA;            board.updateBoard(positionNumber, game.currentPlayer.symbol)&#xD;&#xA;            //Check if it the game is over or draw&#xD;&#xA;            //If either is true, play new game&#xD;&#xA;            game.gameover();&#xD;&#xA;            game.switchPlayer();&#xD;&#xA;            if (game.currentPlayer.name === "Computer" ){&#xD;&#xA;              computer.makeMove();&#xD;&#xA;              game.gameover();&#xD;&#xA;              game.switchPlayer();&#xD;&#xA;            }&#xD;&#xA;          }else{&#xD;&#xA;            alert("Try Again!")&#xD;&#xA;          }&#xD;&#xA;        })&#xD;&#xA;      }&#xD;&#xA;      Computer.prototype.makeMove = function(){&#xD;&#xA;        var availableMoves = board.available()&#xD;&#xA;        // random move without any AI implementation&#xD;&#xA;        var computerPosition = availableMoves[Math.floor(Math.random() * availableMoves.length)];&#xD;&#xA;        $("#cell" + computerPosition + " p").append(game.currentPlayer.symbol);&#xD;&#xA;        board.updateBoard(computerPosition,game.currentPlayer.symbol)&#xD;&#xA;      }&#xD;&#xA;    })