    function clicked()&#xD;&#xA;    {&#xD;&#xA;      element = $("#spin");&#xD;&#xA;      if ($(element).hasClass("rotate2"))&#xD;&#xA;      {&#xD;&#xA;        $(element).removeClass("rotate rotate2");&#xD;&#xA;        setTimeout( () => $(element).addClass("rotate"), 1);&#xD;&#xA;      }&#xD;&#xA;      else if($(element).hasClass("rotate"))&#xD;&#xA;      {&#xD;&#xA;        $(element).addClass("rotate2");&#xD;&#xA;      }&#xD;&#xA;      else&#xD;&#xA;      {&#xD;&#xA;        $(element).addClass("rotate");&#xD;&#xA;      }&#xD;&#xA;    }