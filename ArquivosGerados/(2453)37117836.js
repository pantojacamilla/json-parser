     $(document).ready(function () {&#xD;&#xA;                $("#jqGrid").jqGrid({&#xD;&#xA;                    data: data.rows,&#xD;&#xA;                    datatype: "local",&#xD;&#xA;                    styleUI : "Bootstrap",&#xD;&#xA;                    colModel: [&#xD;&#xA;                               { label: 'Order ID', name: 'OrderID', key: true, width: 75, hidden:true },                   &#xD;&#xA;                     &#xD;&#xA;                            &#xD;&#xA;                               { label: 'Customer ID', name: 'CustomerID', width: 150, editable : true, edittype:"textarea"},&#xD;&#xA;                             &#xD;&#xA;          &#xD;&#xA;                           ],&#xD;&#xA;                      &#xD;&#xA;    				//..... other parameters &#xD;&#xA;                      &#xD;&#xA;                   	loadComplete: function () {&#xD;&#xA;                   	    var $this = $(this), ids = $this.jqGrid('getDataIDs'), i;&#xD;&#xA;                   	 	for (i = ids.length - 1; i >= 0 ; i--) {&#xD;&#xA;                   	    }&#xD;&#xA;                   	 for(var i=0;i < ids.length;i++)&#xD;&#xA;                     {&#xD;&#xA;                         var cl = ids[i]; &#xD;&#xA;                         be = "<input style='height:25px;width:50px;' type='text''   />"; &#xD;&#xA;                         se = "<input style='height:22px;width:40px;' type='button' value='..'  />";  &#xD;&#xA;                         jQuery("#jqGrid").jqGrid('setRowData',ids[i],{CustomerID:be+se}); &#xD;&#xA;                         }&#xD;&#xA;               &#xD;&#xA;                   	}&#xD;&#xA;                });&#xD;&#xA;                ;&#xD;&#xA;                &#xD;&#xA;               &#xD;&#xA;                &#xD;&#xA;            });