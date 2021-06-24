    //Code for Slideshow&#xD;&#xA;    var divSlide = document.querySelectorAll('#slide');&#xD;&#xA;    var myNodeList = divSlide.length;&#xD;&#xA;    let slideNo = 1;&#xD;&#xA;    for(var i = 0; i < myNodeList; i++) {&#xD;&#xA;    	var type = divSlide[i].getAttribute("type");&#xD;&#xA;    	if (type == "timeline") {&#xD;&#xA;    	} else if (type == "slideshow") {&#xD;&#xA;    		var timeline = divSlide[i];     &#xD;&#xA;    		let sliderData = timeline.getElementsByTagName("section");&#xD;&#xA;    		&#xD;&#xA;    		$("[type=slideshow] section").addClass('hide');&#xD;&#xA;    		for(let ele of Array.from($("[type=slideshow]"))){&#xD;&#xA;    			$(ele).children("section:first").removeClass("hide").addClass('active');&#xD;&#xA;    		}&#xD;&#xA;    		timeline.insertAdjacentHTML("afterbegin",'<a class="left prev color_arrow carousel-control" href="#myCarousel" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a>');&#xD;&#xA;    		timeline.insertAdjacentHTML('afterbegin','<a class="right next color_arrows  carousel-control" href="#myCarousel"  data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a>');&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    $(document).on ('click','.prev',function() {&#xD;&#xA;    	let select = $(this).parent();&#xD;&#xA;    	let totChild = select.children("section");&#xD;&#xA;    	for(let i=0;i<totChild.length;i++){&#xD;&#xA;    		if(totChild[i].getAttribute('class').indexOf('active')!=-1){&#xD;&#xA;    			slideNo=i+1;&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;    	totChild.children('br').remove();&#xD;&#xA;    	let current = select.children('.active');&#xD;&#xA;    	let prevEl = current.prev('section');&#xD;&#xA;    	&#xD;&#xA;    	if(slideNo === totChild.length || slideNo > 1){&#xD;&#xA;    		select.children(".next").show();&#xD;&#xA;    		if(prevEl.length !== 1){&#xD;&#xA;    			prevEl = current.prev().prev();&#xD;&#xA;    			current.removeClass('active');&#xD;&#xA;    			current.addClass('hide');&#xD;&#xA;    			prevEl.addClass('active');&#xD;&#xA;    			prevEl.addClass('animated');&#xD;&#xA;    			prevEl.addClass('fadeInLeft');&#xD;&#xA;    			prevEl.removeClass('hide');&#xD;&#xA;    		}&#xD;&#xA;    	} else {&#xD;&#xA;    		select.children(".prev").hide();&#xD;&#xA;    	}&#xD;&#xA;    });&#xD;&#xA;    $(document).on ('click','.next',function() {&#xD;&#xA;    	let select = $(this).parent();&#xD;&#xA;    	let totChild = select.children("section");&#xD;&#xA;    	for(let i=0;i<totChild.length;i++){&#xD;&#xA;    		if(totChild[i].getAttribute('class').indexOf('active')!=-1){&#xD;&#xA;    			slideNo=i+1;&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;    	totChild.children('br').remove();&#xD;&#xA;    	let current = select.children('.active');&#xD;&#xA;    	let prevEl = current.next('section');&#xD;&#xA;    	if(slideNo ===1 || slideNo < totChild.length){&#xD;&#xA;    		&#xD;&#xA;    		select.children(".prev").show();&#xD;&#xA;    		if(prevEl.length !== 1){&#xD;&#xA;    			prevEl = current.next().next();&#xD;&#xA;    			current.removeClass('active');&#xD;&#xA;    			current.addClass('hide');&#xD;&#xA;    			prevEl.addClass('animated');&#xD;&#xA;    			prevEl.addClass('fadeInRight');&#xD;&#xA;    			prevEl.addClass('active');&#xD;&#xA;    			prevEl.removeClass('hide');&#xD;&#xA;    		}&#xD;&#xA;    	} else {&#xD;&#xA;    		select.children(".next").hide();&#xD;&#xA;    	}&#xD;&#xA;    });