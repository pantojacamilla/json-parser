    function Obscure(sub_key, sub_value, sentence) {&#xD;&#xA;      var obscuredSentence = sentence.replace(sub_key, sub_value);&#xD;&#xA;      for (var count = 1; count < 2; count++) {&#xD;&#xA;        return Obscure(sub_key, sub_value, sentence);&#xD;&#xA;      }&#xD;&#xA;      var obscuredSentence = sub_value + " " + obscuredSentence + " " + sub_value;&#xD;&#xA;      return obscuredSentence;&#xD;&#xA;    }&#xD;&#xA;    console.log(Obscure("the", "the goat", "I want the money"));&#xD;&#xA;    //"RangeError: Maximum call stack size exceeded (line 2 in function Obscure)"