    window.onload = passParameters;&#xD;&#xA;    //Function to update "showdata" div with URL Querystring parameter values&#xD;&#xA;    function passParameters() {&#xD;&#xA;      var foodbeverage = getParameterByName("foodbeverage1");&#xD;&#xA;      var status = getParameterByName("status1");&#xD;&#xA;      if (foodbeverage != null && status != null) {&#xD;&#xA;        var data = "<b>Food Beverages:</b> " + foodbeverage + " <b>Dine/Takeaway:</b> " + status;&#xD;&#xA;        document.getElementById("showdata").innerHTML = data;&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    //Get URL parameter value&#xD;&#xA;    function getParameterByName(name, url) {&#xD;&#xA;      if (!url) url = window.location.href;&#xD;&#xA;      name = name.replace(/[\[\]]/g, "\\$&");&#xD;&#xA;      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),&#xD;&#xA;        results = regex.exec(url);&#xD;&#xA;      if (!results) return null;&#xD;&#xA;      if (!results[2]) return '';&#xD;&#xA;      return decodeURIComponent(results[2].replace(/\+/g, " "));&#xD;&#xA;    }