    $(document).ready(function () {&#xD;&#xA;                $('#image-album img').click(function () {&#xD;&#xA;                    var link =$(this).attr('src');&#xD;&#xA;                    var nextImage=$(this).next().attr('src'); &#xD;&#xA;                    var prevImage=$(this).prev().attr('src');&#xD;&#xA;                    $('#imagepreview').attr('src',link);&#xD;&#xA;                    $('#exampleModal').modal('show');&#xD;&#xA;                    var nextImage=$(this).next().attr('src');&#xD;&#xA;                });&#xD;&#xA;            });&#xD;&#xA;            $( "#selectbtn" ).click(function() {&#xD;&#xA;                var state = $(".custom-checkbox").css("visibility");&#xD;&#xA;                if(state==='visible'){&#xD;&#xA;                    state='hidden';&#xD;&#xA;                }&#xD;&#xA;                else{&#xD;&#xA;                    state='visible';&#xD;&#xA;                }&#xD;&#xA;                $(".custom-checkbox").css('visibility',state);  &#xD;&#xA;            });