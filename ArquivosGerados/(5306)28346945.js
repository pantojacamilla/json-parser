    var alphaNumericArray = [&#xD;&#xA;      '8a337e46-7d3f-46bc-b661-579f8d25fe09',&#xD;&#xA;      '09312d27-4ddc-458e-95dd-74531f787368',&#xD;&#xA;      'e7c5fba1-ce59-439a-a560-8f558e7c0ac4',&#xD;&#xA;      '1edcdde8-702e-4703-a505-ca81b77accdd',&#xD;&#xA;      '2f66ba6c-7fd2-4d52-8ed6-b0ee6d4d0310',&#xD;&#xA;      '7529217d-ee80-41eb-ade7-208674924ab9',&#xD;&#xA;      '523f4f75-8d0a-4ad1-8f40-e8bc679956be',&#xD;&#xA;      '80871291-c8de-47d9-9b02-3f8444c5d64e',&#xD;&#xA;      '7529217d-ee80-41eb-ade7-208674924ab9'&#xD;&#xA;    ];&#xD;&#xA;    alphaNumericArray.sort(function(a, b) {&#xD;&#xA;      a = a.value;&#xD;&#xA;      b = b.value;&#xD;&#xA;      return a - b;&#xD;&#xA;    });&#xD;&#xA;    document.getElementById('out').textContent = JSON.stringify(alphaNumericArray, null, 2);