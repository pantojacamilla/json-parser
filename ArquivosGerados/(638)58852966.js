    $(document).ready(function() {&#xD;&#xA;      $("#btnAddItem").click(function(){&#xD;&#xA;        var text = $('#ddl_device_option').val();  &#xD;&#xA;        if(text == "device_1"){&#xD;&#xA;          $('#dvTable').append('<font face="Arial" size="4"> </font>&nbsp;');&#xD;&#xA;          $('#dvTable').append(text);&#xD;&#xA;          $('#dvTable').append(' <select id="test"> <option>1</option> <option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option> <option>8</option> </select> ');&#xD;&#xA;          var i = "1";&#xD;&#xA;          $('#dvTable').append('<input type="button" id='+ i +' value="x" class="btn btn-danger" >');&#xD;&#xA;        } else if(text == "device_2") {&#xD;&#xA;          $('#dvTable').append('<font face="Arial" size="4"> </font>&nbsp;');&#xD;&#xA;          $('#dvTable').append(text);&#xD;&#xA;          $('#dvTable').append(' <select> <option id="1">1</option> <option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option> <option>8</option> </select> ');&#xD;&#xA;          &#xD;&#xA;          var i = "2";&#xD;&#xA;          $('#dvTable').append('<input type="button" id='+ i +' value="x" class="btn btn-danger">');&#xD;&#xA;        } else if(text == "device_3"){&#xD;&#xA;          $('#dvTable').append('<font face="Arial" size="4"> </font> &nbsp;');&#xD;&#xA;          $('#dvTable').append(text);&#xD;&#xA;          $('#dvTable').append(' <select> <option>1</option> <option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option> <option>8</option> </select> ');&#xD;&#xA;          var i = "3";&#xD;&#xA;          $('#dvTable').append('<input type="button" id='+ i +' value="x" class="btn btn-danger">');&#xD;&#xA;        }&#xD;&#xA;      }); &#xD;&#xA;    });&#xD;&#xA;      &#xD;&#xA;     &#xD;&#xA;    $( "#dvTable" ).click(function() {&#xD;&#xA;      //  alert("clicked");&#xD;&#xA;      $(this).remove(); // it will remove entire div&#xD;&#xA;    });