        &#xD;&#xA;    $(document).ready(function(){&#xD;&#xA;        function getresult(url) {&#xD;&#xA;            $.ajax({&#xD;&#xA;                url: url,&#xD;&#xA;                type: "GET",&#xD;&#xA;                data:  {rowcount:$("#rowcount").val()},&#xD;&#xA;                beforeSend: function(){&#xD;&#xA;                $('#loader-icon').show();&#xD;&#xA;                },&#xD;&#xA;                complete: function(){&#xD;&#xA;                $('#loader-icon').hide();&#xD;&#xA;                },&#xD;&#xA;                success: function(data){&#xD;&#xA;                $("#faq-result").append(data);&#xD;&#xA;                },&#xD;&#xA;                error: function(){}             &#xD;&#xA;           });&#xD;&#xA;        }&#xD;&#xA;        $(window).scroll(function(){&#xD;&#xA;            if ($(window).scrollTop() == $(document).height() - $(window).height()){&#xD;&#xA;                if($(".pagenum:last").val() <= $(".total-page").val()) {&#xD;&#xA;                    var pagenum = parseInt($(".pagenum:last").val()) + 1;&#xD;&#xA;                    getresult('../php/best_result.php?page='+pagenum);&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }); &#xD;&#xA;    });