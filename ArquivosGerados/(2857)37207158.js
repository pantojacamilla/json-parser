    $(document).ready(function() {&#xD;&#xA;      $("#frmRegi").validate({&#xD;&#xA;        rules: {&#xD;&#xA;          firstName: {&#xD;&#xA;            required: true,&#xD;&#xA;            lettersonly: true&#xD;&#xA;          },&#xD;&#xA;          lastName: {&#xD;&#xA;            required: true,&#xD;&#xA;            lettersonly: true&#xD;&#xA;          },&#xD;&#xA;          email: {&#xD;&#xA;            required: true,&#xD;&#xA;            remote: {&#xD;&#xA;              url: AJAX_URL,&#xD;&#xA;              type: "post",&#xD;&#xA;              data: {&#xD;&#xA;                email: function() {&#xD;&#xA;                  return $("#email").val();&#xD;&#xA;                },&#xD;&#xA;                action: 'checkEmail',&#xD;&#xA;              }&#xD;&#xA;            },&#xD;&#xA;            email: true,&#xD;&#xA;          },&#xD;&#xA;          password1: {&#xD;&#xA;            required: true,&#xD;&#xA;            minlength: 6&#xD;&#xA;          },&#xD;&#xA;          cpassword: {&#xD;&#xA;            required: true,&#xD;&#xA;            equalTo: "#password1"&#xD;&#xA;          },&#xD;&#xA;          country: {&#xD;&#xA;            required: true&#xD;&#xA;          },&#xD;&#xA;          state: {&#xD;&#xA;            required: true&#xD;&#xA;          },&#xD;&#xA;          city: {&#xD;&#xA;            required: true&#xD;&#xA;          },&#xD;&#xA;          gen: {&#xD;&#xA;            required: true&#xD;&#xA;          },&#xD;&#xA;          mobile: {&#xD;&#xA;            required: true,&#xD;&#xA;            digitsonly: true,&#xD;&#xA;            minlength: 10&#xD;&#xA;          },&#xD;&#xA;          code: {&#xD;&#xA;            required: true&#xD;&#xA;          },&#xD;&#xA;        },&#xD;&#xA;        messages: {&#xD;&#xA;          firstName: {&#xD;&#xA;            required: "Please Enter FirstName"&#xD;&#xA;          },&#xD;&#xA;          lastName: {&#xD;&#xA;            required: "Please Enter Lastname"&#xD;&#xA;          },&#xD;&#xA;          email: {&#xD;&#xA;            required: "Please Enter Your Email address",&#xD;&#xA;            email: "Invalid Email",&#xD;&#xA;            remote: "Email Already Exists"&#xD;&#xA;          },&#xD;&#xA;          password1: {&#xD;&#xA;            required: "Please Enter Password",&#xD;&#xA;            minlength: "Minimum 6 Characters"&#xD;&#xA;          },&#xD;&#xA;          cpassword: {&#xD;&#xA;            required: "Please Re-Enter password",&#xD;&#xA;            equalTo: "passwords doesnt match"&#xD;&#xA;          },&#xD;&#xA;          country: {&#xD;&#xA;            required: "Please select Country"&#xD;&#xA;          },&#xD;&#xA;          state: {&#xD;&#xA;            required: "Please select State"&#xD;&#xA;          },&#xD;&#xA;          city: {&#xD;&#xA;            required: "Please select City"&#xD;&#xA;          },&#xD;&#xA;          gen: {&#xD;&#xA;            required: "please select gender"&#xD;&#xA;          },&#xD;&#xA;          mobile: {&#xD;&#xA;            required: "Please Enter Your Mobile number",&#xD;&#xA;            minlength: "Minimum 10 numbers"&#xD;&#xA;          },&#xD;&#xA;          code: {&#xD;&#xA;            required: "please enter captcha"&#xD;&#xA;          },&#xD;&#xA;        },&#xD;&#xA;      });&#xD;&#xA;    });