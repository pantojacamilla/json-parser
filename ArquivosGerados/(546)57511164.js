function run() {&#xD;&#xA;    $(".item").hide();&#xD;&#xA;    const checked = $(":checked")&#xD;&#xA;    if (checked.length === 0) {&#xD;&#xA;        return $("div").show();&#xD;&#xA;    }&#xD;&#xA;    checked.each(function() {&#xD;&#xA;        $(".item." + this.id).show();&#xD;&#xA;    });&#xD;&#xA;};  &#xD;&#xA;[Here is a fiddle][1]&#xD;&#xA;  [1]: http://jsfiddle.net/r9fmb4st/