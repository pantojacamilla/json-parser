    var words = document.getElementsByClassName('word');&#xD;&#xA;    var wordArray = [];&#xD;&#xA;    var currentWord = 0;&#xD;&#xA;    for (var i = 0; i < words.length; i++) {&#xD;&#xA;      splitLetters(words[i]);&#xD;&#xA;    }&#xD;&#xA;    function changeWord() {&#xD;&#xA;      var cw = wordArray[currentWord];&#xD;&#xA;      var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];&#xD;&#xA;      for (var i = 0; i < cw.length; i++) {&#xD;&#xA;        animateLetterOut(cw, i);&#xD;&#xA;      }&#xD;&#xA;      for (var i = 0; i < nw.length; i++) {&#xD;&#xA;        nw[i].className = 'letter behind';&#xD;&#xA;        nw[0].parentElement.style.opacity = 1;&#xD;&#xA;        animateLetterIn(nw, i);&#xD;&#xA;      }&#xD;&#xA;      currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;&#xD;&#xA;    }&#xD;&#xA;    function animateLetterOut(cw, i) {&#xD;&#xA;      setTimeout(function() {&#xD;&#xA;    		cw[i].className = 'letter out';&#xD;&#xA;      }, i*80);&#xD;&#xA;    }&#xD;&#xA;    function animateLetterIn(nw, i) {&#xD;&#xA;      setTimeout(function() {&#xD;&#xA;    		nw[i].className = 'letter in';&#xD;&#xA;      }, 340+(i*80));&#xD;&#xA;    }&#xD;&#xA;    function splitLetters(word) {&#xD;&#xA;      var content = word.innerHTML;&#xD;&#xA;      word.innerHTML ='';&#xD;&#xA;      var letters = [];&#xD;&#xA;      for (var i = 0; i < content.length; i++) {&#xD;&#xA;        var letter = document.createElement('span');&#xD;&#xA;        letter.className = 'letter';&#xD;&#xA;        var char = content.charAt(i);&#xD;&#xA;        letter.innerHTML = char===" "?"&nbsp;":char;&#xD;&#xA;        word.appendChild(letter);&#xD;&#xA;        letters.push(letter);&#xD;&#xA;      }&#xD;&#xA;      wordArray.push(letters);&#xD;&#xA;    }&#xD;&#xA;    changeWord();&#xD;&#xA;    setInterval(changeWord, 4000);