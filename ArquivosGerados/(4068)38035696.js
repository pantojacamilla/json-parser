    var deleteModal = $('.bs-delete-modal-sm');&#xD;&#xA;    deleteModal.on('shown.bs.modal', function(event) {&#xD;&#xA;      var button = $(event.relatedTarget); // Button that triggered the modal&#xD;&#xA;      var recipientId = button.data('aishid');&#xD;&#xA;      var confirmBtn = deleteModal.find('.confirmDeleteBtn');&#xD;&#xA;      var parent = button.closest('.year-calendar');&#xD;&#xA;      //console.log(confirmBtn);&#xD;&#xA;      confirmBtn.click(deleteHoliday);&#xD;&#xA;    });&#xD;&#xA;    function deleteHoliday() {&#xD;&#xA;      $('.textherearea').append('here ');&#xD;&#xA;      deleteModal.modal('hide');&#xD;&#xA;    }