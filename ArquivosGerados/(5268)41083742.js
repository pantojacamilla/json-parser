    $( function() {&#xD;&#xA;    $( "#pickyDate" ).datepicker({format: "dd/mm/yyyy"});&#xD;&#xA;    daylocal = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu' ];&#xD;&#xA;    monthlocal = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni','Juli','Agustus','September','Oktober','November','Desember' ];&#xD;&#xA;     &#xD;&#xA;    $('#pickyDate').datepicker()&#xD;&#xA;    .on("change", function () {    &#xD;&#xA;     var today = new Date($('#pickyDate').datepicker('getDate'));&#xD;&#xA;     var date = today.getDate();&#xD;&#xA;     var daysnumber = today.getDay();&#xD;&#xA;     var monthnumber = today.getMonth(); &#xD;&#xA;     var years = today.getFullYear(); &#xD;&#xA;         &#xD;&#xA;     numbers    = $('#dateinword').val();&#xD;&#xA;     var number   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');&#xD;&#xA;     var words    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');/*1 to 9 */&#xD;&#xA;     var level = new Array('','Ribu','Juta','Milyar','Triliun'); /*hundred,thousand,billion,trillion */&#xD;&#xA;     &#xD;&#xA;     var length_numbers = numbers.length;&#xD;&#xA;     &#xD;&#xA;     /* long test numbers */&#xD;&#xA;     if (length_numbers > 15) {&#xD;&#xA;       sentences = "Out of Limit";&#xD;&#xA;       return sentences;&#xD;&#xA;     }&#xD;&#xA;     &#xD;&#xA;     /* get numbers set to array */&#xD;&#xA;     for (i = 1; i <= length_numbers; i++) {&#xD;&#xA;       number[i] = numbers.substr(-(i),1);&#xD;&#xA;     }&#xD;&#xA;     &#xD;&#xA;     i = 1;&#xD;&#xA;     j = 0;&#xD;&#xA;     sentences = "";&#xD;&#xA;     &#xD;&#xA;     &#xD;&#xA;     /* iteration array number */&#xD;&#xA;     while (i <= length_numbers) {&#xD;&#xA;     &#xD;&#xA;       subsentences = "";&#xD;&#xA;       words1 = "";&#xD;&#xA;       words2 = "";&#xD;&#xA;       words3 = "";&#xD;&#xA;     &#xD;&#xA;       /* hundred */&#xD;&#xA;       if (number[i+2] != "0") {&#xD;&#xA;         if (number[i+2] == "1") {&#xD;&#xA;           words1 = "Seratus";     /*Seratus mean One hundred */&#xD;&#xA;         } else {&#xD;&#xA;           words1 = words[number[i+2]] + " Ratus";  /* Ratus mean hundred  */&#xD;&#xA;         }&#xD;&#xA;       }&#xD;&#xA;     &#xD;&#xA;       /* tens or dozen */&#xD;&#xA;       if (number[i+1] != "0") {&#xD;&#xA;         if (number[i+1] == "1") {&#xD;&#xA;           if (number[i] == "0") {&#xD;&#xA;             words2 = "Sepuluh";   /* sepuluh mean ten */ &#xD;&#xA;           } else if (number[i] == "1") {&#xD;&#xA;             words2 = "Sebelas";  /* sebelas mean eleven */&#xD;&#xA;           } else {&#xD;&#xA;             words2 = words[number[i]] + " Belas"; /* >10 - 19 using suffix Belas */&#xD;&#xA;           }&#xD;&#xA;         } else {&#xD;&#xA;           words2 = words[number[i+1]] + " Puluh"; /* puluh is suffix like ty in english [20,30,40,...90]   */&#xD;&#xA;         }&#xD;&#xA;       }&#xD;&#xA;     &#xD;&#xA;       /* single number */&#xD;&#xA;       if (number[i] != "0") {&#xD;&#xA;         if (number[i+1] != "1") {&#xD;&#xA;           words3 = words[number[i]];&#xD;&#xA;         }&#xD;&#xA;       }&#xD;&#xA;     &#xD;&#xA;       /* zero cheking, add level */&#xD;&#xA;       if ((number[i] != "0") || (number[i+1] != "0") || (number[i+2] != "0")) {&#xD;&#xA;         subsentences = words1+" "+words2+" "+words3+" "+level[j]+" ";&#xD;&#xA;       }&#xD;&#xA;     &#xD;&#xA;       /* join var sentences (as one blok 3 digit 000) into var sentences */&#xD;&#xA;       sentences = subsentences + sentences;&#xD;&#xA;       i = i + 3;&#xD;&#xA;       j = j + 1;&#xD;&#xA;     &#xD;&#xA;     }&#xD;&#xA;     &#xD;&#xA;     /* replace Satu Ribu(one thousand) will be Seribu if needed */&#xD;&#xA;     if ((number[5] == "0") && (number[6] == "0")) {&#xD;&#xA;       sentences = sentences.replace("Satu Ribu","Seribu"); /* Ribu = thousand we use prefix se for one  */&#xD;&#xA;     }&#xD;&#xA;     &#xD;&#xA;     //return sentences;&#xD;&#xA;       //alert(local[today.getDay()]);&#xD;&#xA;       //alert(kalimat);&#xD;&#xA;       $('#daypk').val(daylocal[today.getDay()]);&#xD;&#xA;       $('#dateinword').val(date);&#xD;&#xA;       $('#worddate').val(sentences);&#xD;&#xA;    //document.getElementById("terbilang").innerHTML=kalimat;&#xD;&#xA;    });&#xD;&#xA;    });