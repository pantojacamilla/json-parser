     $(document).ready(function () {&#xD;&#xA;            $("#searchButton").click(function () {&#xD;&#xA;                searchHighlight($("#search").val());&#xD;&#xA;            });&#xD;&#xA;        });&#xD;&#xA;        function searchHighlight(searchText) {&#xD;&#xA;            if (searchText) {&#xD;&#xA;                var searchExp = new RegExp(searchText, "ig");&#xD;&#xA;                var content = $('p').text();&#xD;&#xA;                var matches = content.match(searchExp);&#xD;&#xA;                if (matches) {&#xD;&#xA;                    $('p').html(content.replace(searchExp, function(match) {&#xD;&#xA;                        return "<span class='highlight'>" + match + "</span>";&#xD;&#xA;                    }));&#xD;&#xA;                } else {&#xD;&#xA;                    $(".highlight").removeClass(".highlight");&#xD;&#xA;                }&#xD;&#xA;            } else {&#xD;&#xA;                $(".highlight").removeClass(".highlight");&#xD;&#xA;            }&#xD;&#xA;        }