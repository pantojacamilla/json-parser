    $(document).ready(function() {&#xD;&#xA;      $( ".toggle" ).click(function() {&#xD;&#xA;            if ($(this).next().is(":visible"))&#xD;&#xA;                $(this).next().slideToggle("slow");&#xD;&#xA;            else {&#xD;&#xA;                $(".toggle").each(function() {&#xD;&#xA;                    if ($(this).next().is(":visible"))&#xD;&#xA;                        $(this).next().slideToggle("slow");&#xD;&#xA;                });&#xD;&#xA;                var tog = $(this).attr("data-class");&#xD;&#xA;                $("."+tog).slideToggle("slow");&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;    });