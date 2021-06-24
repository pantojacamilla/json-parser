        var map;&#xD;&#xA;        var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";&#xD;&#xA;        google.maps.event.addDomListener(window, 'load', initialize);&#xD;&#xA;        &#xD;&#xA;        function initialize() {&#xD;&#xA;            var map_center  = new google.maps.LatLng(55.144178,-2.254122);&#xD;&#xA;            var store_pins  = new Array();&#xD;&#xA;            var pin_marker  = new Array();&#xD;&#xA;            var pin_info    = new Array();&#xD;&#xA;            var pin_infoop  = new Array();&#xD;&#xA;            &#xD;&#xA;            store_pins = [&#xD;&#xA;                ['Bellingham Co-Op', 55.144178, -2.254122,'pin','bellinghamcoop.jpg','Staff at Bellingham Co-Op'],&#xD;&#xA;                ['Leicester Tigers - Kingston Park', 55.018754, -1.672230,'rugby','kingparktigers.jpg','Stu with the Leicester Tigers Rugby Team'],&#xD;&#xA;                ['The Hawick PSA Team', 55.421825, -2.797123,'rugby','hawickpsa.jpg','The Hawick PSA Team']&#xD;&#xA;            ];&#xD;&#xA;        var myOptions = {&#xD;&#xA;            zoom: 3,&#xD;&#xA;            minZoom: 3,&#xD;&#xA;            center: map_center,&#xD;&#xA;            mapTypeId: google.maps.MapTypeId.ROADMAP&#xD;&#xA;        }&#xD;&#xA;        &#xD;&#xA;            map = new google.maps.Map(document.getElementById("trackingT-map"), myOptions);&#xD;&#xA;        &#xD;&#xA;            // Main Loop&#xD;&#xA;            &#xD;&#xA;            &#xD;&#xA;            for(i=0;i<store_pins.length;i++)&#xD;&#xA;            {&#xD;&#xA;            var pos = new google.maps.LatLng(store_pins[i][1], store_pins[i][2]);&#xD;&#xA;            var pinIcon = {&#xD;&#xA;                url: 'icons/shirtpin.png',&#xD;&#xA;                //The size image file.&#xD;&#xA;                size: new google.maps.Size(50, 55),&#xD;&#xA;                //The point on the image to measure the anchor from. 0, 0 is the top left.&#xD;&#xA;                origin: new google.maps.Point(0, 0),&#xD;&#xA;                //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.&#xD;&#xA;                anchor: new google.maps.Point(25, 20)&#xD;&#xA;            };&#xD;&#xA;            var pinShape = {&#xD;&#xA;                coord: [0,0,50,55],&#xD;&#xA;                type: 'rect'&#xD;&#xA;            };&#xD;&#xA;            pin_marker[i] = new google.maps.Marker(&#xD;&#xA;            {&#xD;&#xA;                    position:       pos,&#xD;&#xA;                    map:            map,&#xD;&#xA;                    title:          store_pins[i][0],&#xD;&#xA;                    icon:           pinIcon,&#xD;&#xA;                    shape:          pinShape,&#xD;&#xA;                    zIndex:         107&#xD;&#xA;               } &#xD;&#xA;            );&#xD;&#xA;                &#xD;&#xA;            pin_infoop[i] = {&#xD;&#xA;                    disableAutoPan: false&#xD;&#xA;                    ,maxWidth: 0&#xD;&#xA;                    ,pixelOffset: new google.maps.Size(-241, 0)&#xD;&#xA;                    ,zIndex: null&#xD;&#xA;                    ,boxStyle: { &#xD;&#xA;                    background: "url('infobox/pop_up_box_top_arrow.png') no-repeat"&#xD;&#xA;                    ,opacity: 1&#xD;&#xA;                    ,width: "430px"&#xD;&#xA;                    }&#xD;&#xA;                    ,closeBoxMargin: "10px 2px 2px 2px"&#xD;&#xA;                    ,closeBoxURL: "icons/button_close.png"&#xD;&#xA;                    ,infoBoxClearance: new google.maps.Size(1, 1)&#xD;&#xA;                    ,isHidden: false&#xD;&#xA;                    ,pane: "floatPane"&#xD;&#xA;                    ,enableEventPropagation: false&#xD;&#xA;                    ,text_infobox:   store_pins[i][5]&#xD;&#xA;                    ,text_infoimg:   store_pins[i][4]&#xD;&#xA;            };&#xD;&#xA;            pin_info[i] = new InfoBox(pin_infoop[i]);&#xD;&#xA;                &#xD;&#xA;                &#xD;&#xA;            google.maps.event.addListener(pin_marker[i], 'click', function(i) {&#xD;&#xA;                map.panTo(this.position);&#xD;&#xA;                map.setZoom(10);&#xD;&#xA;                pin_info[i].open(map, this);&#xD;&#xA;            });&#xD;&#xA;    } &#xD;&#xA;    };