    $('.listers').click(function(event) {&#xD;&#xA;      var evt = $(this);&#xD;&#xA;      var kids = $(event.target).children();&#xD;&#xA;      var len = kids.css('color', 'green');&#xD;&#xA;      var e_type = $(evt).attr('data-event-attribute');&#xD;&#xA;      $('#collection-type').val(e_type);&#xD;&#xA;      $('.listers .listlogo > .fa').children().prevAll().css('color', '#F4BD00');&#xD;&#xA;      $('.listers .listlogo > .fa', this).len;&#xD;&#xA;      $('.listers .listlogo > .fa').children().nextAll().css('color', '#F4BD00');&#xD;&#xA;      event.preventDefault();&#xD;&#xA;    });