    var value = [{&#xD;&#xA;      id: 0,&#xD;&#xA;      text: 'enhancement'&#xD;&#xA;    }, {&#xD;&#xA;      id: 1,&#xD;&#xA;      text: 'bug'&#xD;&#xA;    }, {&#xD;&#xA;      id: 2,&#xD;&#xA;      text: 'duplicate'&#xD;&#xA;    }, {&#xD;&#xA;      id: 3,&#xD;&#xA;      text: 'invalid'&#xD;&#xA;    }, {&#xD;&#xA;      id: 4,&#xD;&#xA;      text: 'wontfix'&#xD;&#xA;    }]&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;      $("#lang").select2({&#xD;&#xA;        data: value&#xD;&#xA;      })&#xD;&#xA;    });&#xD;&#xA;    $("#btn").click(function() {&#xD;&#xA;      $("#lang").select2().select2('val', 'bug');&#xD;&#xA;    });