     <script type="text/javascript" >&#xD;&#xA;    $(document).ready(function() {&#xD;&#xA;      $('.fancybox').fancybox({&#xD;&#xA;     helpers: {&#xD;&#xA;      title: {&#xD;&#xA;        type: 'over'&#xD;&#xA;       }&#xD;&#xA;       },&#xD;&#xA;     afterShow: function(index) {&#xD;&#xA;     var currentItem = $('.thumbnail').eq(this.index);&#xD;&#xA;      var audioHtml = currentItem.attr('audio-html');&#xD;&#xA;       $(".fancybox-title").hide();&#xD;&#xA;       $(".fancybox-wrap").hover(function() {&#xD;&#xA;        $(".fancybox-title").stop(true, true).slideDown(200);&#xD;&#xA;        var toolbar = $("<div/>").addClass("audiofile");&#xD;&#xA;        toolbar.html(audioHtml);&#xD;&#xA;        $(".fancybox-title").after(toolbar);&#xD;&#xA;        }, function() {&#xD;&#xA;         $(".fancybox-title").stop(true, true).slideUp(200);&#xD;&#xA;        $(".audiofile").remove();&#xD;&#xA;        });&#xD;&#xA;        }&#xD;&#xA;        });&#xD;&#xA;        });&#xD;&#xA;        </script> 