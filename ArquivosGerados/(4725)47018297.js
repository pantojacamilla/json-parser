    // START OF UNSURE PART&#xD;&#xA;    $('document').ready(function() {&#xD;&#xA;    	var lastScrollTop = 0;&#xD;&#xA;    	$(window).scroll(function trucenscroll(event) {&#xD;&#xA;    	   var st = $(this).scrollTop();&#xD;&#xA;    	   var sl = $(this).scrollLeft();&#xD;&#xA;    	   if (st > lastScrollTop) {&#xD;&#xA;    	       &#xD;&#xA;    	       //Le cube tourne&#xD;&#xA;    		    var p1,angle,i,tmp;&#xD;&#xA;    			&#xD;&#xA;    			p1	= {'x': sl - p0.x,	'y': st - p0.y }, &#xD;&#xA;    			angle	= {'x': -p1.y * unit,		'y': p1.x * unit};&#xD;&#xA;    		  &#xD;&#xA;    			for(i = 0; i < faces.length; i++) &#xD;&#xA;    			{&#xD;&#xA;    				tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];&#xD;&#xA;    				faces[i].style.transform = p + tmp;&#xD;&#xA;    				faces[i].style['-webkit-transform'] = p + tmp;&#xD;&#xA;    			}&#xD;&#xA;    	   }&#xD;&#xA;    	   else if(st == lastScrollTop) {&#xD;&#xA;    	     //do nothing &#xD;&#xA;    	     //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one&#xD;&#xA;    	   }&#xD;&#xA;    	   else {&#xD;&#xA;    	   		var p1,angle,i,tmp;&#xD;&#xA;    			p1	= {'x': sl - p0.x,	'y': st - p0.y }, &#xD;&#xA;    			angle	= {'x': -p1.y * unit,		'y': p1.x * unit};&#xD;&#xA;    		  &#xD;&#xA;    			for(i = 0; i < faces.length; i++) &#xD;&#xA;    			{&#xD;&#xA;    				tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];&#xD;&#xA;    				faces[i].style.transform = p + tmp;&#xD;&#xA;    				faces[i].style['-webkit-transform'] = p + tmp;&#xD;&#xA;    			}&#xD;&#xA;    	   }&#xD;&#xA;    	   lastScrollTop = st;&#xD;&#xA;    	});&#xD;&#xA;    });&#xD;&#xA;    // END OF UNSURE PART&#xD;&#xA;    init();		&#xD;&#xA;    //===========================================================&#xD;&#xA;    //			onMouseMove&#xD;&#xA;    //===========================================================&#xD;&#xA;    function onMouseMove(e) &#xD;&#xA;    {&#xD;&#xA;    	var p1,angle,i,tmp;&#xD;&#xA;    	if (! dragging) return;&#xD;&#xA;    	p1	= {'x': e.clientX - p0.x,	'y': e.clientY - p0.y }, &#xD;&#xA;    	angle	= {'x': -p1.y * unit,		'y': p1.x * unit};&#xD;&#xA;      &#xD;&#xA;    	for(i = 0; i < faces.length; i++) &#xD;&#xA;    	{&#xD;&#xA;    		tmp = 'rotateX(' + angle.x + 'deg)' + ' rotateY(' + angle.y + 'deg)' + styles[i];&#xD;&#xA;    		faces[i].style.transform = p + tmp;&#xD;&#xA;    		faces[i].style['-webkit-transform'] = p + tmp;&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    //===========================================================&#xD;&#xA;    //			onMouseDown&#xD;&#xA;    //===========================================================&#xD;&#xA;    function onMouseDown(e)&#xD;&#xA;    {&#xD;&#xA;    	var element;&#xD;&#xA;    	onMouseUp();	// disable if dragging&#xD;&#xA;    	element = e.target;&#xD;&#xA;    	//if (! element.classList.contains('face')) return false;&#xD;&#xA;    	e.preventDefault();&#xD;&#xA;    	window.p0	= { 'x': e.clientX, 'y': e.clientY };&#xD;&#xA;    	dragging	= true;&#xD;&#xA;    	return false;&#xD;&#xA;    }&#xD;&#xA;    //===========================================================&#xD;&#xA;    //			onMouseUp&#xD;&#xA;    //===========================================================&#xD;&#xA;    function onMouseUp(e)&#xD;&#xA;    {&#xD;&#xA;    	var i,tmp,style;&#xD;&#xA;    	if (! dragging) return;&#xD;&#xA;    	dragging = false; &#xD;&#xA;    	for ( i = 0; i < faces.length; i++) &#xD;&#xA;    	{&#xD;&#xA;    		style = faces[i].style;&#xD;&#xA;    		tmp = style.transform || style['-webkit-transform'];&#xD;&#xA;    		styles[i] = tmp.replace('perspective(32em) ', '');&#xD;&#xA;    	}&#xD;&#xA;      &#xD;&#xA;    }&#xD;&#xA;    //=====================================================================&#xD;&#xA;    //			initializeCube&#xD;&#xA;    //=====================================================================&#xD;&#xA;    function initializeCube()&#xD;&#xA;    {&#xD;&#xA;    	var i,tmp;&#xD;&#xA;    	for (i = 0; i < faces.length; i++)&#xD;&#xA;    	{&#xD;&#xA;    		if (i  < 4) tmp = 'rotateY(' + i*90 + 'deg)';&#xD;&#xA;    		if (i >= 4) tmp = 'rotateX(' + Math.pow(-1, i) * 90 + 'deg)';&#xD;&#xA;    		tmp += ' translateZ(' + side/2 + 'px)';&#xD;&#xA;    	&#xD;&#xA;    		faces[i].style.transform = p + tmp;&#xD;&#xA;    		faces[i].style['-webkit-transform'] = p + tmp;&#xD;&#xA;    		styles.push(tmp);&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    //=====================================================================&#xD;&#xA;    //			init&#xD;&#xA;    //=====================================================================&#xD;&#xA;    function init()&#xD;&#xA;    {&#xD;&#xA;    	window.addEventListener('mousedown', onMouseDown, false);&#xD;&#xA;    	window.addEventListener('mouseup',   onMouseUp,   false);&#xD;&#xA;    	window.addEventListener('mousemove', onMouseMove, false);&#xD;&#xA;    	window.faces 		= document.querySelectorAll('.face');&#xD;&#xA;    	window.styles 		= new Array();&#xD;&#xA;    	window.style 		= getComputedStyle(faces[0]);&#xD;&#xA;    	window.factor 		= 3;&#xD;&#xA;    	window.side 		= parseInt(style.width.split('px')[0], 10);&#xD;&#xA;    	window.max_amount 	= factor * side; &#xD;&#xA;    	window.unit 		= 360 / max_amount;&#xD;&#xA;    	window.dragging 	= false;&#xD;&#xA;    	window.scrolling 	= false;&#xD;&#xA;    	window.p 		= 'perspective(32em)';&#xD;&#xA;    	initializeCube();&#xD;&#xA;    }