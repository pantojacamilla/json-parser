    function datePicker() {&#xD;&#xA;      var dateFormat = "DD/MM/YY",&#xD;&#xA;        from = $("#checkin,.checkin").datepicker({&#xD;&#xA;          numberOfMonths: 2,&#xD;&#xA;          firstDay: 1,&#xD;&#xA;          minDate: 0,&#xD;&#xA;          onSelect: function(selectedDate) {&#xD;&#xA;            window.setTimeout($.proxy(function() {&#xD;&#xA;              $(this).parents(".book-holiday").find("#checkout,.checkout").focus();&#xD;&#xA;            }, this), 10);&#xD;&#xA;            var yenitarih = new Date();&#xD;&#xA;            var date = $(this).datepicker('getDate');&#xD;&#xA;            var checkoutStartDate = new Date(new Date(date).setDate(date.getDate() + 1));&#xD;&#xA;            var checkoutEndDate = new Date(new Date(date).setDate(date.getDate() + 15));&#xD;&#xA;            console.log(checkoutEndDate);&#xD;&#xA;            $("#checkout,.checkout").datepicker("option", "minDate", checkoutStartDate);&#xD;&#xA;            $("#checkout,.checkout").datepicker("option", "maxDate", checkoutEndDate);&#xD;&#xA;          },&#xD;&#xA;          isTo1: true,&#xD;&#xA;          beforeShowDay: function(date) {&#xD;&#xA;            var selectedDate = $(this).datepicker('getDate'),&#xD;&#xA;              fromDate = from.datepicker('getDate');&#xD;&#xA;            if (!fromDate || !selectedDate) {&#xD;&#xA;              return [true]&#xD;&#xA;            }&#xD;&#xA;            var dateClass = '';&#xD;&#xA;            if (date > fromDate && date < selectedDate) {&#xD;&#xA;              dateClass = 'between-date';&#xD;&#xA;            } else if (+date == +selectedDate) {&#xD;&#xA;              dateClass = 'end-date';&#xD;&#xA;            }&#xD;&#xA;            return [true, dateClass];&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      $("#checkout,.checkout").datepicker({&#xD;&#xA;        numberOfMonths: 2,&#xD;&#xA;        firstDay: 1,&#xD;&#xA;        minDate: 0,&#xD;&#xA;        isTo1: true,&#xD;&#xA;        beforeShowDay: function(date) {&#xD;&#xA;          var selectedDate = $(this).datepicker('getDate'),&#xD;&#xA;            fromDate = from.datepicker('getDate');&#xD;&#xA;          if (!fromDate || !selectedDate) {&#xD;&#xA;            return [true]&#xD;&#xA;          }&#xD;&#xA;          var dateClass = '';&#xD;&#xA;          if (date > fromDate && date < selectedDate) {&#xD;&#xA;            dateClass = 'between-date';&#xD;&#xA;          } else if (+date == +selectedDate) {&#xD;&#xA;            dateClass = 'end-date';&#xD;&#xA;          }&#xD;&#xA;          return [true, dateClass];&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    }&#xD;&#xA;    datePicker();