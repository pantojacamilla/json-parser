    $(function() {&#xD;&#xA;            var scntDiv = $('#p_scents');&#xD;&#xA;            var i = $('#p_scents p').size() + 1;&#xD;&#xA;            var encdom_local = ['something'];&#xD;&#xA;           &#xD;&#xA;            $('#addScnt').live('click', function() {&#xD;&#xA;                    $('<p><label for="p_scnts"><input type="text" id="p_scnt"  name="p_scnt_' + i +'" value="" placeholder="NETWORK/[IP/CIDR]" /></label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);&#xD;&#xA;                    encdom_local.push(1);&#xD;&#xA;                    i++;&#xD;&#xA;                    return false;&#xD;&#xA;            });&#xD;&#xA;            $('#remScnt').live('click', function() { &#xD;&#xA;                    if( i > 2 ) {&#xD;&#xA;                            $(this).parents('p').remove();&#xD;&#xA;                            i--;&#xD;&#xA;                    }&#xD;&#xA;                    return false;&#xD;&#xA;            });&#xD;&#xA;            &#xD;&#xA;            $(".result").html(encdom_local.join(""));&#xD;&#xA;    });