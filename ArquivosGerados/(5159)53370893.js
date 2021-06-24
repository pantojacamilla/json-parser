    var imageLoader = document.getElementById('filePhoto');&#xD;&#xA;    imageLoader.addEventListener('change', handleImage, false);&#xD;&#xA;    function handleImage(e) {&#xD;&#xA;        var reader = new FileReader();&#xD;&#xA;        reader.onload = function(event) {&#xD;&#xA;            $('#uploader img').attr('src', event.target.result);&#xD;&#xA;        }&#xD;&#xA;        reader.readAsDataURL(e.target.files[0]);&#xD;&#xA;        $('#cancel_file').show();&#xD;&#xA;    }&#xD;&#xA;    var dropbox;&#xD;&#xA;    dropbox = document.getElementById("uploader");&#xD;&#xA;    dropbox.addEventListener("dragenter", dragenter, false);&#xD;&#xA;    dropbox.addEventListener("dragover", dragover, false);&#xD;&#xA;    dropbox.addEventListener("drop", drop, false);&#xD;&#xA;    function dragenter(e) {&#xD;&#xA;        e.stopPropagation();&#xD;&#xA;        e.preventDefault();&#xD;&#xA;    }&#xD;&#xA;    function dragover(e) {&#xD;&#xA;        e.stopPropagation();&#xD;&#xA;        e.preventDefault();&#xD;&#xA;    }&#xD;&#xA;    function drop(e) {&#xD;&#xA;        e.stopPropagation();&#xD;&#xA;        e.preventDefault();&#xD;&#xA;        //you can check e's properties&#xD;&#xA;        //console.log(e);&#xD;&#xA;        var dt = e.dataTransfer;&#xD;&#xA;        var files = dt.files;&#xD;&#xA;        //this code line fires your 'handleImage' function (imageLoader change event)&#xD;&#xA;        imageLoader.files = files;&#xD;&#xA;    }&#xD;&#xA;    $('#cancel_file').click(function(e) {&#xD;&#xA;        $('.fimg').attr('src', "https://i.imgur.com/j0KblIu.png");&#xD;&#xA;        $('#cancel_file').hide();&#xD;&#xA;    });