    $("#input").on("change", function(e) {&#xD;&#xA;      var _URL = window.URL || window.webkitURL,&#xD;&#xA;      		file = this.files[0],                   &#xD;&#xA;          image = new Image();&#xD;&#xA;      $('#image').attr('src',  _URL.createObjectURL(file));&#xD;&#xA;      $(image).ready(function($) {&#xD;&#xA;      	$('#modal').modal('show');&#xD;&#xA;      });&#xD;&#xA;      window.URL.revokeObjectURL(image.src);&#xD;&#xA;    });