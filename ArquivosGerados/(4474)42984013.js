    $("button").click(function(){&#xD;&#xA;        $.post("http://45.114.246.1071/quicktask/webservice/addtask-p.php",&#xD;&#xA;        {&#xD;&#xA;    entusr: "SAURABH",&#xD;&#xA;    primary:"VARSHA",&#xD;&#xA;    taskdesc:"TESTING FROM SYS3",&#xD;&#xA;    priority:"HIGH",&#xD;&#xA;    status:"ACTIVE",&#xD;&#xA;    deadlinedt:"2018-12-26",&#xD;&#xA;    auth_key:"APBY23MX89J"&#xD;&#xA;        },&#xD;&#xA;        function(data, status){&#xD;&#xA;                 alert("Data: " + data + "\nStatus: " + status);&#xD;&#xA;            &#xD;&#xA;            console.log(status);&#xD;&#xA;        });&#xD;&#xA;    });