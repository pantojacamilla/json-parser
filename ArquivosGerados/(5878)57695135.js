    $(document).ready(function() {&#xD;&#xA;      $("#dataTable").dataTable({&#xD;&#xA;        searching: false,&#xD;&#xA;        info: false,&#xD;&#xA;        lengthChange: false,&#xD;&#xA;        responsive: true,&#xD;&#xA;        autoWidth: false,&#xD;&#xA;        oLanguage: {&#xD;&#xA;          oPaginate: {&#xD;&#xA;            sNext: 'Next <i class="fas fa-angle-double-right"></i>',&#xD;&#xA;            sPrevious: '<i class="fas fa-angle-double-left"></i> Previous'&#xD;&#xA;          }&#xD;&#xA;        },&#xD;&#xA;        iDisplayLength: 5,&#xD;&#xA;        responsive: {&#xD;&#xA;          pagingType: "simple"&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    });