    var data = [{&#xD;&#xA;      "org_name": "General",&#xD;&#xA;      "suborg_name": "General1"&#xD;&#xA;    }, {&#xD;&#xA;      "org_name": "General",&#xD;&#xA;      "suborg_name": "General2"&#xD;&#xA;    }, {&#xD;&#xA;      "org_name": "General",&#xD;&#xA;      "suborg_name": "General3"&#xD;&#xA;    }, {&#xD;&#xA;      "org_name": "Fund",&#xD;&#xA;      "suborg_name": "Fund1"&#xD;&#xA;    }, {&#xD;&#xA;      "org_name": "Fund",&#xD;&#xA;      "suborg_name": "Fund2"&#xD;&#xA;    }, {&#xD;&#xA;      "org_name": "Fund",&#xD;&#xA;      "suborg_name": "Fund3"&#xD;&#xA;    }]&#xD;&#xA;    var tr;&#xD;&#xA;    $.each(data, function(i, v) {&#xD;&#xA;      tr = $('<tr class="org_name"/>');&#xD;&#xA;      tr.append("<td id=''>" + v.org_name + "</td>");&#xD;&#xA;      tr.append("<td id=''>" + v.suborg_name + "</td>");&#xD;&#xA;      $("table").append(tr);&#xD;&#xA;    })