    var commentCount = $('.review-history-comment').length;&#xD;&#xA;    	$('.total-count').html(commentCount);&#xD;&#xA;    	var commentsCountLi = $('#myList').children("li").length;&#xD;&#xA;    	if (commentsCountLi <= 0) {&#xD;&#xA;    		$('#myList').parent('.request-action-info').addClass('no-history');&#xD;&#xA;    	}&#xD;&#xA;        var ul = $('#myList'), ulh = ul.height(), h = 0;&#xD;&#xA;        ul.children('li').each(function(i) {&#xD;&#xA;            if(i===4) {&#xD;&#xA;                return false;&#xD;&#xA;            }&#xD;&#xA;            h += this.offsetHeight;        &#xD;&#xA;        });&#xD;&#xA;        $(".review-history-comment-icons").click(function(e) {&#xD;&#xA;            e.preventDefault();&#xD;&#xA;            $(this).toggleClass("icon-rotate");&#xD;&#xA;            $(this).next(".review-history-comment-desc").toggle();        &#xD;&#xA;            if ("$('#myList'):hasClass(.myList-overflow)") {&#xD;&#xA;                $("#myList").removeClass("myList-overflow");           &#xD;&#xA;            }&#xD;&#xA;            if ($(".review-history-comment-desc").is(':visible')) {&#xD;&#xA;                $("#myList").removeClass("myList-overflow");&#xD;&#xA;                 $('#myList-toggle').text("View Less -");&#xD;&#xA;                 if ($('#myList-toggle').text("View Less -")) {&#xD;&#xA;                    $("#myList").removeClass("myList-overflow");&#xD;&#xA;                 }&#xD;&#xA;            }&#xD;&#xA;            else if ($(".review-history-comment-desc").is(':hidden')){&#xD;&#xA;                $("#myList").addClass("myList-overflow");&#xD;&#xA;                 $('#myList-toggle').text("View More +");&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;        ul.css({'height':h+'px'});&#xD;&#xA;        $('#myList-toggle').click(function() {&#xD;&#xA;            ul.animate({'height':(ul.height()>h?h:ulh)+'px'});&#xD;&#xA;            ($(this).text() === "View More +") ? $(this).text("View Less -") : $(this).text("View More +");&#xD;&#xA;            $("#myList").toggleClass("myList-overflow");&#xD;&#xA;            return false;&#xD;&#xA;        });