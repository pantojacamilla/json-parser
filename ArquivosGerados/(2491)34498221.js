    function test1() {&#xD;&#xA;      document.getElementById("output").innerHTML = "#1 Output:";&#xD;&#xA;      var myFunctions = [];&#xD;&#xA;      for (var i = 0; i < 10; i++) {&#xD;&#xA;        myFunctions[i] = function() {&#xD;&#xA;          document.getElementById("output").innerHTML += "<br>" + i;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      for (var j = 0; j < 10; j++) {&#xD;&#xA;        myFunctions[j]();&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function test2() {&#xD;&#xA;      document.getElementById("output").innerHTML = "#2 Output:";&#xD;&#xA;      window.test2Funcs = {};&#xD;&#xA;    	function* Generator() {&#xD;&#xA;    		var functionName = "doStuff";&#xD;&#xA;    		var number = 0;&#xD;&#xA;    		while (number < 10) {&#xD;&#xA;        	number++;&#xD;&#xA;    			yield {&#xD;&#xA;    				myFunction: function() {&#xD;&#xA;    					document.getElementById("output").innerHTML += "<br>" + number;&#xD;&#xA;    				},&#xD;&#xA;    				name: functionName + (number)&#xD;&#xA;    			}&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;      &#xD;&#xA;      var generator = new Generator();&#xD;&#xA;    	for (var k = 0; k < 10; k++) {&#xD;&#xA;    		var out = generator.next().value;&#xD;&#xA;    		window.test2Funcs[out.name] = out.myFunction;&#xD;&#xA;    	}&#xD;&#xA;    	&#xD;&#xA;      for (var l = 1; l < 11; l++) {&#xD;&#xA;      	func = "doStuff" + l;&#xD;&#xA;        test2Funcs[func]();&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function test3() {&#xD;&#xA;      document.getElementById("output").innerHTML = "#3 Output:";&#xD;&#xA;      var myFunctions = [];&#xD;&#xA;      var stringOut = "";&#xD;&#xA;      for (var i = 0; i < 10; i++) {&#xD;&#xA;        myFunctions[i] = function() {&#xD;&#xA;          stringOut += "a";&#xD;&#xA;          document.getElementById("output").innerHTML += "<br>" + stringOut;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      for (var j = 0; j < 10; j++) {&#xD;&#xA;        myFunctions[j]();&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    function test4() {&#xD;&#xA;      document.getElementById("output").innerHTML = "#4 Output:";&#xD;&#xA;      var myFunctions = [];&#xD;&#xA;      var numOut = "";&#xD;&#xA;      for (var i = 0; i < 10; i++) {&#xD;&#xA;        myFunctions[i] = function() {&#xD;&#xA;          numOut++;&#xD;&#xA;          document.getElementById("output").innerHTML += "<br>" + numOut;&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      for (var j = 0; j < 10; j++) {&#xD;&#xA;        myFunctions[j]();&#xD;&#xA;      }&#xD;&#xA;    }&#xD;&#xA;    document.getElementById("test1").addEventListener("click", test1);&#xD;&#xA;    document.getElementById("test2").addEventListener("click", test2);&#xD;&#xA;    document.getElementById("test3").addEventListener("click", test3);&#xD;&#xA;    document.getElementById("test4").addEventListener("click", test4);