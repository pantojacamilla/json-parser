    var data = [&#xD;&#xA;      [48803, "AAF1", "", "02200220", "OPEN", "D,AB", "D,AC", "E,AD", "F,AE", "D,AD"],&#xD;&#xA;      [48769, "AAD33", "", "77733337", "OPEN", "D,AB", "D,AB", "E,AD", "F,AD", "D,AB"]&#xD;&#xA;    ];&#xD;&#xA;    var op1 = {&#xD;&#xA;      value: '1:D; 2:E; 3:F'&#xD;&#xA;    };&#xD;&#xA;    var op2 = {&#xD;&#xA;      value: '1:AB;2:AC; 3:AD; 4:AE'&#xD;&#xA;    };&#xD;&#xA;    var arr1 = ["D", "E", "F"];&#xD;&#xA;    var arr2 = ["AB", "AC", "AD", "AE"];&#xD;&#xA;    $("#grid").jqGrid({&#xD;&#xA;      datatype: "local",&#xD;&#xA;      height: 250,&#xD;&#xA;      colNames: ['ID', 'CPR', 'Blank', 'DeptID', 'Status', '01', '02', '03', '04', '05'],&#xD;&#xA;      colModel: [{&#xD;&#xA;        name: 'ID',&#xD;&#xA;        index: 'ID',&#xD;&#xA;        width: 50,&#xD;&#xA;        sorttype: "int"&#xD;&#xA;      }, {&#xD;&#xA;        name: 'CPR',&#xD;&#xA;        index: 'CPR',&#xD;&#xA;        editable: true,&#xD;&#xA;        width: 60,&#xD;&#xA;        sorttype: "date"&#xD;&#xA;      }, {&#xD;&#xA;        name: 'blank',&#xD;&#xA;        editable: true,&#xD;&#xA;        index: 'blank',&#xD;&#xA;        width: 10&#xD;&#xA;      }, {&#xD;&#xA;        name: 'DeptID',&#xD;&#xA;        index: 'DeptID',&#xD;&#xA;        editable: true,&#xD;&#xA;        width: 60,&#xD;&#xA;        sorttype: "float"&#xD;&#xA;      }, {&#xD;&#xA;        name: 'Status',&#xD;&#xA;        index: 'Status',&#xD;&#xA;        width: 60,&#xD;&#xA;        sorttype: "float"&#xD;&#xA;      }, {&#xD;&#xA;        name: '01',&#xD;&#xA;        index: '01',&#xD;&#xA;        editable: true,&#xD;&#xA;        edittype: "select",&#xD;&#xA;        formatter: myformatter,&#xD;&#xA;        editoptions: op2,&#xD;&#xA;        width: 30,&#xD;&#xA;      }, {&#xD;&#xA;        name: '02',&#xD;&#xA;        index: '02',&#xD;&#xA;        editable: true,&#xD;&#xA;        edittype: "select",&#xD;&#xA;        formatter: myformatter,&#xD;&#xA;        editoptions: op1,&#xD;&#xA;        width: 30,&#xD;&#xA;      }, {&#xD;&#xA;        name: '03',&#xD;&#xA;        index: '03',&#xD;&#xA;        editable: true,&#xD;&#xA;        edittype: "select",&#xD;&#xA;        formatter: myformatter,&#xD;&#xA;        editoptions: op1,&#xD;&#xA;        width: 30,&#xD;&#xA;      }, {&#xD;&#xA;        name: '04',&#xD;&#xA;        index: '04',&#xD;&#xA;        editable: true,&#xD;&#xA;        edittype: "select",&#xD;&#xA;        formatter: myformatter,&#xD;&#xA;        editoptions: op1,&#xD;&#xA;        width: 30,&#xD;&#xA;      }, {&#xD;&#xA;        name: '05',&#xD;&#xA;        index: '05',&#xD;&#xA;        editable: true,&#xD;&#xA;        edittype: "select",&#xD;&#xA;        formatter: myformatter,&#xD;&#xA;        editoptions: op1,&#xD;&#xA;        width: 30,&#xD;&#xA;      }, ],&#xD;&#xA;      'cellEdit': true,&#xD;&#xA;      caption: "Stack Overflow Example",&#xD;&#xA;      // ondblClickRow: function(rowid,iRow,iCol,e){alert('double clicked');}&#xD;&#xA;    });&#xD;&#xA;    var names = ['ID', 'CPR', 'Blank', 'DeptID', 'Status', '01', '02', '03', '04', '05'];&#xD;&#xA;    var mydata = [];&#xD;&#xA;    for (var i = 0; i < data.length; i++) {&#xD;&#xA;      mydata[i] = {};&#xD;&#xA;      for (var j = 0; j < data[i].length; j++) {&#xD;&#xA;        mydata[i][names[j]] = data[i][j];&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    for (var i = 0; i <= mydata.length; i++) {&#xD;&#xA;      $("#grid").jqGrid('addRowData', i + 1, mydata[i]);&#xD;&#xA;    }&#xD;&#xA;    function myformatter(cellvalue, options, rowObject) {&#xD;&#xA;      var array = cellvalue.split(",");&#xD;&#xA;      return array[0] + " " + array[1];&#xD;&#xA;    }