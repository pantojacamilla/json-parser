    var str = "<a href=\"https://twitter.com/search?q=fnb\" target=\"_blank\">#fnb</a>, <a href=\"https://twitter.com/search?q=mobilesimcard\" target=\"_blank\">#mobilesimcard</a>, <a href=\"https://twitter.com/search?q=what\" target=\"_blank\">#what</a>, <a href=\"https://twitter.com/search?q=refugeechild\" target=\"_blank\">#refugeechild</a>";&#xD;&#xA;    &#xD;&#xA;    var array = [];&#xD;&#xA;    var parts = str.split('target=\"_blank\">', '');&#xD;&#xA;    &#xD;&#xA;    parts.forEach(function (part) {&#xD;&#xA;    	var rem1 = part.replace('</a>', '');&#xD;&#xA;    	array.push(rem1)&#xD;&#xA;    })&#xD;&#xA;    var value = array;&#xD;&#xA;    console.log(value);