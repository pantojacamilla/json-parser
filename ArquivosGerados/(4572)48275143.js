    var each_arr = [{&#xD;&#xA;        id: 0,&#xD;&#xA;        judul: "JUDUL 1"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        id: 1,&#xD;&#xA;        judul: "ICIK ICIK ehem"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        id: 2,&#xD;&#xA;        judul: "ASOLOLE"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        id: 3,&#xD;&#xA;        judul: "IWAK PEYEK"&#xD;&#xA;      }&#xD;&#xA;    ];&#xD;&#xA;    $(".radio1").on('change', function(event, state) {&#xD;&#xA;      var idarr = $(this).data("id");&#xD;&#xA;      each_arr.move(idarr, 0);&#xD;&#xA;      console.log(each_arr);&#xD;&#xA;    });&#xD;&#xA;    Array.prototype.move = function(old_index, new_index) {&#xD;&#xA;      if (new_index >= this.length) {&#xD;&#xA;        var k = new_index - this.length;&#xD;&#xA;        while ((k--) + 1) {&#xD;&#xA;          this.push(undefined);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      this.splice(new_index, 0, this.splice(old_index, 1)[0]);&#xD;&#xA;      return this;&#xD;&#xA;    };