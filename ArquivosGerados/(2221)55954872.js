    function ct(tag, id, attrs) {&#xD;&#xA;      var e = document.createElement(tag)&#xD;&#xA;      if (typeof id == 'object') attrs=id&#xD;&#xA;      if (typeof id == 'string') e.setAttribute('id', id)&#xD;&#xA;      for (var a in attrs)&#xD;&#xA;        if (attrs[a] !== undefined)&#xD;&#xA;          e.setAttribute(a, attrs[a])&#xD;&#xA;      return e&#xD;&#xA;    }&#xD;&#xA;    for (var i = 0; i < 3; i++) {&#xD;&#xA;      $('#page').append(ct('div', {'class': 'row_'}))&#xD;&#xA;      for (var y = 0; y < 3; y++) {&#xD;&#xA;        $('.row_').eq(i).append(ct('div', {'class': 'abc'}))&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    $('#start').click(function() {&#xD;&#xA;      $('.abc').addClass('move')&#xD;&#xA;    })