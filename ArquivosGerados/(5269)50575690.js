    $(document).ready(function() {&#xD;&#xA;      $(".select-all").on("click", function() {&#xD;&#xA;        $(this).is(":checked") ?&#xD;&#xA;          $(".select-input")&#xD;&#xA;          .prop("checked", true)&#xD;&#xA;          .change() :&#xD;&#xA;          $(".select-input")&#xD;&#xA;          .prop("checked", false)&#xD;&#xA;          .change();&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    //delete btn color&#xD;&#xA;    var btncolor = $("input[name='select-check']:checkbox");&#xD;&#xA;    btncolor.on("change", function() {&#xD;&#xA;      $(".delete").toggleClass("active", btncolor.is(":checked"));&#xD;&#xA;    });&#xD;&#xA;    //delete selected inputs&#xD;&#xA;    $(".delete").click(function(event) {&#xD;&#xA;      event.preventDefault();&#xD;&#xA;      $(".post-list")&#xD;&#xA;        .find(".select-input:checked")&#xD;&#xA;        .closest(".item")&#xD;&#xA;        .remove();&#xD;&#xA;    });