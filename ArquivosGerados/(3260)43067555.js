    // Select anchor tags to click on &#xD;&#xA;    $(document).on("click", "a", function(event) {&#xD;&#xA;      console.log("item clicked");&#xD;&#xA;      // Clear out the default action  &#xD;&#xA;      event.preventDefault();&#xD;&#xA;      console.log("working until now");&#xD;&#xA;      // Animate to selected selected target&#xD;&#xA;      $("html,body").animate({&#xD;&#xA;        scroll: $($(this).attr('href')).offset().top&#xD;&#xA;      }, 900);&#xD;&#xA;      console.log("no errors for now");&#xD;&#xA;    });