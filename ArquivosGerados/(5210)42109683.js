    $(document).ready(function(){&#xD;&#xA;      &#xD;&#xA;      var list=$('ul.appendWrap > li').length;&#xD;&#xA;      &#xD;&#xA;      $('.btn_append').click(function(){&#xD;&#xA;          $('ul.appendWrap').append('<li>new</li>');   &#xD;&#xA;      });&#xD;&#xA;      &#xD;&#xA;      $('.btn_remove').click(function(){&#xD;&#xA;        $('li.active').remove();&#xD;&#xA;      });&#xD;&#xA;      &#xD;&#xA;      $("ul.appendWrap li").click(function(){&#xD;&#xA;        $(this).addClass('active');&#xD;&#xA;      })&#xD;&#xA;      &#xD;&#xA;    });