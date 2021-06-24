    jQuery(document).ready(function($) {&#xD;&#xA;      var $filterChecks = $('.tag-filters :checkbox');&#xD;&#xA;      $filterChecks.change(function() {&#xD;&#xA;        var classSelectors = $filterChecks.filter(':checked').map(function() {&#xD;&#xA;          return '.' + this.value;&#xD;&#xA;        }).get();&#xD;&#xA;        var $cont = $('.col-md-4');&#xD;&#xA;        if (classSelectors.length) {&#xD;&#xA;          $cont.hide().has(classSelectors.join()).show();&#xD;&#xA;        } else {&#xD;&#xA;          $cont.show();&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;      &#xD;&#xA;      // pagination&#xD;&#xA;    		var totalContent = $(".col-md-4").length;&#xD;&#xA;    		var onePageContent = 4;&#xD;&#xA;    		  $(".items-leading .col-md-4:gt(" + (onePageContent - 1) + ")").hide();&#xD;&#xA;    		var totalPage = Math.round(totalContent / onePageContent);&#xD;&#xA;    		  for(i= 1; i <= totalPage; i++) {&#xD;&#xA;    		    $(".pagination").append("<a href='javascript:void(0)'>" + i + "</a>");&#xD;&#xA;    		  }&#xD;&#xA;    		  $(".pagination a:first").addClass("active");&#xD;&#xA;    		  $(".pagination a").on("click", function() {&#xD;&#xA;    		      var index = $(this).index() + 1;&#xD;&#xA;    		      var gt = onePageContent * index;&#xD;&#xA;    		      $(".pagination a").removeClass("active");&#xD;&#xA;    		      $(this).addClass("active");&#xD;&#xA;    		      $(".items-leading .col-md-4").hide();&#xD;&#xA;    		      for(i = gt - onePageContent; i < gt; i++) {&#xD;&#xA;    		        $(".items-leading .col-md-4:eq(" + i + ")").show();&#xD;&#xA;    		      }&#xD;&#xA;    		  }); // pagination&#xD;&#xA;    });