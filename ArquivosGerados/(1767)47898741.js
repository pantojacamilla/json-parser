    window.verticalScroller = function($elem) {&#xD;&#xA;        var top = parseInt($elem.css("top"));&#xD;&#xA;        var temp = -1 * $('#verticalScroller > div').height();&#xD;&#xA;        if(top < temp) {&#xD;&#xA;            top = $('#verticalScroller').height()&#xD;&#xA;            $elem.css("top", top);&#xD;&#xA;        }&#xD;&#xA;        $elem.animate({ top: (parseInt(top)-60) }, 1500, function () {&#xD;&#xA;          window.verticalScroller($(this))&#xD;&#xA;        });&#xD;&#xA;    }&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;        var i = 0;&#xD;&#xA;           &#xD;&#xA;        $("#verticalScroller > div").each(function () {&#xD;&#xA;              $(this).css("top", i);&#xD;&#xA;              i += 60;&#xD;&#xA;              window.verticalScroller($(this));&#xD;&#xA;        });&#xD;&#xA;        &#xD;&#xA;        &#xD;&#xA;    });