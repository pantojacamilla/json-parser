    function fnExcelReport()&#xD;&#xA;        {&#xD;&#xA;    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";&#xD;&#xA;                 var textRange; var j=0;&#xD;&#xA;              tab = document.getElementById('table'); // id of table&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;              for(j = 0 ; j < tab.rows.length ; j++) &#xD;&#xA;              {     &#xD;&#xA;                    tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";&#xD;&#xA;                    //tab_text=tab_text+"</tr>";&#xD;&#xA;              }&#xD;&#xA;    &#xD;&#xA;              tab_text=tab_text+"</table>";&#xD;&#xA;              tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table&#xD;&#xA;              tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table&#xD;&#xA;                          tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params&#xD;&#xA;    &#xD;&#xA;                   var ua = window.navigator.userAgent;&#xD;&#xA;                  var msie = ua.indexOf("MSIE "); &#xD;&#xA;    &#xD;&#xA;                     if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer&#xD;&#xA;                        {&#xD;&#xA;                               txtArea1.document.open("txt/html","replace");&#xD;&#xA;                               txtArea1.document.write(tab_text);&#xD;&#xA;                               txtArea1.document.close();&#xD;&#xA;                               txtArea1.focus(); &#xD;&#xA;                                sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");&#xD;&#xA;                              }  &#xD;&#xA;                      else                 //other browser not tested on IE 11&#xD;&#xA;                          sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  &#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;                          return (sa);&#xD;&#xA;                                }