    $(document).ready(function(){&#xD;&#xA;      var dropOneValue = "";&#xD;&#xA;      $("ul.which-way").on("click", function() {&#xD;&#xA;        $(this).find('li').toggleClass("open-list");&#xD;&#xA;        $(this).find('open-list').css("display", "block");&#xD;&#xA;      });&#xD;&#xA;      $("li.cadja").on("click", function(){&#xD;&#xA;        dropOneValue = ""&#xD;&#xA;        $($(this).parent().find('.which-init')[0]).html($(this).html());&#xD;&#xA;        handleDropdownOne();&#xD;&#xA;      });  &#xD;&#xA;    });&#xD;&#xA;    window.handleDropdownOne = function() {&#xD;&#xA;       dropOneValue = $($($('.drowpdown-one').find('.which-init')[0]).find('span.value')[0]).text();&#xD;&#xA;      console.log(dropOneValue);&#xD;&#xA;    };&#xD;&#xA;    handleDropdownOne();&#xD;&#xA;    $('a#trip').on("click", function(){&#xD;&#xA;      $(this).attr("href", "https://www.westcoastway.co.za/"+dropOneValue);&#xD;&#xA;    });