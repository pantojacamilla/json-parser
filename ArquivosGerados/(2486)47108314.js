    $( function() {&#xD;&#xA;            	 //today=new Date(1000*today);&#xD;&#xA;             var dateFormat = "mm/dd/yy",&#xD;&#xA;              from = $("#from_filter")&#xD;&#xA;                .datepicker({&#xD;&#xA;                  defaultDate: "+0w",&#xD;&#xA;                  changeMonth: false,&#xD;&#xA;                  numberOfMonths: 1&#xD;&#xA;                })&#xD;&#xA;                .on( "change", function() {&#xD;&#xA;                  to.datepicker( "option", "minDate", getDate( this ) );&#xD;&#xA;                }),&#xD;&#xA;              to = $( "#to_filter" ).datepicker({&#xD;&#xA;                defaultDate: "+0w",&#xD;&#xA;                changeMonth: false,&#xD;&#xA;                numberOfMonths: 1&#xD;&#xA;              })&#xD;&#xA;              &#xD;&#xA;              .on( "change", function() {&#xD;&#xA;                from.datepicker( "option", "maxDate", getDate( this ) );&#xD;&#xA;              });&#xD;&#xA;             function getDate( element ) {&#xD;&#xA;              var date;&#xD;&#xA;              try {&#xD;&#xA;                date = $.datepicker.parseDate( dateFormat, element.value );&#xD;&#xA;              } catch( error ) {&#xD;&#xA;                date = NULL;&#xD;&#xA;              }&#xD;&#xA;             &#xD;&#xA;              return date;&#xD;&#xA;             }&#xD;&#xA;             } );