    jQuery('#preference, #style').on('change', function(){&#xD;&#xA;        // set reference to select elements&#xD;&#xA;        var preference = jQuery('#preference');&#xD;&#xA;        var style = jQuery('#style');&#xD;&#xA;        &#xD;&#xA;        // check if user has made a selection on both dropdowns&#xD;&#xA;        if ( preference.prop('selectedIndex') > 0 && style.prop('selectedIndex') > 0 ) {&#xD;&#xA;            // remove active class from current active div element&#xD;&#xA;            jQuery('.result.active').removeClass('active');&#xD;&#xA;            &#xD;&#xA;            // get all result divs, and filter for matching data attributes&#xD;&#xA;            jQuery('.result').filter('[data-preference="' + preference.val() + '"][data-style="' + style.val() + '"]').addClass('active');            &#xD;&#xA;        }&#xD;&#xA;    });