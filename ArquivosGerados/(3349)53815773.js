    socket.on('hand', function(hand){&#xD;&#xA;        console.log("kaarten gekregen");&#xD;&#xA;          var node = document.getElementById("cardwrap");&#xD;&#xA;          node.innerHTML = ''; //remove all cards in the hand&#xD;&#xA;          var perCardRotate = 90 / hand.length;   //calculate the rotation per card&#xD;&#xA;          var perCardRotate = perCardRotate.toString().trim();&#xD;&#xA;          for(var i=0; i < hand.length; i++){  //for loop to create all cards&#xD;&#xA;          var subnode = document.createElement("a");&#xD;&#xA;          subnode.setAttribute("class", "card");&#xD;&#xA;          subnode.setAttribute("name", i);&#xD;&#xA;          subnode.setAttribute("id", i);&#xD;&#xA;          subnode.setAttribute("onclick", "PickCard(getAttribute('name'))");&#xD;&#xA;          var textnode = document.createTextNode(hand[i]);&#xD;&#xA;          var image = document.createElement("img");&#xD;&#xA;          image.setAttribute("src", "/client/img/" + hand[i] + ".png");&#xD;&#xA;          image.setAttribute("zIndex", i + 1000);&#xD;&#xA;          image.setAttribute("id", i + "CARD")&#xD;&#xA;          subnode.appendChild(image);&#xD;&#xA;          node.appendChild(subnode);&#xD;&#xA;          perCardRotateString = (i * perCardRotate )- 45 + (parseFloat(perCardRotate) / 2) //calculate the rotation of the current card being made&#xD;&#xA;          var perCardTranslateString = (0.03 * Math.pow(perCardRotateString, 2)); //calculate how far the card needs to be moved down based on: y=(0.03 X)^2&#xD;&#xA;          document.getElementById(i + "CARD").setAttribute('style', "transform: rotate("+ perCardRotateString + 'deg) translateY( '+ perCardTranslateString +'px)'); //set rotation and translation&#xD;&#xA;        }&#xD;&#xA;      });