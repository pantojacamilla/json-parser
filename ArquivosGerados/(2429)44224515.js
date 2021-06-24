     var t = $("#mytable").dataTable({&#xD;&#xA;                    initComplete: function() {&#xD;&#xA;                        var api = this.api();&#xD;&#xA;                        $('#mytable_filter input')&#xD;&#xA;                        .off('.DT')&#xD;&#xA;                        .on('keyup.DT', function(e) {&#xD;&#xA;                            if (e.keyCode == 13) {&#xD;&#xA;                                api.search(this.value).draw();&#xD;&#xA;                            }&#xD;&#xA;                        });&#xD;&#xA;                    },&#xD;&#xA;                    oLanguage: {&#xD;&#xA;                        sProcessing: "loading..."&#xD;&#xA;                    },&#xD;&#xA;                    processing: true,&#xD;&#xA;                    serverSide: true,&#xD;&#xA;                    ajax: {"url": "wisataadmincontroller/json", "type": "POST"},&#xD;&#xA;                    columns: [&#xD;&#xA;                    {&#xD;&#xA;                        "data": "id_wisata",&#xD;&#xA;                        "orderable": false&#xD;&#xA;                    },{"data": "nama_wisata"},{"data": "alamat_wisata"},{"data": "no_telp"},{"data": "kategori"},{"data": "longitude"},{"data": "latitude"},{"data": "gambar","render": function(data, type, row) {&#xD;&#xA;                        return '<img src="'+data+'"style="height:100px;width:100px;" />';&#xD;&#xA;                    }},{"data": "like"},&#xD;&#xA;                    {&#xD;&#xA;                        "data" : "action",&#xD;&#xA;                        "orderable": false,&#xD;&#xA;                        "className" : "text-center"&#xD;&#xA;                    }&#xD;&#xA;                    ],&#xD;&#xA;                    order: [[0, 'desc']],&#xD;&#xA;                    rowCallback: function(row, data, iDisplayIndex) {&#xD;&#xA;                        var info = this.fnPagingInfo();&#xD;&#xA;                        var page = info.iPage;&#xD;&#xA;                        var length = info.iLength;&#xD;&#xA;                        var index = page * length + (iDisplayIndex + 1);&#xD;&#xA;                        $('td:eq(0)', row).html(index);&#xD;&#xA;                    }&#xD;&#xA;                });&#xD;&#xA;            });