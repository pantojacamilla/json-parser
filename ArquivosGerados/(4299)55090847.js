    $(document).ready(function () {&#xD;&#xA;    $('.slideout-menu-toggle').on('click', function(event){&#xD;&#xA;      event.preventDefault();&#xD;&#xA;      // create menu variables&#xD;&#xA;      var slideoutMenu = $('.slideout-menu');&#xD;&#xA;      var slideoutMenuWidth = $('.slideout-menu').width();&#xD;&#xA;      $('.capa').toggleClass('visible');  &#xD;&#xA;      // toggle open class&#xD;&#xA;      slideoutMenu.toggleClass("open");&#xD;&#xA;    });&#xD;&#xA;    });