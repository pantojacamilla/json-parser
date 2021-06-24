    var res = {&#xD;&#xA;      "loginType": "logout",&#xD;&#xA;      "status": "success",&#xD;&#xA;      "count": 1,&#xD;&#xA;      "absentCount": 2,&#xD;&#xA;      "startingLat": "12.9817121",&#xD;&#xA;      "startingLng": "77.72649609999996",&#xD;&#xA;      "companyLat": "12.9563031",&#xD;&#xA;      "companyLng": "77.6949695",&#xD;&#xA;      "data": [{&#xD;&#xA;          "empName": "Trisha",&#xD;&#xA;          "pickupTime": "07:45 AM",&#xD;&#xA;          "cabName": "Atios",&#xD;&#xA;          "pickupLatitude": "13.0180851",&#xD;&#xA;          "pickupLongitude": "77.76444330000004",&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "empName": "Divya",&#xD;&#xA;          "pickupTime": "08:45 AM",&#xD;&#xA;          "cabName": "Atios",&#xD;&#xA;          "pickupLatitude": "13.01807777",&#xD;&#xA;          "pickupLongitude": "77.764443308884",&#xD;&#xA;        },&#xD;&#xA;      ],&#xD;&#xA;      "travlledLocation": [{&#xD;&#xA;          "Travlinglatitude": "12.956664",&#xD;&#xA;          "Travlinglongitude": "77.696829"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.956604",&#xD;&#xA;          "Travlinglongitude": "77.696480"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.956523",&#xD;&#xA;          "Travlinglongitude": "77.696021"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.956413",&#xD;&#xA;          "Travlinglongitude": "77.695380"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.956335",&#xD;&#xA;          "Travlinglongitude": "77.695029"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.956230",&#xD;&#xA;          "Travlinglongitude": "77.694997"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.956107",&#xD;&#xA;          "Travlinglongitude": "77.694994"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.955934",&#xD;&#xA;          "Travlinglongitude": "77.694970"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.955639",&#xD;&#xA;          "Travlinglongitude": "77.694932"&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "Travlinglatitude": "12.955380",&#xD;&#xA;          "Travlinglongitude": "77.694902"&#xD;&#xA;        }&#xD;&#xA;      ]&#xD;&#xA;    }&#xD;&#xA;    var geocoder;&#xD;&#xA;    var map;&#xD;&#xA;    var directionsDisplay;&#xD;&#xA;    var directionsService = new google.maps.DirectionsService();&#xD;&#xA;    var locations = [&#xD;&#xA;      ['Start', 12.956664, 77.696829, 1],&#xD;&#xA;      ['2', 12.956604, 77.696480, 2],&#xD;&#xA;      ['3', 12.956523, 77.696021, 3],&#xD;&#xA;      ['4', 12.956413, 77.695380, 4],&#xD;&#xA;      ['5', 12.956335, 77.695029, 5],&#xD;&#xA;      ['6', 12.956230, 77.694997, 6],&#xD;&#xA;      ['7', 12.956107, 77.694994, 7],&#xD;&#xA;      ['8', 12.955934, 77.694970, 8],&#xD;&#xA;      ['9', 12.955639, 77.694932, 9],&#xD;&#xA;      ['End', 12.955380, 77.694902, 10]&#xD;&#xA;    ];&#xD;&#xA;    var waypoints = [{&#xD;&#xA;        "empName": "arun",&#xD;&#xA;        "pickupTime": "9:10 AM",&#xD;&#xA;        "lat": "12.956604",&#xD;&#xA;        "lng": "77.696480",&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "empName": "babu",&#xD;&#xA;        "pickupTime": "9:40 AM",&#xD;&#xA;        "lat": "12.956230",&#xD;&#xA;        "lng": "77.694997",&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "empName": "sharma",&#xD;&#xA;        "pickupTime": "9:55 AM",&#xD;&#xA;        "lat": "12.955639",&#xD;&#xA;        "lng": "77.694932",&#xD;&#xA;      }&#xD;&#xA;    ];&#xD;&#xA;    function initialize() {&#xD;&#xA;      directionsDisplay = new google.maps.DirectionsRenderer({&#xD;&#xA;        suppressMarkers: true&#xD;&#xA;      });&#xD;&#xA;      var map = new google.maps.Map(document.getElementById('map'), {&#xD;&#xA;        zoom: 10,&#xD;&#xA;        //center: new google.maps.LatLng(-33.92, 151.25), // &#xD;&#xA;        mapTypeId: google.maps.MapTypeId.ROADMAP&#xD;&#xA;      });&#xD;&#xA;      directionsDisplay.setMap(map);&#xD;&#xA;      var infowindow = new google.maps.InfoWindow();&#xD;&#xA;      var marker, i;&#xD;&#xA;      var request = {&#xD;&#xA;        travelMode: google.maps.TravelMode.DRIVING&#xD;&#xA;      };&#xD;&#xA;      for (i = 0; i < locations.length; i++) {&#xD;&#xA;        if (locations[i][3] == 1 || locations[i][3] == locations.length) {&#xD;&#xA;          marker = new google.maps.Marker({&#xD;&#xA;            position: new google.maps.LatLng(locations[i][1], locations[i][2]),&#xD;&#xA;            map: map,&#xD;&#xA;            i: locations[i][0]&#xD;&#xA;          });&#xD;&#xA;        }&#xD;&#xA;        google.maps.event.addListener(marker, 'click', (function(marker, infowindow) {&#xD;&#xA;          return function() {&#xD;&#xA;            infowindow.setContent(marker.i);&#xD;&#xA;            infowindow.open(map, marker);&#xD;&#xA;          };&#xD;&#xA;        })(marker, infowindow));&#xD;&#xA;        if (i == 0) request.origin = marker.getPosition();&#xD;&#xA;        else if (i == locations.length - 1) request.destination = marker.getPosition();&#xD;&#xA;      }&#xD;&#xA;      //push the waypoints to request.waypoints array&#xD;&#xA;      waypoints.forEach(function(v, i) {&#xD;&#xA;        marker = new google.maps.Marker({&#xD;&#xA;          position: new google.maps.LatLng(v.lat, v.lng),&#xD;&#xA;          map: map,&#xD;&#xA;          icon: {&#xD;&#xA;            url: 'http://www.myiconfinder.com/uploads/iconsets/256-256-56165014858e6dbadaf3ba00d782f125.png',&#xD;&#xA;            scaledSize: new google.maps.Size(45, 45)&#xD;&#xA;          },&#xD;&#xA;          data: v&#xD;&#xA;        });&#xD;&#xA;        google.maps.event.addListener(marker, 'click', (function(marker, infowindow) {&#xD;&#xA;          return function() {&#xD;&#xA;            infowindow.setContent('<b>Employee Name : </b>' + marker.data.empName + '<br><b>pickupTime : </b>' + marker.data.pickupTime);&#xD;&#xA;            infowindow.open(map, marker);&#xD;&#xA;          };&#xD;&#xA;        })(marker, infowindow));&#xD;&#xA;      })&#xD;&#xA;      directionsService.route(request, function(result, status) {&#xD;&#xA;        if (status == google.maps.DirectionsStatus.OK) {&#xD;&#xA;          directionsDisplay.setDirections(result);&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    google.maps.event.addDomListener(window, "load", initialize);