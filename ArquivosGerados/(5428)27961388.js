    <div class="delivery-date">&#xD;&#xA;      <p>&#xD;&#xA;        <label for="date">Select a date for delivery below:</label>&#xD;&#xA;        <input id="date" type="text" name="properties[delivery-date]" readonly="readonly" style="background:white; width:30%" class="required" data-error="Please choose a delivery date." />&#xD;&#xA;      </p>&#xD;&#xA;    </div>&#xD;&#xA;    <script>&#xD;&#xA;    jQuery(function() {&#xD;&#xA;      jQuery("#date").datepicker( { &#xD;&#xA;        // minDate: new Date(((new Date).getTime() + 49 * 60 * 60 * 1000) ), &#xD;&#xA;        minDate: checkBeforeNoon,&#xD;&#xA;        maxDate: "+2M", // show up to 2 months&#xD;&#xA;        dateFormat: 'dd/mm/yy',&#xD;&#xA;        beforeShowDay: available_delivery_dates &#xD;&#xA;      } );&#xD;&#xA;    });&#xD;&#xA;      &#xD;&#xA;    /*==========  check time  ==========*/&#xD;&#xA;    // if time before 12pm, offer next day delivery&#xD;&#xA;    function checkBeforeNoon(nextDayDelivery){&#xD;&#xA;      var startTime = '12:00 AM';&#xD;&#xA;      var endTime = '12:00 PM';&#xD;&#xA;      var curr_time = getval();&#xD;&#xA;      if (get24Hr(curr_time) > get24Hr(startTime) && get24Hr(curr_time) < get24Hr(endTime)) {&#xD;&#xA;          // before 12pm - next day delivery available&#xD;&#xA;          var nextDayDelivery = '+1d';&#xD;&#xA;      } else {&#xD;&#xA;         // after 12pm - next day delivery unavailable&#xD;&#xA;         var nextDayDelivery = '+2d';&#xD;&#xA;      }&#xD;&#xA;      function get24Hr(time){&#xD;&#xA;          var hours = Number(time.match(/^(\d+)/)[1]);&#xD;&#xA;          var AMPM = time.match(/\s(.*)$/)[1];&#xD;&#xA;          if(AMPM == "PM" && hours<12) hours = hours+12;&#xD;&#xA;          if(AMPM == "AM" && hours==12) hours = hours-12;&#xD;&#xA;          &#xD;&#xA;          var minutes = Number(time.match(/:(\d+)/)[1]);&#xD;&#xA;          hours = hours*100+minutes;&#xD;&#xA;          console.log(time +" - "+hours);&#xD;&#xA;          return hours;&#xD;&#xA;      }&#xD;&#xA;      function getval() {&#xD;&#xA;          var currentTime = new Date()&#xD;&#xA;          var hours = currentTime.getHours()&#xD;&#xA;          var minutes = currentTime.getMinutes()&#xD;&#xA;          if (minutes < 10) minutes = "0" + minutes;&#xD;&#xA;          var suffix = "AM";&#xD;&#xA;          if (hours >= 12) {&#xD;&#xA;              suffix = "PM";&#xD;&#xA;              hours = hours - 12;&#xD;&#xA;          }&#xD;&#xA;          if (hours == 0) {&#xD;&#xA;              hours = 12;&#xD;&#xA;          }&#xD;&#xA;          var current_time = hours + ":" + minutes + " " + suffix;&#xD;&#xA;          return current_time;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    /*==========  Make sundays always unavailable  ==========*/&#xD;&#xA;    function available_delivery_dates(date) {&#xD;&#xA;      var sunday = 0; // unavailable for delivery&#xD;&#xA;      var mon = 1&#xD;&#xA;      var tue = 2;&#xD;&#xA;      var wed = 3;&#xD;&#xA;      var thu = 4;&#xD;&#xA;      var fri = 5;&#xD;&#xA;      var sat = 6;&#xD;&#xA;      &#xD;&#xA;      var day_of_week = date.getDay();&#xD;&#xA;      var not_sun = day_of_week > 0;&#xD;&#xA;      &#xD;&#xA;      if(not_sun){&#xD;&#xA;        var day = date.getDate();&#xD;&#xA;        return [true, ''];  &#xD;&#xA;      }&#xD;&#xA;      else{&#xD;&#xA;        // all else - do not allow&#xD;&#xA;        return [false, ' ', 'Delivery is unavailable on this day'];&#xD;&#xA;      }&#xD;&#xA;      &#xD;&#xA;      &#xD;&#xA;    }&#xD;&#xA;      &#xD;&#xA;    </script>