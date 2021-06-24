    let deltaBeta = 0;&#xD;&#xA;    let deltaGamma = 0;&#xD;&#xA;    if (window.DeviceOrientationEvent) {&#xD;&#xA;      window.addEventListener('deviceorientation', function (e) {&#xD;&#xA;        const beta = (e.beta != null) ? Math.round(e.beta) : 0;&#xD;&#xA;        const gamma = (e.gamma != null) ? Math.round(e.gamma) : 0;&#xD;&#xA;        deltaBeta = Math.abs(beta - deltaBeta);&#xD;&#xA;        deltaGamma = Math.abs(gamma - deltaGamma);&#xD;&#xA;        $("#beta").html("Beta: " + beta);&#xD;&#xA;        $("#gamma").html("Gamma: " + gamma);&#xD;&#xA;        &#xD;&#xA;        if (Math.abs(deltaBeta) > Math.abs(Number($("#deltaBeta").html()))) {&#xD;&#xA;          $("#deltaBeta").html(deltaBeta);&#xD;&#xA;          if (Number($("#deltaBeta").html()) >= 30) {&#xD;&#xA;            $("#deltaBeta").removeAttr("class", "blue").addClass("red");&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        if (Math.abs(deltaGamma) > Math.abs(Number($("#deltaGamma").html()))) {&#xD;&#xA;          $("#deltaGamma").html(deltaGamma);&#xD;&#xA;          if (Number($("#deltaGamma").html()) >= 30) {&#xD;&#xA;            $("#deltaGamma").removeAttr("class", "blue").addClass("red");&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      }, true);&#xD;&#xA;    } else {&#xD;&#xA;      $("#gamma").html("deviceorientation not supported");&#xD;&#xA;    }