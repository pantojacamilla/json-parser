    var button = document.getElementById("button");&#xD;&#xA;    var select = document.getElementById("select");&#xD;&#xA;    var basket = document.getElementById("basket");&#xD;&#xA;    var totalCost = document.getElementById("total-cost");&#xD;&#xA;    &#xD;&#xA;    function addToBasket() {&#xD;&#xA;     var li = document.createElement("li");&#xD;&#xA;     li.innerHTML = select.options[select.selectedIndex].text;&#xD;&#xA;     basket.appendChild(li);&#xD;&#xA;    &#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    document.getElementById("remove-button").onclick = function() {&#xD;&#xA;    var list = document.getElementById("basket");&#xD;&#xA;    list.removeChild(list.childNodes[0])&#xD;&#xA;    &#xD;&#xA;    }&#xD;&#xA;    &#xD;&#xA;    &#xD;&#xA;    button.addEventListener("click", addToBasket);