    $(function() {&#xD;&#xA;      var totalImg = $('#mosaic').find('img');&#xD;&#xA;      $('#category').find('a').click(function(e) {&#xD;&#xA;        e.preventDefault();&#xD;&#xA;        var target = $(this).attr('class'),&#xD;&#xA;          img = totalImg.attr('class');&#xD;&#xA;        $('.activeCat').removeClass('activeCat');&#xD;&#xA;        $(this).addClass('activeCat');&#xD;&#xA;        target == img ? img.css('display', 'block') : img.css('display', 'none');&#xD;&#xA;      });&#xD;&#xA;    });