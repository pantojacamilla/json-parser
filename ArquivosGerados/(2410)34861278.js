    function mon() {&#xD;&#xA;      if ($('body').is('.mon')) {&#xD;&#xA;        return true;&#xD;&#xA;      } else {&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function tue() {&#xD;&#xA;      if ($('body').is('.tue')) {&#xD;&#xA;        return true;&#xD;&#xA;      } else {&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function wed() {&#xD;&#xA;      if ($('body').is('.wed')) {&#xD;&#xA;        return true;&#xD;&#xA;      } else {&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function detectmob() {&#xD;&#xA;      if (screen.width <= 800) {&#xD;&#xA;        return true;&#xD;&#xA;      } else {&#xD;&#xA;        return false;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    if (detectmob() && mon()) {&#xD;&#xA;      window.location = "../m/days/mon.html";&#xD;&#xA;    } else if (detectmob() && tue()) {&#xD;&#xA;      window.location = "../m/days/tue.html";&#xD;&#xA;    } else if (detectmob() && wed()) {&#xD;&#xA;      window.location = "../m/days/wed.html";&#xD;&#xA;    }