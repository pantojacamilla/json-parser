    $(document).ready(function(){&#xD;&#xA;       $('.popper').popover({&#xD;&#xA;        placement: 'bottom',&#xD;&#xA;        container: 'body',&#xD;&#xA;        html: true,&#xD;&#xA;        content: function () {&#xD;&#xA;            return $(this).next('.popper-content').html();&#xD;&#xA;        }&#xD;&#xA;    });&#xD;&#xA;    });