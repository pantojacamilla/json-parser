    function deplacer(argument) {&#xD;&#xA;    	for(e in actif){&#xD;&#xA;    		if(actif[e] == true){&#xD;&#xA;    			e.style.top = argument.clientY + "px";&#xD;&#xA;    			e.style.left = argument.clientX + "px";&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    function activerDeplacement(arg) {&#xD;&#xA;    	actif[arg.target] = true;&#xD;&#xA;    }&#xD;&#xA;    document.addEventListener("mousemove", deplacer);&#xD;&#xA;    var elements = document.querySelectorAll(".draggableBox");&#xD;&#xA;    var actif = {};&#xD;&#xA;    for (var i = 0, taille = elements.length; i < taille; ++i){&#xD;&#xA;    	actif[elements[i]] = false;&#xD;&#xA;    	elements[i].addEventListener("mousedown", activerDeplacement);&#xD;&#xA;    }