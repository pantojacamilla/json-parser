    var jQ = $.noConflict(true); &#xD;&#xA;     jQ('#table').DataTable({&#xD;&#xA;                    // "pageLength": 50,&#xD;&#xA;                    responsive: true,&#xD;&#xA;                    "paging": false,&#xD;&#xA;                    // fixedHeader:true,&#xD;&#xA;                    orderCellsTop: true,&#xD;&#xA;                    initComplete: function () {&#xD;&#xA;                        this.api().columns([0,1,2,3]).every( function () {&#xD;&#xA;                            var column = this;&#xD;&#xA;                            var select = jQ('<select><option value=""></option></select>')&#xD;&#xA;                                // .appendTo( jQ(column.header()) )&#xD;&#xA;                                .appendTo( jQ("#table thead tr:eq(1) th").eq(column.index()).empty() )&#xD;&#xA;                                .on( 'change', function () {&#xD;&#xA;                                    var val = jQ.fn.dataTable.util.escapeRegex(&#xD;&#xA;                                        $(this).val()&#xD;&#xA;                                    );&#xD;&#xA;             &#xD;&#xA;                                    column&#xD;&#xA;                                        .search( val ? '^'+val+'$' : '', true, false )&#xD;&#xA;                                        .draw();&#xD;&#xA;                                } );&#xD;&#xA;                                jQ( select ).click( function(e) {&#xD;&#xA;                                    e.stopPropagation();&#xD;&#xA;                              });&#xD;&#xA;             &#xD;&#xA;                            column.data().unique().sort().each( function ( d, j ) {&#xD;&#xA;                                //console.log(d);&#xD;&#xA;              select.append( '<option value="'+d.split(">")[1].split("<")[0]+'">'+d.split(">")[1].split("<")[0]+'</option>' )&#xD;&#xA;                            } );&#xD;&#xA;                        } );&#xD;&#xA;                    },                 &#xD;&#xA;                    // "pagingType": "full_numbers",&#xD;&#xA;                    autoFill: true,           &#xD;&#xA;                    dom: 'Blfrtip', &#xD;&#xA;                   &#xD;&#xA;                    &#xD;&#xA;                   &#xD;&#xA;                }); 