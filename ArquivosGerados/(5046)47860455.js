    // The content script:&#xD;&#xA;    document.getElementById("target").addEventListener("click",last);&#xD;&#xA;    // The webpage:&#xD;&#xA;    document.getElementById("target").addEventListener("click",first);&#xD;&#xA;    function first() {&#xD;&#xA;      this.innerHTML="Incorrect!";&#xD;&#xA;      console.log("This is supposed to occur first.")&#xD;&#xA;    }&#xD;&#xA;    function last() {&#xD;&#xA;      this.innerHTML="Correct!";&#xD;&#xA;      console.log("This is supposed to occur last.")&#xD;&#xA;    }