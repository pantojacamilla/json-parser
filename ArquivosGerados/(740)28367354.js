    var $window = $(window);&#xD;&#xA;     var windowsize = $window.width();&#xD;&#xA;      function wrapContent(){&#xD;&#xA;        if (windowsize < 800) {&#xD;&#xA;          $('.pick-country > span').each(function () {&#xD;&#xA;            $(this).replaceWith('<option></option>');&#xD;&#xA;          });&#xD;&#xA;          $('.pick-country > option').wrapAll('<select class="country-list"></select>');&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      wrapContent();&#xD;&#xA;      $(window).resize(wrapContent);