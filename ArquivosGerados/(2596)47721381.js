    $(function() {&#xD;&#xA;        show_step(<?= $step; ?>);        &#xD;&#xA;    });&#xD;&#xA;    function animacion(caso){&#xD;&#xA;      //$( ".test" ).animate({ "left": "-=50px" }, "slow" );&#xD;&#xA;        /*switch(caso) {&#xD;&#xA;            case 1:&#xD;&#xA;                $(".backdrop").css("background-position", `0px 0px`);&#xD;&#xA;                break;&#xD;&#xA;            case 2:&#xD;&#xA;                $(".backdrop").css("background-position", `0px -16px`);&#xD;&#xA;                break;&#xD;&#xA;            case 3:&#xD;&#xA;                $(".backdrop").css("background-position", `0px -32px`);&#xD;&#xA;                break;&#xD;&#xA;        };*/&#xD;&#xA;    };&#xD;&#xA;    // function to save the form data and change the step&#xD;&#xA;    function show_step(step){&#xD;&#xA;        var data = $( "#form" ).serialize();&#xD;&#xA;        var url = 'saveTemp.php?step=' + step;&#xD;&#xA;        $.ajax({&#xD;&#xA;          type: "POST",&#xD;&#xA;          url: url,&#xD;&#xA;          data: data&#xD;&#xA;        })&#xD;&#xA;        .done(function( resp ) {&#xD;&#xA;            $('.step').css( "display", "none" );&#xD;&#xA;            $('#step'+step).fadeIn("slow");&#xD;&#xA;            //animation of each step&#xD;&#xA;            animacion(step);&#xD;&#xA;        });&#xD;&#xA;    };