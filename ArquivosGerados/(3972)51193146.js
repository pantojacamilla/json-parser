    $(function() {&#xD;&#xA;      $("#showAll").on("click", function() {&#xD;&#xA;        $('.box').fadeIn();&#xD;&#xA;      });&#xD;&#xA;      $("#showA").on("click", function() {&#xD;&#xA;        $('.box').hide('clip');&#xD;&#xA;        $('.groupA').fadeIn();&#xD;&#xA;      });&#xD;&#xA;      $("#showB").on("click", function() {&#xD;&#xA;        $('.box').hide('clip');&#xD;&#xA;        $('.groupB').fadeIn();&#xD;&#xA;      });&#xD;&#xA;    });