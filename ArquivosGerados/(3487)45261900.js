//Now I want to get html of div tag with id=answer[0] when click a tag &#xD;&#xA;    $(document).on('click', 'a', function () {&#xD;&#xA;        var id = this.id;&#xD;&#xA;        var id1 = id.replace("[", "\\\\[");&#xD;&#xA;        var id2 = id1.replace("]", "\\\\]");&#xD;&#xA;        &#xD;&#xA;        var newS = "div#" + String(id2); &#xD;&#xA;        &#xD;&#xA;        alert($(newS).html());&#xD;&#xA;    });