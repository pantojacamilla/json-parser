    var map, marker, latLong;&#xD;&#xA;    var geocoderlat = new google.maps.Geocoder();  	&#xD;&#xA;    var addresslat = '<?php echo str_replace(" ","+",$address);?>';&#xD;&#xA;    function initMap() {&#xD;&#xA;    	&#xD;&#xA;    	geocoderlat.geocode( { 'address': addresslat}, function(results, status) {&#xD;&#xA;    	  if (status == google.maps.GeocoderStatus.OK) {&#xD;&#xA;    		latLong = results[0].geometry.location;&#xD;&#xA;    		alert("Inside IF: "+latLong);&#xD;&#xA;    	  } else {&#xD;&#xA;    		latLong = '<?php echo $latitude.",".$longitude;?>';&#xD;&#xA;    	  }&#xD;&#xA;    	})&#xD;&#xA;    	&#xD;&#xA;    	alert("Outside: "+latLong);&#xD;&#xA;        var isDraggable = !('ontouchstart' in document.documentElement);&#xD;&#xA;    	var mapOptions = { &#xD;&#xA;    	  center: new google.maps.LatLng(latLong),&#xD;&#xA;    	  zoom: 12,&#xD;&#xA;          (...)