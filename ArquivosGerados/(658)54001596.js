    $('#search').keyup(function() {&#xD;&#xA;                    var lastValue = $(this).val();&#xD;&#xA;                    console.log(lastValue)&#xD;&#xA;                    showHide(lastValue, $('#Activity').val());&#xD;&#xA;                });&#xD;&#xA;    function showHide(lastValue, activity) {&#xD;&#xA;                        $(".usrRow").show();&#xD;&#xA;                        &#xD;&#xA;                        var v;&#xD;&#xA;                        if (lastValue.length > 0) {&#xD;&#xA;                            $(".usrRow").each(function() {&#xD;&#xA;                                if ($(this).attr("extn").toLowerCase().indexOf(lastValue.toLowerCase()) >= 0) {&#xD;&#xA;                                    $(this).show();&#xD;&#xA;                                } else {&#xD;&#xA;                                    $(this).hide();&#xD;&#xA;                                }&#xD;&#xA;    &#xD;&#xA;                                if (activity != "All") {&#xD;&#xA;                                    if ($(this).find(".callstatus").html().toLowerCase().replace("&amp;", "&") != activity.toLowerCase()) {&#xD;&#xA;                                        $(this).hide();&#xD;&#xA;                                    }&#xD;&#xA;                                }&#xD;&#xA;    &#xD;&#xA;                            &#xD;&#xA;                            });&#xD;&#xA;                        }&#xD;&#xA;    }