    var quickSearch = function () {&#xD;&#xA;        var searchstring = $("#search-bar").val();&#xD;&#xA;        var response;  //  @*'@(model.Url)'*@ &#xD;&#xA;        $.ajax({&#xD;&#xA;            type: "GET",&#xD;&#xA;            data: { keyword: searchstring },&#xD;&#xA;            url: "/Home/SearchC",&#xD;&#xA;            dataType: "json",&#xD;&#xA;            success: success_func,&#xD;&#xA;            error: console.log("AjaxError")&#xD;&#xA;        });&#xD;&#xA;        $('#output').html();&#xD;&#xA;    };&#xD;&#xA;    var success_func = function (data) {&#xD;&#xA;        function strInArray(str, strArray) {&#xD;&#xA;            for (var i = 0; i < strArray.length; i++) {&#xD;&#xA;                var $str1 = strArray[i].name;&#xD;&#xA;                var $str2 = strArray[i].link;&#xD;&#xA;                if ($str1.match(str) && strArray.length < 5) {&#xD;&#xA;                    //do something&#xD;&#xA;                }&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    