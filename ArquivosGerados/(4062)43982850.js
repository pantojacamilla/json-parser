    function car(Make, Model, Date) {&#xD;&#xA;      return Make + Model + Date;&#xD;&#xA;    }&#xD;&#xA;    var date1 = '2010';&#xD;&#xA;    var date2 = '2003';&#xD;&#xA;    var date3 = '2015';&#xD;&#xA;    var d1 = new Date(date1);&#xD;&#xA;    var d2 = new Date(date2);&#xD;&#xA;    var d3 = new Date(date3);&#xD;&#xA;    var n1 = d1.getFullYear();&#xD;&#xA;    var n2 = d2.getFullYear();&#xD;&#xA;    var n3 = d3.getFullYear();&#xD;&#xA;    var x = car('Mercedes', ' c220 ', n1);&#xD;&#xA;    var y = car(' Toyota', ' Prius ', n2);&#xD;&#xA;    var z = car(' Audi', ' a3 ', n3);&#xD;&#xA;    var polje = [x, y, z];&#xD;&#xA;    console.log(polje);