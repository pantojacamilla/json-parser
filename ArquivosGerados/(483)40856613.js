    var par;&#xD;&#xA;    $(document).ready(function () {&#xD;&#xA;        &#xD;&#xA;       $(document).on('click', 'a', function(e){&#xD;&#xA;           e.preventDefault;&#xD;&#xA;            if($(this).text() === "Add Though") {&#xD;&#xA;                $(this).text("Hide");&#xD;&#xA;                $(document).find($(this).attr('data-target')).fadeIn(2000).show();&#xD;&#xA;            }&#xD;&#xA;            else if ($(this).text() === "Show full story") {&#xD;&#xA;                $(this).text("Hide some");&#xD;&#xA;                $(document).find($(this).attr('data-target')).fadeIn(1800).show();&#xD;&#xA;            }&#xD;&#xA;            else if ($(this).text() === "Hide some") {&#xD;&#xA;                $(this).text("Show full story");&#xD;&#xA;                $(document).find($(this).attr('data-target')).slideDown().hide();&#xD;&#xA;            }&#xD;&#xA;            else {&#xD;&#xA;                $(this).text("Add Though");&#xD;&#xA;                $(document).find($(this).attr('data-target')).slideUp().hide();&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;        document.getElementById("delete").onclick = dele ;&#xD;&#xA;    });&#xD;&#xA;      var dele = function () {&#xD;&#xA;        var par = $("story").getElementsByTagName("p");&#xD;&#xA;        var getStory = $("story");&#xD;&#xA;        var size = par.length;&#xD;&#xA;        if (size > 0) {&#xD;&#xA;             getStory.removeChild(par[size - 1]);&#xD;&#xA;        }&#xD;&#xA;    };