    // JavaScript Document&#xD;&#xA;    function validStaffReg(form){&#xD;&#xA;    if (document.form.password.value == "" && document.form.username.value == ""){&#xD;&#xA;    alert ( "Please enter a Password and Login ID." );&#xD;&#xA;    document.form.password.focus();&#xD;&#xA;    return false;&#xD;&#xA;    }&#xD;&#xA;    if (document.form.username.value == ""){&#xD;&#xA;    alert ( "Please enter a Login ID." );&#xD;&#xA;    document.form.username.focus();&#xD;&#xA;    return false;&#xD;&#xA;    }&#xD;&#xA;    if (document.form.password.value == ""){&#xD;&#xA;    alert ( "Please enter a Password." );&#xD;&#xA;    document.form.password.focus();&#xD;&#xA;    return false;&#xD;&#xA;    }&#xD;&#xA;    return true;&#xD;&#xA;    }