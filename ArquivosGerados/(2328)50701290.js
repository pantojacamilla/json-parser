     function doit_onkeypress(a) {&#xD;&#xA;         debugger;&#xD;&#xA;         if (event.keyCode == 13 || event.which == 13) {&#xD;&#xA;             alert(a);&#xD;&#xA;             var splitdata;&#xD;&#xA;             span_array = [];//define array&#xD;&#xA;             $(".token").each(function () {// iterate over same class spans&#xD;&#xA;                 console.log($(this).text()); // print the text of each span&#xD;&#xA;                 span_array.push($(this).text());// push span text to array&#xD;&#xA;             });&#xD;&#xA;             console.log(span_array); // you can save data an array for further use&#xD;&#xA;             var final_string = span_array.join(); //join array value as string&#xD;&#xA;             console.log(final_string); // check string &#xD;&#xA;             splitdata = final_string&#xD;&#xA;             document.getElementById("hdnvaluearray").value = final_string;&#xD;&#xA;             document.getElementById("hdnvaluearray").value = a;&#xD;&#xA;         }&#xD;&#xA;     }