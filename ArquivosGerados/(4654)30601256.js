        $('#div6, #div5, #div4, #div3, #div2, #div1').click(&#xD;&#xA;          function() {&#xD;&#xA;            $(this).animate({&#xD;&#xA;              'width': '100%',&#xD;&#xA;              'height': '100%'&#xD;&#xA;            }, 600).siblings().animate({&#xD;&#xA;              'width': '0',&#xD;&#xA;              'height': '0'&#xD;&#xA;            }, 600);&#xD;&#xA;            $('<button class="show">XClose</button>')&#xD;&#xA;              .appendTo('.wrapper');&#xD;&#xA;          });&#xD;&#xA;        $('.show').click(function() {&#xD;&#xA;          $(this).animate({&#xD;&#xA;            'width': '0',&#xD;&#xA;            'height': '0'&#xD;&#xA;          }, 600).siblings().animate({&#xD;&#xA;            'width': '50%',&#xD;&#xA;            'height': '33.33%'&#xD;&#xA;          }, 600);&#xD;&#xA;          $(this).remove();&#xD;&#xA;        });