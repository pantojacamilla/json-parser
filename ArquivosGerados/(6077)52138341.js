    var number = 3;&#xD;&#xA;    const board = [];&#xD;&#xA;    const boardWidth = boardHeight = 10;&#xD;&#xA;    (function() {&#xD;&#xA;      const boardElement = document.getElementById('board');&#xD;&#xA;      for (var y = 0; y < boardHeight; ++y) {&#xD;&#xA;        var row = [];&#xD;&#xA;        for (var x = 0; x < boardWidth; ++x) {&#xD;&#xA;          var cell = {};&#xD;&#xA;          cell.element = document.createElement('div');&#xD;&#xA;          boardElement.appendChild(cell.element);&#xD;&#xA;          row.push(cell);&#xD;&#xA;        }&#xD;&#xA;        board.push(row);&#xD;&#xA;      }&#xD;&#xA;      painting();&#xD;&#xA;    })();&#xD;&#xA;    function painting() {&#xD;&#xA;      board[number][number].element.style.backgroundcolor = 'red';&#xD;&#xA;    }