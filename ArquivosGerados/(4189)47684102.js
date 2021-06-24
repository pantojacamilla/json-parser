    async function getLayers() {  &#xD;&#xA;    try {&#xD;&#xA;      $.when(&#xD;&#xA;        await $.getJSON('http://' + ipAddress + '/api/Barriers/barrierGeoJSON', function (data) {&#xD;&#xA;            createLayer(data[0].row_to_json, 'Barrier');&#xD;&#xA;          }),&#xD;&#xA;         await $.getJSON('http://' + ipAddress + '/api/DistPoints/distPointGeoJSON', function (data) {&#xD;&#xA;            createLayer(data[0].row_to_json, 'Disturbance Points');&#xD;&#xA;          })&#xD;&#xA;      )}&#xD;&#xA;      catch (err) {&#xD;&#xA;        console.error(err);&#xD;&#xA;      }&#xD;&#xA;    };