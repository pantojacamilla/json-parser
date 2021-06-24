	var can = document.getElementById('can');&#xD;&#xA;	var ctx = can.getContext('2d');&#xD;&#xA;	var canImageData = null;&#xD;&#xA;	var RGB_STRING_WHITE = '255-255-255-255';&#xD;&#xA;	var _recursions = 0;&#xD;&#xA;	function colour_fill_4_connectivity(x, y, RGBString_fill_colour, RGBString_region_colour){&#xD;&#xA;		//try {&#xD;&#xA;			var currentPixelRGBString = getRGBStringFromPixel(x, y);&#xD;&#xA;			if(currentPixelRGBString == RGBString_fill_colour || currentPixelRGBString != RGBString_region_colour)&#xD;&#xA;				return;&#xD;&#xA;			setPixelFromRGBString(x, y, RGBString_fill_colour);&#xD;&#xA;			if(x < can.width)&#xD;&#xA;				colour_fill_4_connectivity(x + 1, y, RGBString_fill_colour, RGBString_region_colour);&#xD;&#xA;			if(x > 0)&#xD;&#xA;				colour_fill_4_connectivity(x - 1, y, RGBString_fill_colour, RGBString_region_colour);&#xD;&#xA;			if(y < can.height)&#xD;&#xA;				colour_fill_4_connectivity(x, y + 1, RGBString_fill_colour, RGBString_region_colour);&#xD;&#xA;			if(y > 0)&#xD;&#xA;				colour_fill_4_connectivity(x, y - 1, RGBString_fill_colour, RGBString_region_colour);&#xD;&#xA;		//} catch(e) {&#xD;&#xA;			//console.log('ERROR: colour_fill_4_connectivity(' + x + ', ' + y + ', ' + RGBString_fill_colour + ', ' + RGBString_region_colour + ') -> ' + e);&#xD;&#xA;		//}&#xD;&#xA;	}&#xD;&#xA;	function RGBStringToArray(valRGB) {&#xD;&#xA;		return valRGB.split('-');&#xD;&#xA;	}&#xD;&#xA;	function getImageDataPosition(x, y) {&#xD;&#xA;		return (x + y * can.width) * 4;&#xD;&#xA;	}&#xD;&#xA;	function getRGBStringFromPixel(x, y) {&#xD;&#xA;		/*var data = ctx.getImageData(x, y, x + 1, y + 1).data;&#xD;&#xA;		return data[0] + '-' + data[1] + '-' + data[2] + '-' + data[3];*/&#xD;&#xA;		var data = canImageData.data;&#xD;&#xA;		var startIndex = getImageDataPosition(x, y);&#xD;&#xA;		return data[startIndex] + '-' + data[startIndex + 1] + '-' + data[startIndex + 2] + '-' + data[startIndex + 3];&#xD;&#xA;	}&#xD;&#xA;	function setPixelFromRGBString(x, y, valRGB) {&#xD;&#xA;		var imageData = ctx.createImageData(1, 1);&#xD;&#xA;		var data = imageData.data;&#xD;&#xA;		var rgbArr = RGBStringToArray(valRGB);&#xD;&#xA;		var startIndex = getImageDataPosition(x, y);&#xD;&#xA;		data[0] = rgbArr[0];&#xD;&#xA;		data[1] = rgbArr[1];&#xD;&#xA;		data[2] = rgbArr[2];&#xD;&#xA;		data[3] = rgbArr[3];&#xD;&#xA;		ctx.putImageData(imageData, x, y);&#xD;&#xA;		canImageData.data[startIndex] = rgbArr[0];&#xD;&#xA;		canImageData.data[startIndex + 1] = rgbArr[1];&#xD;&#xA;		canImageData.data[startIndex + 2] = rgbArr[2];&#xD;&#xA;		canImageData.data[startIndex + 3] = rgbArr[3];&#xD;&#xA;	}&#xD;&#xA;	// TEST&#xD;&#xA;	function _test_getRGBStringFromPixel() {&#xD;&#xA;		var res = [];&#xD;&#xA;		for(var y = 0; y < can.height; y++) {&#xD;&#xA;			for(var x = 0; x < can.width; x++) {&#xD;&#xA;				res.push({x:x, y:y, color:getRGBStringFromPixel(x, y)});&#xD;&#xA;			}&#xD;&#xA;		}&#xD;&#xA;		return JSON.stringify(res);&#xD;&#xA;	}&#xD;&#xA;	var img = new Image();&#xD;&#xA;	img.onload = (function(e) {&#xD;&#xA;		can.width = this.width;&#xD;&#xA;		can.height = this.height;&#xD;&#xA;		ctx.drawImage(this, 0, 0);&#xD;&#xA;		canImageData = ctx.getImageData(0, 0, can.width, can.height);&#xD;&#xA;	}).bind(img);&#xD;&#xA;	img.src = 'test-image.png';&#xD;&#xA;	can.addEventListener('click', function(e) {&#xD;&#xA;		var clickX = e.clientX, clickY = e.clientY;&#xD;&#xA;		if(e.button === 0 && clickX <= can.width && clickY <= can.height)&#xD;&#xA;			colour_fill_4_connectivity(clickX, clickY, RGB_STRING_WHITE, getRGBStringFromPixel(clickX, clickY));&#xD;&#xA;	}, false);