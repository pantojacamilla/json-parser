    jQuery(function($) {&#xD;&#xA;        &#xD;&#xA;          var $navlinks = $('.navlink'),&#xD;&#xA;            $navhiddens = $('.navhidden');&#xD;&#xA;        &#xD;&#xA;          $navlinks.on('click', function(e) {&#xD;&#xA;        &#xD;&#xA;            // this is your link&#xD;&#xA;            $link = $(this);&#xD;&#xA;        &#xD;&#xA;            // get my hidden div + toggle&#xD;&#xA;            $my_navhidden = $navhiddens&#xD;&#xA;              .eq($navlinks.index(this))&#xD;&#xA;              .toggle();&#xD;&#xA;        &#xD;&#xA;            // hide all the other navhiddens &#xD;&#xA;            $navhiddens.not($my_navhidden).hide();&#xD;&#xA;        &#xD;&#xA;            &#xD;&#xA;            &#xD;&#xA;        &#xD;&#xA;          });&#xD;&#xA;        &#xD;&#xA;        });