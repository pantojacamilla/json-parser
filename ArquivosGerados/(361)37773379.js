    $('document').ready(function() {&#xD;&#xA;      $('#search-label').on({&#xD;&#xA;        mouseenter: function() {&#xD;&#xA;          $('#search-box').stop().animate({&#xD;&#xA;            width: '500px',&#xD;&#xA;            borderBottom: '3px solid #373A3C'&#xD;&#xA;          });&#xD;&#xA;        },&#xD;&#xA;        mouseleave: function() {&#xD;&#xA;          $('#search-box').stop().animate({&#xD;&#xA;            width: '0px',&#xD;&#xA;            border: 'none'&#xD;&#xA;          });&#xD;&#xA;        },&#xD;&#xA;        click: function() {&#xD;&#xA;          $('#search-box').focus();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      $('#search-box').on({&#xD;&#xA;        focusin: function() {&#xD;&#xA;          $(this).css({&#xD;&#xA;            width: '540px',&#xD;&#xA;            borderBottom: : '3px solid #373ABC'&#xD;&#xA;          });&#xD;&#xA;        },&#xD;&#xA;        focusout: function() {&#xD;&#xA;          $('#search-box').stop().animate({&#xD;&#xA;            width: '0px',&#xD;&#xA;            border: 'none'&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });