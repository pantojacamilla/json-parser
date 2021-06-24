    var arr = ['Alfred', 'Alf', 'alf', 'al', 'half', '', 'bob'];&#xD;&#xA;    arr.forEach(function(element) {&#xD;&#xA;      add(element + "->" + matches(element, 'Alf'));&#xD;&#xA;    });&#xD;&#xA;    function ignoreCase(s1, s2) {&#xD;&#xA;      var needleRegExp = new RegExp('^' + s2 + "$", "i");&#xD;&#xA;      return needleRegExp.test(s1)&#xD;&#xA;    }&#xD;&#xA;    function partializer(string) {&#xD;&#xA;      var out = [];&#xD;&#xA;      for (var i = 1; i < string.length; i++) {&#xD;&#xA;        out.push(string.slice(0, i));&#xD;&#xA;      }&#xD;&#xA;      return out;&#xD;&#xA;    }&#xD;&#xA;    function matches(text, partial) {&#xD;&#xA;      var parts = partializer(partial);&#xD;&#xA;      for (var i = 0; i < parts.length; i++) {&#xD;&#xA;        if (startsWith(text, parts[i])) {&#xD;&#xA;          return true;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      return false;&#xD;&#xA;    }&#xD;&#xA;    function startsWith(text, element) {&#xD;&#xA;      var s2 = text.split(0, element.length - 1);&#xD;&#xA;      return ignoreCase(element, s2);&#xD;&#xA;    }&#xD;&#xA;    function add(text) {&#xD;&#xA;      var olList = document.getElementById('list');&#xD;&#xA;      var newListItem = document.createElement('li');&#xD;&#xA;      newListItem.innerText = text;&#xD;&#xA;      olList.appendChild(newListItem);&#xD;&#xA;    }