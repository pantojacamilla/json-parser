    $(document).ready(function(){&#xD;&#xA;      $(".thehide").hide();&#xD;&#xA;    $(".selectbox_ui").click(function(e){&#xD;&#xA;                var current_event = $(this);&#xD;&#xA;                if($(".selectbox_ui_dp", this).is(":visible")){&#xD;&#xA;                    $(".selectbox_ui_dp", this).slideUp();&#xD;&#xA;                }else{&#xD;&#xA;                    $(".selectbox_ui_dp", this).slideDown();&#xD;&#xA;                }&#xD;&#xA;                e.preventDefault();&#xD;&#xA;            });&#xD;&#xA;            $(document).on("click", function(e){&#xD;&#xA;                if($(this).attr("class") !== "selectbox_ui"){&#xD;&#xA;                   $(".selectbox_ui_dp").slideUp();&#xD;&#xA;                }&#xD;&#xA;            });&#xD;&#xA;    });