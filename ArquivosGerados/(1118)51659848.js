    var phrases = [&#xD;&#xA;      'Phrase one',&#xD;&#xA;      'Phrase two',&#xD;&#xA;      'Phrase three'&#xD;&#xA;    ]&#xD;&#xA;    &#xD;&#xA;    function newPhrase() {&#xD;&#xA;      var num = Math.floor(Math.random() * (phrases.length));&#xD;&#xA;      document.getElementById('phrase').innerHTML = phrases[num];&#xD;&#xA;    }