    $('#saveButton').on('click', function() {&#xD;&#xA;      var url = "http://stuffpage.com/redirect/redirect";&#xD;&#xA;      var name = $('#name').val();&#xD;&#xA;      console.log("name", name);&#xD;&#xA;      var clientId = $('#clientId').val();&#xD;&#xA;      console.log("clicentId", clientId);&#xD;&#xA;      var redirecUrl = $('#redirectUrl').val();&#xD;&#xA;      console.log("redirectUrl", redirectUrl);&#xD;&#xA;      var formData = new FormData();&#xD;&#xA;      formData.append('name', name);&#xD;&#xA;      formData.append('client_id', clientId);&#xD;&#xA;      formData.append('url', redirectUrl);&#xD;&#xA;      console.log('test')&#xD;&#xA;      $.ajax({&#xD;&#xA;        url: url + "/saveRedirect",&#xD;&#xA;        type: "POST",&#xD;&#xA;        dataType: "json",&#xD;&#xA;        data: formData,&#xD;&#xA;        contentType: false,&#xD;&#xA;        cache: false,&#xD;&#xA;        processData: false,&#xD;&#xA;        success: function(obj) {&#xD;&#xA;          var name, clientId, redirecUrl;&#xD;&#xA;          var rows = '';&#xD;&#xA;          for (i = 0; i < obj.length; i++) {&#xD;&#xA;            rows += "<tr class='lightgrey'><th>" + obj[i].name + "</th><td>" + obj[i].clientId + "</td><td>" + obj[i].url + "</td><td><img id='editButton' class='col-md-2 edit nopad' src='http://stuffpage.com/redirect/public/img/edit.svg'><img class='col-md-2 link nopad float-right' src='http://stuffpage.com/redirect/public/img/copy.svg'></td></td></tr>";&#xD;&#xA;            $("#table").append(rows);&#xD;&#xA;            console.log('sucess!');&#xD;&#xA;          }&#xD;&#xA;        },&#xD;&#xA;        error: function() {&#xD;&#xA;          console.log('error');&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });