    var currentMarker;&#xD;&#xA;      var map = new google.maps.Map(document.getElementById('map'), {&#xD;&#xA;        center: {lat: 40.740, lng: -74.18},&#xD;&#xA;        zoom : 15,&#xD;&#xA;        mapTypeId: google.maps.MapTypeId.ROADMAP,&#xD;&#xA;        minZoom: 15,&#xD;&#xA;        maxZoom: 15&#xD;&#xA;      });&#xD;&#xA;      var imageBounds = {&#xD;&#xA;        north: 40.773941,&#xD;&#xA;        south: 40.712216,&#xD;&#xA;        east: -74.12544,&#xD;&#xA;        west: -74.22655&#xD;&#xA;      };&#xD;&#xA;      historicalOverlay = new google.maps.GroundOverlay(&#xD;&#xA;      'http://i.stack.imgur.com/0mgx2.jpg',&#xD;&#xA;      imageBounds);&#xD;&#xA;      historicalOverlay.setMap(map);&#xD;&#xA;      var strictBounds = new google.maps.LatLngBounds(&#xD;&#xA;        new google.maps.LatLng(40.712216, -74.22655),&#xD;&#xA;        new google.maps.LatLng(40.773941, -74.12544)&#xD;&#xA;      );&#xD;&#xA;      // Listen for the dragend event&#xD;&#xA;      google.maps.event.addListener(map, 'bounds_changed', function() {&#xD;&#xA;        if (strictBounds.contains(map.getCenter())) return;&#xD;&#xA;        // We're out of bounds - Move the map back within the bounds&#xD;&#xA;        var c = map.getCenter(),&#xD;&#xA;            x = c.lng(),&#xD;&#xA;            y = c.lat(),&#xD;&#xA;            maxX = strictBounds.getNorthEast().lng(),&#xD;&#xA;            maxY = strictBounds.getNorthEast().lat(),&#xD;&#xA;            minX = strictBounds.getSouthWest().lng(),&#xD;&#xA;            minY = strictBounds.getSouthWest().lat();&#xD;&#xA;        if (x < minX) x = minX;&#xD;&#xA;        if (x > maxX) x = maxX;&#xD;&#xA;        if (y < minY) y = minY;&#xD;&#xA;        if (y > maxY) y = maxY;&#xD;&#xA;        map.setCenter(new google.maps.LatLng(y, x));&#xD;&#xA;      });