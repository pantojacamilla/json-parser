    <script type="text/javascript">&#xD;&#xA;    function calculateLast() {&#xD;&#xA;    	var x = document.form1.tempoh.value; //<-----------Tempoh Elaun&#xD;&#xA;        var CurrentDate = new Date();&#xD;&#xA;        CurrentDate.setMonth(CurrentDate.getMonth() + eval(x));&#xD;&#xA;        var day = CurrentDate.getDate();&#xD;&#xA;        var monthIndex = CurrentDate.getMonth()+1;&#xD;&#xA;        var year = CurrentDate.getFullYear();&#xD;&#xA;    	document.getElementById('tamatElaun').value = day + "-" + monthIndex + "-" + year;&#xD;&#xA;        //document.write(day, monthNames[monthIndex], year);&#xD;&#xA;    }&#xD;&#xA;    </script>