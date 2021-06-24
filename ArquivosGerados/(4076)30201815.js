    //Array that will store the actual images to be used&#xD;&#xA;    var pics=new Array();&#xD;&#xA;    var winHud = document.getElementById("extra-ammo");&#xD;&#xA;    var tieHud = document.getElementById("current-ammo");&#xD;&#xA;    var losHud = document.getElementById("current-ammo");&#xD;&#xA;    var winSpan = document.getElementById('You Win!')&#xD;&#xA;    var tieSpan = document.getElementById('It\'s A Tie!')&#xD;&#xA;    var losSpan = document.getElementById('You Lose')&#xD;&#xA;    var win = 0;&#xD;&#xA;    var tie = 0;&#xD;&#xA;    var loss = 0;&#xD;&#xA;    pics [0]="images/rock.jpg";&#xD;&#xA;    pics [1]="images/paper.jpg";&#xD;&#xA;    pics [2]="images/scissors.jpg";&#xD;&#xA;    pics [3]="images/lizard.jpg";&#xD;&#xA;    pics [4]="images/spock.jpg";&#xD;&#xA;    //Array that will store the highlighted images&#xD;&#xA;    var pics2=new Array();&#xD;&#xA;    pics2 [0]="images/rock2.jpg";&#xD;&#xA;    pics2 [1]="images/paper2.jpg";&#xD;&#xA;    pics2 [2]="images/scissors2.jpg";&#xD;&#xA;    pics2 [3]="images/lizard2.jpg";&#xD;&#xA;    pics2 [4]="images/spock2.jpg";&#xD;&#xA;    //Array for the player ID&#xD;&#xA;    var pId=new Array("rock_p","paper_p","scissors_p","lizard_p","spock_p");&#xD;&#xA;    //Array for the computer ID&#xD;&#xA;    var cId=new Array();&#xD;&#xA;    cId[0]="rock_c";&#xD;&#xA;    cId[1]="paper_c";&#xD;&#xA;    cId[2]="scissors_c";&#xD;&#xA;    cId[3]="lizard_c";&#xD;&#xA;    cId[4]="spock_c";&#xD;&#xA;    //Function that will swap the images to the highlighted ones&#xD;&#xA;    function swap(id,image) {&#xD;&#xA;    	document.getElementById(id).src=image;&#xD;&#xA;    	&#xD;&#xA;    }//end swap&#xD;&#xA;    //function that plays the game&#xD;&#xA;    function play(id) {&#xD;&#xA;    	swap(pId[0],pics[0]);&#xD;&#xA;    	swap(pId[1],pics[1]);&#xD;&#xA;    	swap(pId[2],pics[2]);&#xD;&#xA;    	swap(pId[3],pics[3]);&#xD;&#xA;    	swap(pId[4],pics[4]);&#xD;&#xA;    	&#xD;&#xA;    	swap(cId[0],pics[0]);&#xD;&#xA;    	swap(cId[1],pics[1]);&#xD;&#xA;    	swap(cId[2],pics[2]);&#xD;&#xA;    	swap(cId[3],pics[3]);&#xD;&#xA;    	swap(cId[4],pics[4]);&#xD;&#xA;    	&#xD;&#xA;    	//variable that will store what we pick&#xD;&#xA;    	var p_choice=id;&#xD;&#xA;    	&#xD;&#xA;    	//variable that will store what the computer picks&#xD;&#xA;    	var c_choice=id;	&#xD;&#xA;    	&#xD;&#xA;    	//math.floor rounds down the choices that the computer is going to make&#xD;&#xA;    	var c_choice=Math.floor(Math.random()*4.9);&#xD;&#xA;    	swap(pId[p_choice],pics2[p_choice]);&#xD;&#xA;    	swap(cId[c_choice],pics2[c_choice]);&#xD;&#xA;    	&#xD;&#xA;    	//determines who wins or loses&#xD;&#xA;    	switch(p_choice) {&#xD;&#xA;    		case 0:&#xD;&#xA;    		if (c_choice==0){&#xD;&#xA;    			alert("Tie:\nOh Rock you too then!");&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==1) {&#xD;&#xA;    			alert("Lose:\nPaper covers Rock")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==2) {&#xD;&#xA;    			alert("Win:\nRock crushes Scissors")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==3) {&#xD;&#xA;    			alert("Win:\nRock crushes Lizard")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==4) {&#xD;&#xA;    			alert("Lose:\nSpock vaporizes Rock")&#xD;&#xA;    		}&#xD;&#xA;    		break;&#xD;&#xA;    		case 1:&#xD;&#xA;    		if (c_choice==1){&#xD;&#xA;    			alert("Tie:\nTwo pieces of paper stack up against each other");&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==0) {&#xD;&#xA;    			alert("Win:\nPaper covers Rock")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==2) {&#xD;&#xA;    			alert("Lose:\nScissors cuts Paper")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==3) {&#xD;&#xA;    			alert("Lose:\nLizard eats Paper")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==4) {&#xD;&#xA;    			alert("Win:\nPaper disproves Spock")&#xD;&#xA;    		}&#xD;&#xA;    		break;&#xD;&#xA;    		&#xD;&#xA;    		case 2:&#xD;&#xA;    		if (c_choice==2){&#xD;&#xA;    			alert("Tie:\nThis is unacceptable! Unless you're a lesbian");&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==0) {&#xD;&#xA;    			alert("Lose:\nRock crushes Scissors")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==1) {&#xD;&#xA;    			alert("Win:\nScissors cuts Paper")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==3) {&#xD;&#xA;    			alert("Win:\nScissors decapitates Lizard")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==4) {&#xD;&#xA;    			alert("Lose:\nSpock smashes Scissors")&#xD;&#xA;    		}&#xD;&#xA;    		break;&#xD;&#xA;    		&#xD;&#xA;    		case 3:&#xD;&#xA;    		if (c_choice==3){&#xD;&#xA;    			alert("Tie:\nTwo Lizards begin mating");&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==0) {&#xD;&#xA;    			alert("Lose:\nRock crushes Lizard")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==1) {&#xD;&#xA;    			alert("Win:\nLizard eats Paper")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==2) {&#xD;&#xA;    			alert("Lose:\nScissors decapitates Lizard")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==4) {&#xD;&#xA;    			alert("Win:\nLizard poisons Spock")&#xD;&#xA;    		}&#xD;&#xA;    		break;&#xD;&#xA;    		case 4:&#xD;&#xA;    		if (c_choice==4){&#xD;&#xA;    			alert("Tie:\nOne of us is going to have to give up Spock");&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==0) {&#xD;&#xA;    			alert("Win:\nSpock vaporizes Rock")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==1) {&#xD;&#xA;    			alert("Lose:\nPaper disproves Spock")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==2) {&#xD;&#xA;    			alert("Win:\nSpock crushes Scissors")&#xD;&#xA;    		}&#xD;&#xA;    		else if(c_choice==3) {&#xD;&#xA;    			alert("Lose:\nLizard poisons Spock")&#xD;&#xA;    		}&#xD;&#xA;    		break;&#xD;&#xA;    	}&#xD;&#xA;    }//end play function