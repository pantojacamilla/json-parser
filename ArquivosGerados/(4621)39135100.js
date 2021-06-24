    var map = L.map("map");&#xD;&#xA;    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);&#xD;&#xA;    map.setView([48.85, 2.35], 11);&#xD;&#xA;    var airfields = L.marker([48.85, 2.35]).addTo(map);&#xD;&#xA;    var docks = L.marker([48.85, 2.33]).addTo(map);&#xD;&#xA;    var stuff = L.marker([48.83602344356167,2.3617172241210938]).addTo(map);&#xD;&#xA;    var stuff2 = L.marker([48.840542852103084,2.3246383666992183]).addTo(map);&#xD;&#xA;    $("#clearAll").click(function(event) {&#xD;&#xA;      event.preventDefault();&#xD;&#xA;      $(".check").each(function(i, el) {&#xD;&#xA;      	el.checked = false; // Set new status (unchecked) first.&#xD;&#xA;        $(el).change(); // Trigger the event.&#xD;&#xA;      })&#xD;&#xA;    });&#xD;&#xA;    $(".check").change(function() {&#xD;&#xA;      var layerClicked = $(this).attr("id");&#xD;&#xA;      switch (layerClicked) {&#xD;&#xA;        case "airfields":&#xD;&#xA;          toggleLayer(this.checked, airfields);&#xD;&#xA;          break;&#xD;&#xA;        case "docks":&#xD;&#xA;          toggleLayer(this.checked, docks);&#xD;&#xA;          break;&#xD;&#xA;        case "stuff": toggleLayer(this.checked, stuff);&#xD;&#xA;          break;&#xD;&#xA;          case "stuff2": toggleLayer(this.checked, stuff2);&#xD;&#xA;          break;&#xD;&#xA;          // ...and so on...&#xD;&#xA;      }&#xD;&#xA;    });&#xD;&#xA;    function toggleLayer(checked, layer) {&#xD;&#xA;    	if (checked) {&#xD;&#xA;      	map.addLayer(layer);&#xD;&#xA;      } else {&#xD;&#xA;      	map.removeLayer(layer);&#xD;&#xA;      }&#xD;&#xA;    }