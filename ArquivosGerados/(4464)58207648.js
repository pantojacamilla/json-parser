    $("#stock_cat").change(function  () {&#xD;&#xA;                var cat_id = $(this).val();              &#xD;&#xA;                var dataTable = $("#tblviewstock").DataTable({&#xD;&#xA;                    "processing": true,&#xD;&#xA;                    "serverSide": true,&#xD;&#xA;                    "ajax": {&#xD;&#xA;                        "url": "lib/mod_stock.php?type=viewStock&catid="+cat_id,&#xD;&#xA;                        "type": "POST"&#xD;&#xA;                    },&#xD;&#xA;                    "columns": [&#xD;&#xA;                        {"data": "0"},&#xD;&#xA;                        {"data": "1"},&#xD;&#xA;                        {"data": "2"},&#xD;&#xA;                        {"data": "3"},&#xD;&#xA;                        {"data": "4"},&#xD;&#xA;                    ]&#xD;&#xA;                });&#xD;&#xA;            });