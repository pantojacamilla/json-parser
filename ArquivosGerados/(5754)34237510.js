    //handle error &#xD;&#xA;        $(function() {&#xD;&#xA;              $("#error_message").hide();&#xD;&#xA;              var error_emails = false;&#xD;&#xA;              $("#emails").focusout(function() {&#xD;&#xA;                check_email();&#xD;&#xA;              });&#xD;&#xA;            function check_email() {&#xD;&#xA;              if(your_string.indexOf('@') != -1) {&#xD;&#xA;                $("#error_message").hide();&#xD;&#xA;              } else {&#xD;&#xA;                $("#error_message").html("Invalid email form.Example:john@mail.com, thiffany@mail.com, scott@mail.com...");&#xD;&#xA;                $("#error_message").show();&#xD;&#xA;                error_emails = true;&#xD;&#xA;                }&#xD;&#xA;              }&#xD;&#xA;              &#xD;&#xA;              $("#colleagues").submit(function() {&#xD;&#xA;                error_message = false;&#xD;&#xA;                &#xD;&#xA;                check_email();&#xD;&#xA;                &#xD;&#xA;                if(error_message == false) {&#xD;&#xA;                  return true;&#xD;&#xA;                } else {&#xD;&#xA;                  return false;&#xD;&#xA;                }&#xD;&#xA;        });