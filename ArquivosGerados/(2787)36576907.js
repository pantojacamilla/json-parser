    var cycleLength = $('#cycle_length').val();&#xD;&#xA;    var rangeArray = ["2016-4-3", "2016-4-4", "2016-4-5", "2016-4-6", "2016-4-7", "2016-4-8", "2016-4-9"];&#xD;&#xA;    $("table td.fc-day").each(function() {&#xD;&#xA;      for (var i = 0; i <= rangeArray.length; i++) {&#xD;&#xA;        for (var j = 0; j <= cycleLength; j++) {&#xD;&#xA;          if (rangeArray[i] == new Date($(".fc-day").attr("data-date"))) {&#xD;&#xA;            $(this).prepend('<input type="checkbox" class="checkbox"+j/>');&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;    });