    $(function () {&#xD;&#xA;        //Initialize Select2 Elements&#xD;&#xA;        $(".select2").select2();&#xD;&#xA;      });&#xD;&#xA;    $(document).ready(function () {&#xD;&#xA;       $(".select2").on("change", function () {&#xD;&#xA;           $(".select2-selection__rendered li").each(function () {&#xD;&#xA;               var title = $(this).attr('title');&#xD;&#xA;               if (typeof title !== typeof undefined && title !== false) {&#xD;&#xA;                   var animal = title.replace(/ /g, "");&#xD;&#xA;                   $('#' + animal).show();&#xD;&#xA;               }&#xD;&#xA;           });&#xD;&#xA;       });&#xD;&#xA;       $(".remove").click(function () {&#xD;&#xA;         $(this).closest(".animals").hide();&#xD;&#xA;           var className = $($(this).closest("li")).attr('id');&#xD;&#xA;           $(".select2-selection__rendered li[title='" + className + "']").remove();&#xD;&#xA;       });&#xD;&#xA;      &#xD;&#xA;      });