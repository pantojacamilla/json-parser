    function initialize() {&#xD;&#xA;      var crosshairShape = {&#xD;&#xA;        coords: [0, 0, 0, 0],&#xD;&#xA;        type: 'rect'&#xD;&#xA;      };&#xD;&#xA;      var latlng = new google.maps.LatLng(54.62279178711505, -5.895538330078125);&#xD;&#xA;      var myOptions = {&#xD;&#xA;        zoom: 12,&#xD;&#xA;        center: latlng,&#xD;&#xA;        mapTypeId: google.maps.MapTypeId.SATELLITE,&#xD;&#xA;        mapTypeControlOptions: {&#xD;&#xA;          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU&#xD;&#xA;        }&#xD;&#xA;      };&#xD;&#xA;      var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);&#xD;&#xA;      var marker = new google.maps.Marker({&#xD;&#xA;        map: map,&#xD;&#xA;      });&#xD;&#xA;      document.getElementById('coordinates').innerHTML = "<b>center coordinates</b>: " + map.getCenter().toUrlValue(6)&#xD;&#xA;      google.maps.event.addListener(map, 'center_changed', function() {&#xD;&#xA;        document.getElementById('coordinates').innerHTML = "<b>center coordinates</b>: " + map.getCenter().toUrlValue(6);&#xD;&#xA;      });&#xD;&#xA;      marker.bindTo('position', map, 'center');&#xD;&#xA;    }&#xD;&#xA;    google.maps.event.addDomListener(window, 'load', initialize);