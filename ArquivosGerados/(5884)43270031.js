    $(document).ready(function(){&#xD;&#xA;      $('#start').on('click', function() {&#xD;&#xA;        $(this).text('Resume');&#xD;&#xA;        $(this).attr('disabled',true);&#xD;&#xA;        $('span').addClass('active');&#xD;&#xA;        $('span').dequeue();&#xD;&#xA;      });&#xD;&#xA;      $("#stop").click(function() {&#xD;&#xA;        $('#start').attr('disabled',false);&#xD;&#xA;        $('#start').clearQueue();&#xD;&#xA;          $("span").stop();&#xD;&#xA;          /*&#xD;&#xA;        * it similiar like below,&#xD;&#xA;        * but still not perfect.&#xD;&#xA;        * when the duration of background-position-x has finished,&#xD;&#xA;        * the transition start again. and yet still not perfect&#xD;&#xA;          */&#xD;&#xA;          /*$('span').animate({&#xD;&#xA;          'background-position-x': '10%',&#xD;&#xA;          'background-position-y': '20%'&#xD;&#xA;        }, 10000, 'linear');*/&#xD;&#xA;      });&#xD;&#xA;    })