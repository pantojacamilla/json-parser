    function recursiveReplace(element) {&#xD;&#xA;      if ($(element).children().length > 0) {&#xD;&#xA;        $(element).children().each(function() {&#xD;&#xA;          recursiveReplace($(this)[0]);&#xD;&#xA;        });&#xD;&#xA;      }&#xD;&#xA;      var chars = $(element).contents().filter(function() {&#xD;&#xA;        return this.nodeType === 3;&#xD;&#xA;      }).text().split('');&#xD;&#xA;      var newChars = '';&#xD;&#xA;      $.each(chars, function(i, el) {&#xD;&#xA;        newChars += "<i>" + el + "</i>";&#xD;&#xA;      });&#xD;&#xA;      console.log(newChars);&#xD;&#xA;      $(element).contents().filter(function() {&#xD;&#xA;        return this.nodeType === 3;&#xD;&#xA;      }).replaceWith(newChars);&#xD;&#xA;    }&#xD;&#xA;    $(function() {&#xD;&#xA;      $(document).click(function(e) {&#xD;&#xA;        var element = e.target;&#xD;&#xA;        if ($(element).text() != '') { //Contains text&#xD;&#xA;          var txt = $(element).contents().filter(function() {&#xD;&#xA;            return this.nodeType === 3;&#xD;&#xA;          }).text();&#xD;&#xA;          if (txt != '') { //Text outside span&#xD;&#xA;            recursiveReplace(element);&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });