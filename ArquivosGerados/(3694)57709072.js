    var data = [{&#xD;&#xA;        animalrId: 11111111111,&#xD;&#xA;        // "lionId": erer,&#xD;&#xA;        uiuiuiId: "151856658687700",&#xD;&#xA;        ddfdfdf: "2018-02-14 19:03:31",&#xD;&#xA;        category: "wewe5454",&#xD;&#xA;        organizationName: "apple boy",&#xD;&#xA;        jioID: "fdkldfkl",&#xD;&#xA;        jioIDType: "EIN",&#xD;&#xA;        heightValueStart: "c",&#xD;&#xA;        formattedjioID: "8989-23892389",&#xD;&#xA;        lowerOrgName: "apple boy",&#xD;&#xA;        animalNumbersRank: [{&#xD;&#xA;          number: "c"&#xD;&#xA;        }],&#xD;&#xA;        dklfkldf: [{&#xD;&#xA;          number: "1548267230"&#xD;&#xA;        }],&#xD;&#xA;        jkkklkl: [{&#xD;&#xA;          number: "21468096",&#xD;&#xA;          expired: "Y"&#xD;&#xA;        }],&#xD;&#xA;        sortColumn: "c"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        animalrId: 222222222222,&#xD;&#xA;        lionId: 232323,&#xD;&#xA;        uiuiuiId: "153920398625500",&#xD;&#xA;        ddfdfdf: "2018-10-10 19:02:45",&#xD;&#xA;        category: "wewe 2323",&#xD;&#xA;        organizationName: "b",&#xD;&#xA;        jioID: "fdkldfkl",&#xD;&#xA;        jioIDType: "EIN",&#xD;&#xA;        heightValueStart: "b",&#xD;&#xA;        formattedjioID: "8989-23892389",&#xD;&#xA;        lowerOrgName: "apple boy",&#xD;&#xA;        sortColumn: ""&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        animalrId: 33333333333,&#xD;&#xA;        lionId: 232323,&#xD;&#xA;        uiuiuiId: "153920398625500",&#xD;&#xA;        ddfdfdf: "2018-10-10 19:02:45",&#xD;&#xA;        category: "wewe 545445",&#xD;&#xA;        organizationName: "apple boy",&#xD;&#xA;        jioID: "fdkldfkl",&#xD;&#xA;        jioIDType: "EIN",&#xD;&#xA;        heightValueStart: "a",&#xD;&#xA;        formattedjioID: "8989-23892389",&#xD;&#xA;        lowerOrgName: "apple boy",&#xD;&#xA;        animalNumbersRank: [{&#xD;&#xA;          number: "a"&#xD;&#xA;        }],&#xD;&#xA;        dklfkldf: [{&#xD;&#xA;          number: "1548267230"&#xD;&#xA;        }],&#xD;&#xA;        jkkklkl: [{&#xD;&#xA;            number: "475255"&#xD;&#xA;          },&#xD;&#xA;          {&#xD;&#xA;            number: "299993436",&#xD;&#xA;            expired: "Y"&#xD;&#xA;          }&#xD;&#xA;        ],&#xD;&#xA;        sortColumn: "a"&#xD;&#xA;      }&#xD;&#xA;    ];&#xD;&#xA;    const mappedData = data.map(number => {&#xD;&#xA;      /* ... */&#xD;&#xA;      number.sortColumn = "";&#xD;&#xA;      if (number.animalNumbersRank) {&#xD;&#xA;        number.sortColumn = number.animalNumbersRank[0].number;&#xD;&#xA;      }&#xD;&#xA;      console.log("number.sortColumn--->", number.sortColumn);&#xD;&#xA;      console.log("number.heightValueStart--->", number.heightValueStart);&#xD;&#xA;      return number;&#xD;&#xA;    });&#xD;&#xA;    const sortedData = mappedData.sort((a, b) => {&#xD;&#xA;      /* ... */&#xD;&#xA;      a.heightValueStart < b.heightValueStart ?&#xD;&#xA;        -1 :&#xD;&#xA;        a.heightValueStart > b.heightValueStart ?&#xD;&#xA;        1 :&#xD;&#xA;        a.sortColumn < b.sortColumn ?&#xD;&#xA;        -1 :&#xD;&#xA;        a.sortColumn > b.sortColumn ?&#xD;&#xA;        1 :&#xD;&#xA;        0;&#xD;&#xA;    });&#xD;&#xA;    console.log("data--->", data);&#xD;&#xA;    console.log("sortedData--->", sortedData);