    $(document).ready(function(){&#xD;&#xA;	"use strict";&#xD;&#xA;	$("#one").hide();&#xD;&#xA;	$("#two").hide();&#xD;&#xA;	$("#three").hide();&#xD;&#xA;	$("#four").hide();&#xD;&#xA;	&#xD;&#xA;	$("button").click(function(){&#xD;&#xA;		$("#header").animate({&#xD;&#xA;			opacity: '0.2',&#xD;&#xA;			width: 'hide'}, '500');&#xD;&#xA;		$("#one").animate({&#xD;&#xA;			width: 'show'&#xD;&#xA;		});&#xD;&#xA;	});&#xD;&#xA;	&#xD;&#xA;	&#xD;&#xA;	&#xD;&#xA;	$("#button1").click(function(e){&#xD;&#xA;		$("#one").animate({&#xD;&#xA;			opacity: '0.2', height: 'hide'});  e.stopPropagation();&#xD;&#xA;		$("#two").animate({&#xD;&#xA;			width: 'show'&#xD;&#xA;		});&#xD;&#xA;	});&#xD;&#xA;	&#xD;&#xA;	$("#button2").click(function(){&#xD;&#xA;		$("#two").animate({&#xD;&#xA;			opacity: '0.2',&#xD;&#xA;			height: 'hide'}, '500');&#xD;&#xA;		$("#three").animate({&#xD;&#xA;			width: 'show'&#xD;&#xA;		});&#xD;&#xA;	});&#xD;&#xA;	&#xD;&#xA;	$("#button3").click(function(){&#xD;&#xA;		$("#three").animate({&#xD;&#xA;			opacity: '0.2',&#xD;&#xA;			height: 'hide'}, '500');&#xD;&#xA;		$("#four").animate({&#xD;&#xA;			width: 'show'&#xD;&#xA;		});&#xD;&#xA;	});&#xD;&#xA;	&#xD;&#xA;	});