    var db = [&#xD;&#xA;    	{ // ROOMS&#xD;&#xA;    	rooms:&#xD;&#xA;    	[&#xD;&#xA;    	{ // Room 0 - North room&#xD;&#xA;    		description: "You awake to find yourself in a dank smelling old room, plaster and smashed glass litters the floor. To the North is a broken window, beyond which you can only see a thick grey mist. There is one door by which to exit, to the South.",&#xD;&#xA;    		roomImg: "images/room_0.jpg",&#xD;&#xA;    		exits: &#xD;&#xA;    			{&#xD;&#xA;    				north: false,&#xD;&#xA;    				south: 1,&#xD;&#xA;    				east:  false,&#xD;&#xA;    				west:  false,&#xD;&#xA;    				up:    false,&#xD;&#xA;    				down:  false&#xD;&#xA;    			},&#xD;&#xA;    		roomInvent: ["a Box of Matches", "a Glass Shard"]&#xD;&#xA;    	},&#xD;&#xA;    	{ // Room 1 - Corridor&#xD;&#xA;    		description: "You are in a short, dark corridor, a single tungsten bulb hangs stiffly from the ceiling. There is a light switch on the wall.",&#xD;&#xA;    		roomImg: "images/room_1.jpg",&#xD;&#xA;    		exits: &#xD;&#xA;    			{&#xD;&#xA;    				north: 0,&#xD;&#xA;    				south: 4,&#xD;&#xA;    				east:  3,&#xD;&#xA;    				west:  false,&#xD;&#xA;    				up:    5,&#xD;&#xA;    				down:  false&#xD;&#xA;    			},&#xD;&#xA;    		roomInvent: []&#xD;&#xA;    	},&#xD;&#xA;    	{ // Room 2 - West Room - Locked room&#xD;&#xA;    		description: "",&#xD;&#xA;    		roomImg: "images/room_2.jpg",&#xD;&#xA;    		exits: &#xD;&#xA;    			{&#xD;&#xA;    				north: false,&#xD;&#xA;    				south: false,&#xD;&#xA;    				east:  false,&#xD;&#xA;    				west:  false,&#xD;&#xA;    				up:    false,&#xD;&#xA;    				down:  false&#xD;&#xA;    			},&#xD;&#xA;    		roomInvent: []&#xD;&#xA;    	},&#xD;&#xA;    	{ // Room 3 - East room - Bedroom&#xD;&#xA;    		description: "You are in the Bedroom",&#xD;&#xA;    		roomImg: "images/room_3.jpg",&#xD;&#xA;    		exits: &#xD;&#xA;    			{&#xD;&#xA;    				north: false,&#xD;&#xA;    				south: false,&#xD;&#xA;    				east:  false,&#xD;&#xA;    				west:  1,&#xD;&#xA;    				up:    false,&#xD;&#xA;    				down:  false&#xD;&#xA;    			},&#xD;&#xA;    		roomInvent: []&#xD;&#xA;    	},&#xD;&#xA;    	{ // Room 4 - South room - kitchen&#xD;&#xA;    		description: "You are in a small kitchen. There is an old log fire on the East wall, and a door leading outside to the South.",&#xD;&#xA;    		roomImg: "images/room_4.jpg",&#xD;&#xA;    		exits: &#xD;&#xA;    			{&#xD;&#xA;    				north: 1,&#xD;&#xA;    				south: false,&#xD;&#xA;    				east:  false,&#xD;&#xA;    				west:  false,&#xD;&#xA;    				up:    false,&#xD;&#xA;    				down:  false&#xD;&#xA;    			},&#xD;&#xA;    		roomInvent: []&#xD;&#xA;    	},&#xD;&#xA;    	{ // Room 5 - Attic&#xD;&#xA;    		description: "You are in the Attic.",&#xD;&#xA;    		roomImg: "images/room_5.jpg",&#xD;&#xA;    		exits: &#xD;&#xA;    			{&#xD;&#xA;    				north: false,&#xD;&#xA;    				south: false,&#xD;&#xA;    				east:  false,&#xD;&#xA;    				west:  false,&#xD;&#xA;    				up:    false,&#xD;&#xA;    				down:  1&#xD;&#xA;    			},&#xD;&#xA;    		roomInvent: []&#xD;&#xA;    	}&#xD;&#xA;    	]&#xD;&#xA;    	},// End Rooms&#xD;&#xA;    		{ // ITEMS&#xD;&#xA;    	items:&#xD;&#xA;    			[&#xD;&#xA;    				{&#xD;&#xA;    					itemIndex: 0,&#xD;&#xA;    					name: "a Box of Matches",&#xD;&#xA;    					useWith: null,&#xD;&#xA;    					examine: "There is only a single match inside."&#xD;&#xA;    				},&#xD;&#xA;    				{&#xD;&#xA;    					itemIndex: 1,&#xD;&#xA;    					name: "a Glass Shard",&#xD;&#xA;    					useWith: null,&#xD;&#xA;    					examine: "It looks sharp"&#xD;&#xA;    				},&#xD;&#xA;    				{&#xD;&#xA;    					itemIndex: 2,&#xD;&#xA;    					name: "a Mallet",&#xD;&#xA;    					useWith: null,&#xD;&#xA;    					examine: "It is old and rusty, but otherwise uninteresting."&#xD;&#xA;    				}&#xD;&#xA;    			]&#xD;&#xA;    		}&#xD;&#xA;    ]; //End db&#xD;&#xA;    var inventory = [];&#xD;&#xA;    var inputTextBox = document.getElementById("inputTextBox");&#xD;&#xA;    var diologueBox = document.getElementById("diologueBox");&#xD;&#xA;    var strOut = "";&#xD;&#xA;    var roomLoc = 0;&#xD;&#xA;    function displayOut() {&#xD;&#xA;    	// images&#xD;&#xA;    	let dt = new Date;&#xD;&#xA;    	document.getElementById("imgBox").setAttribute("src", db[0].rooms[roomLoc].roomImg + "?dt=" + dt.getTime());&#xD;&#xA;    	// Diologue box&#xD;&#xA;    	 diologueBox.innerHTML = db[0].rooms[roomLoc].description + &#xD;&#xA;    		(function() { // Check if room has items in inventory, if so, list them.&#xD;&#xA;    				if (db[0].rooms[roomLoc].roomInvent != "") {&#xD;&#xA;    					return "<br><br> The room contains " + &#xD;&#xA;    					(function() {&#xD;&#xA;    						let items = "";&#xD;&#xA;    						for (let i = 0; i < db[0].rooms[roomLoc].roomInvent.length; i++) {&#xD;&#xA;    							items += db[0].rooms[roomLoc].roomInvent[i] + ", ";&#xD;&#xA;    						};&#xD;&#xA;    						items = items.slice(0, items.length - 2);&#xD;&#xA;    						return items;&#xD;&#xA;    					})(); &#xD;&#xA;    				} else {&#xD;&#xA;    					return "<br><br> The room is empty ";&#xD;&#xA;    				};&#xD;&#xA;    		})();&#xD;&#xA;    };&#xD;&#xA;    // Function for changing room location&#xD;&#xA;    function navigateTo(direction) { &#xD;&#xA;    	if (db[0].rooms[roomLoc].exits[direction] === false) {&#xD;&#xA;    		outputBox.innerHTML = "You cannot go " + direction + " from here."&#xD;&#xA;    	} else {&#xD;&#xA;    		roomLoc = db[0].rooms[roomLoc].exits[direction];&#xD;&#xA;    		displayOut();&#xD;&#xA;    	}&#xD;&#xA;    }&#xD;&#xA;    inputTextBox.addEventListener("keypress", function(event) {&#xD;&#xA;    	let x = event.which || event.keyCode; &#xD;&#xA;    	if (x === 13) {  // 13 is the Return key&#xD;&#xA;    			switch (inputTextBox.value.toLowerCase()) {&#xD;&#xA;    			//Diologue Navigation&#xD;&#xA;    				case "":&#xD;&#xA;    					// Nothing happens&#xD;&#xA;    					break;&#xD;&#xA;    				case "north":&#xD;&#xA;    				case "n":&#xD;&#xA;    					navigateTo("north");&#xD;&#xA;    					break;&#xD;&#xA;    				case "south":&#xD;&#xA;    				case "s":&#xD;&#xA;    					navigateTo("south");&#xD;&#xA;    					break;&#xD;&#xA;    				case "east":&#xD;&#xA;    				case "e":&#xD;&#xA;    					navigateTo("east");&#xD;&#xA;    					break;&#xD;&#xA;    				case "west":&#xD;&#xA;    				case "w":&#xD;&#xA;    					navigateTo("west");&#xD;&#xA;    					break;&#xD;&#xA;    				case "up":&#xD;&#xA;    				case "u":&#xD;&#xA;    					navigateTo("up");&#xD;&#xA;    					break;&#xD;&#xA;    				case "down":&#xD;&#xA;    				case "d":&#xD;&#xA;    					navigateTo("down");&#xD;&#xA;    					break;&#xD;&#xA;    			//Dioogue Help&#xD;&#xA;    				case "help":&#xD;&#xA;    					outputBox.innerHTML = " Here is a list of useful commands: North, South, East, West, Up, Down, Look, Examine, Inventory, Take, Use";&#xD;&#xA;    					break;&#xD;&#xA;    			//&#xD;&#xA;    				default:&#xD;&#xA;    					outputBox.innerHTML = " I have no idea what " + "'" + inputTextBox.value.bold() + "'" + " means...";		&#xD;&#xA;    			} // End switch&#xD;&#xA;    			&#xD;&#xA;    			//Clear InputTextBox&#xD;&#xA;    			inputTextBox.value = "";&#xD;&#xA;    			inputTextBox.setAttribute("placeholder", "");&#xD;&#xA;    			&#xD;&#xA;    			&#xD;&#xA;    	} // End KeyPress&#xD;&#xA;    }); // End Event listener&#xD;&#xA;    displayOut();