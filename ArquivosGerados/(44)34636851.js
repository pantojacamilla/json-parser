    define(["jquery",&#xD;&#xA;        //mashup and extension interface&#xD;&#xA;        "qlik",&#xD;&#xA;        //add stylesheet&#xD;&#xA;        "text!./css/mystyle.css",&#xD;&#xA;        "client.utils/state",&#xD;&#xA;        "client.utils/routing"&#xD;&#xA;      ],&#xD;&#xA;      function($, qlik, cssContent, clientState, clientRedirect) {&#xD;&#xA;        /*-----------------------------------------------------------------*/&#xD;&#xA;        // function redirect (sheetId){&#xD;&#xA;        // clientRedirect.goToSheet(sheetId, Object.keys(clientState.States)[clientState.state])&#xD;&#xA;        // }&#xD;&#xA;        /*-----------------------------------------------------------------*/&#xD;&#xA;        /*-----------------------------------------------------------------*/&#xD;&#xA;        var render = function($elem, layout) {&#xD;&#xA;          var html = '',&#xD;&#xA;            app = qlik.currApp();&#xD;&#xA;          //get list of tab objects and insert into div&#xD;&#xA;          app.getAppObjectList('sheet', function(arrayitem) {&#xD;&#xA;            //for each sheet in the app, create a list item&#xD;&#xA;            $.each(arrayitem.qAppObjectList.qItems, function(myindex, myvalue) {&#xD;&#xA;              //include the sheet id as the list item id to be used as a reference for active sheet&#xD;&#xA;              html += '<li id="' + myvalue.qInfo.qId + '">'; // onClick="redirect(' + value.qInfo.qId + ');&#xD;&#xA;              //wrap anchor tag to be used by bootstrap styling&#xD;&#xA;              html += '<a>';&#xD;&#xA;              //give the link the same name as the sheet&#xD;&#xA;              html += myvalue.qData.title;&#xD;&#xA;              html += '</a>';&#xD;&#xA;              html += '</li>';&#xD;&#xA;            });&#xD;&#xA;            html += '</ul></div>';&#xD;&#xA;            html += "<button id='myButton'> Click Me!! </button>";&#xD;&#xA;            console.log(arrayitem.qAppObjectList);&#xD;&#xA;            console.log(html);&#xD;&#xA;            //insert html into the extension object&#xD;&#xA;            return $elem.html(html);&#xD;&#xA;          });&#xD;&#xA;          /* Test Code Start from here */&#xD;&#xA;          app.getList("FieldList", function(reply) {&#xD;&#xA;            var str = "";&#xD;&#xA;            $.each(reply.qFieldList.qItems, function(key, value) {&#xD;&#xA;              str += value.qName + ' ';&#xD;&#xA;            });&#xD;&#xA;            console.log(str);&#xD;&#xA;          });&#xD;&#xA;        };&#xD;&#xA;        /*-----------------------------------------------------------------*/&#xD;&#xA;        return {&#xD;&#xA;          /*-----------------------------------------------------------------*/&#xD;&#xA;          paint: function($element, layout) {&#xD;&#xA;            console.count();&#xD;&#xA;            /*-----------------------------------------------------------------*/&#xD;&#xA;            $(function() {&#xD;&#xA;              $element.html("#myButton").click(function() {&#xD;&#xA;                // for(var mynum = 1; mynum <= 5; mynum++){&#xD;&#xA;                //   alert('button test' + mynum);&#xD;&#xA;                // };&#xD;&#xA;              });&#xD;&#xA;            });&#xD;&#xA;            /*-----------------------------------------------------------------*/&#xD;&#xA;            render($element, layout);&#xD;&#xA;            /*-----------------------------------------------------------------*/&#xD;&#xA;          }&#xD;&#xA;        };&#xD;&#xA;      });