    responsetable = [{&#xD;&#xA;      "Qty": 3,&#xD;&#xA;      "List1": [],&#xD;&#xA;      "List2": [&#xD;&#xA;        {&#xD;&#xA;          "serialNumber": "1",&#xD;&#xA;           "ischecked":false&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "serialNumber": "2",&#xD;&#xA;           "ischecked":true&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "serialNumber": "3",&#xD;&#xA;           "ischecked":false&#xD;&#xA;        }&#xD;&#xA;      ],&#xD;&#xA;      "lineItemId": 50,&#xD;&#xA;      "lineItemQty": 3,&#xD;&#xA;    },&#xD;&#xA;    ]&#xD;&#xA;    const filter = _.filter(this.responsetable, function (item) {&#xD;&#xA;     return  _.some(item.List2, { 'ischecked': true });&#xD;&#xA;    });&#xD;&#xA;    console.dir(filter)