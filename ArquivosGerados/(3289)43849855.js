    jQuery(document).ready(function($) {&#xD;&#xA;           var node_id = 28;&#xD;&#xA;           $('.thumbnailIcon').each(function(index, item) {&#xD;&#xA;                $(item).find('.' + node_id).insertAfter($(item).find('li:eq(1)'));&#xD;&#xA;            });&#xD;&#xA;     $('.flex-next').click(function() {&#xD;&#xA;       $('.thumbnailIcon').each(function(index, item) {&#xD;&#xA;    			var fourthLi = $(item).find("li:nth-child(4)");&#xD;&#xA;    			var thirdLi = $(item).find("li:nth-child(3)").addClass("animated slideInLeft",1000);&#xD;&#xA;    			var firstLi = $(item).find("li:nth-child(4)").addClass("animated fadeInRight",1000);&#xD;&#xA;    			var secondLi = $(item).find("li:nth-child(2)").addClass("animated slideInRight",1000);&#xD;&#xA;    			$(secondLi).before(fourthLi);&#xD;&#xA;            });&#xD;&#xA;     });&#xD;&#xA;    });