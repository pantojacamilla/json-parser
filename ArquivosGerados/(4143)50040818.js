    $('.holder').each(function() {&#xD;&#xA;      var speed = 15000;&#xD;&#xA;      function change() {&#xD;&#xA;        speed = 2000;&#xD;&#xA;      }&#xD;&#xA;      setTimeout(change, 2000);&#xD;&#xA;      $(this).prop('Counter', 0).animate({&#xD;&#xA;        Counter: $(this).data('number')&#xD;&#xA;      }, {&#xD;&#xA;        duration: speed,&#xD;&#xA;        easing: 'swing',&#xD;&#xA;        step: function(now) {&#xD;&#xA;          $(this).text(Math.ceil(now).toLocaleString('en'));&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });