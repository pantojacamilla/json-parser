    $(document).ready(function() {&#xD;&#xA;      var json = {'name': 'Anna', 'counter': 1}&#xD;&#xA;      var counters = [23, 46];&#xD;&#xA;      var result = [];&#xD;&#xA;      $(counters).each(function() {&#xD;&#xA;        &#xD;&#xA;          var instance = json;&#xD;&#xA;          instance.counter = this;&#xD;&#xA;          result.push(instance);&#xD;&#xA;      });&#xD;&#xA;      &#xD;&#xA;      $(result).each(function(){&#xD;&#xA;          $('#test').append('<li>' + this.counter + '</li>');&#xD;&#xA;      });&#xD;&#xA;    });