    draw = tempObj => {&#xD;&#xA;        if (!tempObj) {tempObj = baseObj;}&#xD;&#xA;    	div.style.borderWidth = tempObj.border + "px";&#xD;&#xA;    	div.style.backgroundColor = tempObj.background;&#xD;&#xA;        // missing here merge the two objects&#xD;&#xA;        // missing and main question how to update baseObj with new information&#xD;&#xA;    }&#xD;&#xA;    draw({&#xD;&#xA;		 border: Math.round(Math.random() * 55 + 20)		&#xD;&#xA;    })