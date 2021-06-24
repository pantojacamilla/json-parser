    var button = document.getElementById("enter");&#xD;&#xA;    var input = document.getElementById("userinput");&#xD;&#xA;    var ul = document.querySelector("ul");&#xD;&#xA;    var span= document.getElementsByTagName("span");&#xD;&#xA;    var DeleteButton=document.getElementsByTagName("button");&#xD;&#xA;    /*Delete button */&#xD;&#xA;    [...document.getElementsByTagName('button')].forEach(el =>&#xD;&#xA;      el.addEventListener('click', () =>&#xD;&#xA;        el.parentNode.parentNode.removeChild(el.parentNode)));&#xD;&#xA;    /*toggle .done property*/&#xD;&#xA;    for(var i=0; i<span.length; i++){&#xD;&#xA;       span[i].addEventListener("click", liClick);&#xD;&#xA;    }&#xD;&#xA;    function liClick(){&#xD;&#xA;     this.classList.toggle("done");&#xD;&#xA;    }  &#xD;&#xA;    function inputLength() {&#xD;&#xA;    	return input.value.length;&#xD;&#xA;    }&#xD;&#xA;    function createListElement() {&#xD;&#xA;    	var li = document.createElement("li");&#xD;&#xA;        var deletebutton = document.createElement("button")&#xD;&#xA;        var spanitem = document.createElement("span")&#xD;&#xA;    	spanitem.appendChild(document.createTextNode(input.value));&#xD;&#xA;        deletebutton.appendChild(document.createTextNode("Delete"));&#xD;&#xA;    	ul.appendChild(li);&#xD;&#xA;        li.appendChild(spanitem)&#xD;&#xA;        li.appendChild(deletebutton);&#xD;&#xA;    	input.value = "";&#xD;&#xA;    }&#xD;&#xA;    function addListAfterClick() {&#xD;&#xA;    	if (inputLength() > 0) {&#xD;&#xA;    		createListElement();&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    function addListAfterKeypress(event) {&#xD;&#xA;    	if (inputLength() > 0 && event.keyCode === 13) {&#xD;&#xA;    		createListElement();&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    button.addEventListener("click", addListAfterClick);&#xD;&#xA;    input.addEventListener("keypress", addListAfterKeypress);