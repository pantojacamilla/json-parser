    var table = new Tabulator("#table_1", {&#xD;&#xA;      height:"fitData",&#xD;&#xA;      layout:"fitData",&#xD;&#xA;      movableRows: true, //enable user movable rows&#xD;&#xA;      movableColumns: true, //enable user movable columns&#xD;&#xA;      columns:[                 //define the table columns&#xD;&#xA;    		{title:"Col1", field:"col1", editor:true},&#xD;&#xA;        {title:"Col2", field:"col2", editor:true},&#xD;&#xA;        {title:"Col3", field:"col3", editor:true},&#xD;&#xA;    	],&#xD;&#xA;      rowFormatter:function(row){&#xD;&#xA;        var data = row.getData(); //get data object for row&#xD;&#xA;      },&#xD;&#xA;    });         // Build Tabulator:&#xD;&#xA;    var tabledata = [{'col1': 'data1', 'col2': 'data2', 'col3': 'data3'},&#xD;&#xA;                    {'col1': 'data1', 'col2': 'data2', 'col3': 'data3'},&#xD;&#xA;                    {'col1': 'data1', 'col2': 'data2', 'col3': 'data3'},&#xD;&#xA;    								];&#xD;&#xA;    table.setData(tabledata);&#xD;&#xA;    table.setSort("col1", "asc");&#xD;&#xA;    row_1 = table.getRow(1);&#xD;&#xA;    console.log(row_1);