    var stime = $("#movesend").val();&#xD;&#xA;	var rtime = $("#moveretorna").val(); &#xD;&#xA;	var lastReturn= new Date(rtime);&#xD;&#xA;	var lastOut= new Date(stime);&#xD;&#xA;    &#xD;&#xA;    if(lastReturn>= lastOut)&#xD;&#xA;	{ &#xD;&#xA;		console.log("This date is after than the other!");&#xD;&#xA;	}&#xD;&#xA;	