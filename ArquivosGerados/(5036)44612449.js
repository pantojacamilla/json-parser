      function checkUserInput(){&#xD;&#xA;			    for(var i = 0; i < users.length; i++){&#xD;&#xA;				console.log(users[i]);&#xD;&#xA;				  if (users[i] === userInput){&#xD;&#xA;				  alert("You are logged in");&#xD;&#xA;				  return;&#xD;&#xA;				  }&#xD;&#xA;				else{&#xD;&#xA;				  alert("Invalid username, please try again or if you are new register");&#xD;&#xA;				  return;			&#xD;&#xA;			    }&#xD;&#xA;			  }};