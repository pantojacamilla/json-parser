    function registerGroup() {&#xD;&#xA;        username = $("#newusername").val();&#xD;&#xA;        password = $("#newpassword").val();&#xD;&#xA;        email = $("#emailaddress").val();&#xD;&#xA;        school = $("#school").val();&#xD;&#xA;        contactdetails = $("#contactdetails").val();&#xD;&#xA;        groupname = $("#newgroupname").val();&#xD;&#xA;        member1 = $("#member1").val();&#xD;&#xA;        member2 = $("#member2").val();&#xD;&#xA;        member3 = $("#member3").val();&#xD;&#xA;        member4 = $("#member4").val();&#xD;&#xA;        member5 = $("#member5").val();&#xD;&#xA;        member6 = $("#member6").val();&#xD;&#xA;        member7 = $("#member7").val();&#xD;&#xA;        member8 = $("#member8").val();&#xD;&#xA;        avatarid = //stuck here&#xD;&#xA;        url = serverURL() + "/register.php"; &#xD;&#xA;        var JSONObject = {&#xD;&#xA;            "username": username,&#xD;&#xA;            "password": password,&#xD;&#xA;            "email": email,&#xD;&#xA;            "school": school,&#xD;&#xA;            "phone": contactdetails,&#xD;&#xA;            "groupname": groupname,&#xD;&#xA;            "leader": member1,&#xD;&#xA;            "member2": member2,&#xD;&#xA;            "member3": member3,&#xD;&#xA;            "member4": member4,&#xD;&#xA;            "member5": member5,&#xD;&#xA;            "member6": member6,&#xD;&#xA;            "member7": member7,&#xD;&#xA;            "member8": member8,&#xD;&#xA;            "avatarid": //this is where I am stuck&#xD;&#xA;        };&#xD;&#xA;        $.ajax({&#xD;&#xA;            url: url,&#xD;&#xA;            type: 'GET',&#xD;&#xA;            data: JSONObject,&#xD;&#xA;            dataType: 'json',&#xD;&#xA;            contentType: "application/json; charset=utf-8",&#xD;&#xA;            success: function (arr) {&#xD;&#xA;                _getRegisterGroupResult(arr); &#xD;&#xA;            }, error: function () {&#xD;&#xA;                validationMsg();&#xD;&#xA;            }&#xD;&#xA;        });   &#xD;&#xA;    }