    $('body').on('click','#Save', function (ev) {&#xD;&#xA;        //ev.preventDefault();&#xD;&#xA;        alert('duh - click captured');&#xD;&#xA;        $('#client_form').submit(function (e) {&#xD;&#xA;            alert('1 - submit fired');&#xD;&#xA;            e.preventDefault();&#xD;&#xA;            e.stopPropagation();&#xD;&#xA;            handle_client_form(e);&#xD;&#xA;        });&#xD;&#xA;    });&#xD;&#xA;    function handle_client_form(e) {&#xD;&#xA;        if (manualValidate(e)) {&#xD;&#xA;            alert('3a - good to go; process form inputs');&#xD;&#xA;        } else {&#xD;&#xA;            alert('3b - invalid form');&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function manualValidate(e) {&#xD;&#xA;        if (e.target.checkValidity()) {&#xD;&#xA;            alert('2 - validate OK!');&#xD;&#xA;            e.stopPropagation();&#xD;&#xA;            return true;&#xD;&#xA;        } else {&#xD;&#xA;            e.stopPropagation();&#xD;&#xA;            return false;&#xD;&#xA;        }&#xD;&#xA;    }