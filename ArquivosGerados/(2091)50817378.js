    $('body').on('click', 'div.title', function () {&#xD;&#xA;      $(this).addClass('active').next().slideUp('normal');          &#xD;&#xA;      var nextDiv = $(this).next();      &#xD;&#xA;      var divBody = $('div.body-content');&#xD;&#xA;      var divTitle = $('div.title');&#xD;&#xA;      if(divBody.is(':visible')) {        &#xD;&#xA;        $(divBody).prev().removeClass('active');        &#xD;&#xA;      }&#xD;&#xA;      if((nextDiv.is(divBody)) && (!nextDiv.is(':visible'))) { &#xD;&#xA;        $(divBody).slideUp('normal');&#xD;&#xA;        nextDiv.slideDown('normal');&#xD;&#xA;      }&#xD;&#xA;    });