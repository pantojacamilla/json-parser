      $(".cover .controls .scale").click(function() {&#xD;&#xA;          $(".currently_playing .cover").animate({&#xD;&#xA;              height: "50px",&#xD;&#xA;              width: "50px",&#xD;&#xA;              margin: "20px 80px 0 80px"&#xD;&#xA;          }, {&#xD;&#xA;              queue: false&#xD;&#xA;          });&#xD;&#xA;          $(".currently_playing .cover .controls").animate({&#xD;&#xA;              height: "50px",&#xD;&#xA;              width: "50px"&#xD;&#xA;          }, {&#xD;&#xA;              queue: false,&#xD;&#xA;          });&#xD;&#xA;      });