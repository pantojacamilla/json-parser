    function myFunction() {&#xD;&#xA;      var y = document.getElementById("woocommerce_product_categories-1");&#xD;&#xA;      var x = document.getElementById("shop-sidebar");&#xD;&#xA;      console.log("x.style.display1");&#xD;&#xA;      x.style.display = 'none';&#xD;&#xA;      console.log("x.style.display");&#xD;&#xA;      if (x.style.display == "none") {&#xD;&#xA;        y.style.display = "none";&#xD;&#xA;        x.style.position = "fixed";&#xD;&#xA;        x.style.display = "block";&#xD;&#xA;        x.style.zIndex = 9;&#xD;&#xA;        x.style.top = "126px";&#xD;&#xA;        x.style.width = "100%";&#xD;&#xA;        x.style.background = "#fff";&#xD;&#xA;        x.style.height = "calc(100vh - 126px)";&#xD;&#xA;        x.style.overflowY = "scroll";&#xD;&#xA;      } else {&#xD;&#xA;        x.style.display = "none";&#xD;&#xA;        x.style.zIndex = 0;&#xD;&#xA;      }&#xD;&#xA;    var x = document.getElementById("menu-mobile-header");&#xD;&#xA;    if (x.style.position === "absolute") {&#xD;&#xA;        x.style.position = "fixed";&#xD;&#xA;    } else {&#xD;&#xA;        x.style.position = "absolute";&#xD;&#xA;    }&#xD;&#xA;    var x = document.getElementById("menu-mobile-header");&#xD;&#xA;    if (x.style.top === "195px") {&#xD;&#xA;        x.style.top = "60px";&#xD;&#xA;    } else {&#xD;&#xA;        x.style.top = "195px";&#xD;&#xA;    }&#xD;&#xA;    var x = document.getElementById("menu-mobile-header");&#xD;&#xA;    if (x.style.zIndex === "0") {&#xD;&#xA;        x.style.zIndex = "9";&#xD;&#xA;    } else {&#xD;&#xA;        x.style.zIndex = "0";&#xD;&#xA;    }&#xD;&#xA;   }