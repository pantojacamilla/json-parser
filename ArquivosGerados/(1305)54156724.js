    $(".list").each(function() {&#xD;&#xA;      var value = $(this)&#xD;&#xA;        .closest(".item")&#xD;&#xA;        .find(".value")&#xD;&#xA;        .val();&#xD;&#xA;      var max = $(this)&#xD;&#xA;        .closest(".item")&#xD;&#xA;        .find(".max")&#xD;&#xA;        .val();&#xD;&#xA;      var result = parseInt($(value) * 100) / parseInt($(max));&#xD;&#xA;      if (!isFinite(result)) result = 0;&#xD;&#xA;      $(".percent").val(result);&#xD;&#xA;    });