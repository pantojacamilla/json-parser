    $("#button").click(function() {&#xD;&#xA;            $( "#button" ).toggleClass( "newClass" );&#xD;&#xA;            $( "div" ).replaceWith( $( "ul li" ) );&#xD;&#xA;            if ($("#button").text() == "CLICK ME") {&#xD;&#xA;                $("#button").text("AGAIN CLICK ME");&#xD;&#xA;            }&#xD;&#xA;            else {&#xD;&#xA;                $("#button").text("CLICK ME");&#xD;&#xA;            }&#xD;&#xA;    });