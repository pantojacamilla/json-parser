    var rootRef = firebase.database().ref().child("User");&#xD;&#xA;    rootRef.on("child_added", snap => {&#xD;&#xA;      var name = snap.child("name").val();&#xD;&#xA;      var add = snap.child("address").val();&#xD;&#xA;      var contact = snap.child("contact").val();&#xD;&#xA;      $("#table_body").append("<tr><td>" + name + "</td><td>" + add + "</td><td>" + contact +  "</td><td>");&#xD;&#xA;      $("#table_body").append('<button id="1" onClick="reply_click(this.id)">Delete</button></td></tr>');&#xD;&#xA;    });&#xD;&#xA;    function reply_click(clicked_id){&#xD;&#xA;      	firebase.database().ref("User").child(key).remove();&#xD;&#xA;      }