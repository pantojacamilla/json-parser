    function validateStudentSignUpForm() {&#xD;&#xA;      var first = document.getElementById("first").value;&#xD;&#xA;      var last = document.getElementById("last").value;&#xD;&#xA;      var email1 = document.getElementById("email1").value;&#xD;&#xA;      var password1 = document.getElementById("password1").value;&#xD;&#xA;      var parentFirst = document.getElementById("parent-first").value;&#xD;&#xA;      var parentLast = document.getElementById("parent-last").value;&#xD;&#xA;      var childFirst = document.getElementById("child-first").value;&#xD;&#xA;      var email2 = document.getElementById("email2").value;&#xD;&#xA;      var password2 = document.getElementById("password2").value;&#xD;&#xA;      var month1 = document.getElementById("option-month1").value;&#xD;&#xA;      // First name can't be blank&#xD;&#xA;      if (first == "") {&#xD;&#xA;        document.getElementById("first").className = document.getElementById("first").className + " error";&#xD;&#xA;        document.getElementById("firstid").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Last name can't be blank&#xD;&#xA;      if (last == "") {&#xD;&#xA;        document.getElementById("last").className = document.getElementById("last").className + " error";&#xD;&#xA;        document.getElementById("lastid").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Email can't be blank&#xD;&#xA;      if (email1 == "") {&#xD;&#xA;        document.getElementById("email1").className = document.getElementById("email1").className + " error";&#xD;&#xA;        document.getElementById("email1id").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Password can't be blank&#xD;&#xA;      if (password1 == "") {&#xD;&#xA;        document.getElementById("password1").className = document.getElementById("password1").className + " error";&#xD;&#xA;        document.getElementById("password1id").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Parent first can't be blank&#xD;&#xA;      if (parentFirst == "") {&#xD;&#xA;        document.getElementById("parent-first").className = document.getElementById("parent-first").className + " error";&#xD;&#xA;        document.getElementById("parent-firstid").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Parent last can't be blank&#xD;&#xA;      if (parentLast == "") {&#xD;&#xA;        document.getElementById("parent-last").className = document.getElementById("parent-last").className + " error";&#xD;&#xA;        document.getElementById("parent-lastid").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Child first can't be blank&#xD;&#xA;      if (childFirst == "") {&#xD;&#xA;        document.getElementById("child-first").className = document.getElementById("child-first").className + " error";&#xD;&#xA;        document.getElementById("child-firstid").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Email can't be blank&#xD;&#xA;      if (email2 == "") {&#xD;&#xA;        document.getElementById("email2").className = document.getElementById("email2").className + " error";&#xD;&#xA;        document.getElementById("email2id").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Password can't be blank&#xD;&#xA;      if (password2 == "") {&#xD;&#xA;        document.getElementById("password2").className = document.getElementById("password2").className + " error";&#xD;&#xA;        document.getElementById("password2id").innerHTML = "Can't be blank";&#xD;&#xA;      }&#xD;&#xA;      // Month can't be default&#xD;&#xA;      if (month1 = "na") {&#xD;&#xA;        document.getElementById("option-month1").className = document.getElementById("option-month1").className + " error";&#xD;&#xA;        document.getElementById("date1id").innerHTML = "Choose a valid date";&#xD;&#xA;      }&#xD;&#xA;      return false;&#xD;&#xA;    }