    $('#username-submit').click(function() {&#xD;&#xA;      var userlinks = $('.user-links')&#xD;&#xA;      console.log('test');&#xD;&#xA;      $.ajax({&#xD;&#xA;        method: 'GET', //this is a GET git request&#xD;&#xA;        url: 'http://jsonplaceholder.typicode.com' //link to the API they created&#xD;&#xA;        beforeSend: function(xhr) {&#xD;&#xA;          xhr.setRequestHeader('Authorization', 'user name'); //takes the username and authorizes it&#xD;&#xA;          dataType: 'json',&#xD;&#xA;            .success(function(data) {&#xD;&#xA;              console.log(data);&#xD;&#xA;            })&#xD;&#xA;        }&#xD;&#xA;      })&#xD;&#xA;    });