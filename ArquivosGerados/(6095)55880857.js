    var input = document.getElementById("inpText");&#xD;&#xA;    var button = document.getElementById("button");&#xD;&#xA;    var ul = document.querySelector("ul");&#xD;&#xA;    var list = document.getElementsByTagName("li");&#xD;&#xA;    function inputLength() {&#xD;&#xA;        return input.value.length;&#xD;&#xA;    }&#xD;&#xA;    function createNewListElement() {&#xD;&#xA;        var li = document.createElement("li");&#xD;&#xA;        li.appendChild(document.createTextNode(input.value));&#xD;&#xA;        ul.appendChild(li);&#xD;&#xA;        input.value = "";&#xD;&#xA;    }&#xD;&#xA;    function newElementCreation() {&#xD;&#xA;        if (inputLength() > 0) {&#xD;&#xA;            createNewListElement();&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function newElementCreationByEnter(event) {&#xD;&#xA;        if (inputLength() > 0 && event.keyCode === 13) {&#xD;&#xA;            createNewListElement();&#xD;&#xA;        }&#xD;&#xA;    }&#xD;&#xA;    function ElementToggling () {&#xD;&#xA;        this.classList.toggle("done");&#xD;&#xA;    }&#xD;&#xA;        button.addEventListener("click", newElementCreation);&#xD;&#xA;        input.addEventListener("keypress", newElementCreationByEnter);&#xD;&#xA;    for (var i=0; i<list.length; i++) {&#xD;&#xA;       list[i].addEventListener("click", ElementToggling);&#xD;&#xA;    }