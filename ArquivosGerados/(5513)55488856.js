    let dataJSONfull = JSON.parse('[["10.10.90.3","10.10.81.36",5],["10.35.12.8","10.35.24.33",5],["10.40.1.254","10.40.8.151",4],["10.89.7.117","10.89.3.109",4],["10.40.0.126","10.40.8.151",4],["10.6.94.77","10.10.86.5",4],["10.81.102.133","10.10.77.21",3],["10.81.102.133","10.10.86.32",3],["10.81.102.133","10.20.3.91",3],["10.81.102.133","10.85.75.250",3],["10.81.102.133","10.91.114.78",2],["10.10.66.1","10.10.82.0",3],["10.40.15.254","10.40.8.151",2],["10.40.8.175","10.120.0.150",2],["10.40.8.175","10.40.1.15",2],["10.40.8.175","10.40.8.151",2],["10.24.137.61","10.10.77.21",2],["10.24.137.61","10.10.85.1",2],["10.10.68.56","10.10.68.56",2],["10.10.84.3","10.10.86.5",2],["10.10.84.3","10.10.85.1",1],["10.10.86.5","10.10.86.5",2],["10.20.3.91","10.20.3.91",2],["172.16.15.150","172.16.15.150",2],["10.120.0.254","10.40.8.151",1],["10.2.0.1","10.2.0.71",1],["10.40.8.151","10.40.8.151",1],["10.81.99.19","10.91.114.78",1]]')&#xD;&#xA;    let dataJSON = JSON.parse('[["10.10.90.3","10.10.81.36",5],["10.35.12.8","10.35.24.33",5]]')&#xD;&#xA;    //console.log(dataJSONfull, dataJSON)&#xD;&#xA;    Highcharts.chart('container', {&#xD;&#xA;      title: {&#xD;&#xA;        text: 'Highcharts Sankey Diagram'&#xD;&#xA;      },&#xD;&#xA;      series: [{&#xD;&#xA;        keys: ['from', 'to', 'weight'],&#xD;&#xA;        data: dataJSON,&#xD;&#xA;        type: 'sankey',&#xD;&#xA;        name: 'Sankey demo series'&#xD;&#xA;      }]&#xD;&#xA;    });