    // function 1 : toggle content when clicking the button&#xD;&#xA;    $(".chapter button").on('click',function(f) { //live deprecated to be replaced&#xD;&#xA;      f.preventDefault();&#xD;&#xA;      var id = $(this).attr('id');&#xD;&#xA;      console.log(id)&#xD;&#xA;      $('#' + id + '+*').toggle();&#xD;&#xA;      // toggle is not working when highlight function located in item in this specific chapter&#xD;&#xA;    });&#xD;&#xA;    // function 2 : highlight content&#xD;&#xA;    $('#monForm').submit(function(e) {&#xD;&#xA;      e.preventDefault();&#xD;&#xA;      console.log('submitted')&#xD;&#xA;      // clear form&#xD;&#xA;      var str = $('#valeurForm').val();&#xD;&#xA;      $('#valeurForm').val("");&#xD;&#xA;      console.log(str);&#xD;&#xA;      // highlight&#xD;&#xA;      var strCut = str.split(' ');&#xD;&#xA;      for (i = 0; i < strCut.length; i++) {&#xD;&#xA;        // grey chapter where the word is located&#xD;&#xA;        $("div[class='chapter']:contains(" + strCut[i] + ")").css("color", "#929aab");&#xD;&#xA;        // and highlight in red specific word&#xD;&#xA;        // but i want to highlight all occurences of the word in this chapter ? how can I define index d ?&#xD;&#xA;        $("div[class='chapter']:contains(" + strCut[i] + ")").each(function(d) {&#xD;&#xA;          $(this).html($(this).html().replace(strCut[i], '<font color="red">$&</font>'));&#xD;&#xA;        });&#xD;&#xA;      };&#xD;&#xA;    });