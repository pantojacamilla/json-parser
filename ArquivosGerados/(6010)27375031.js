    import flash.events.MouseEvent;&#xD;&#xA;    factorize.addEventListener(MouseEvent.CLICK, func1);&#xD;&#xA;    var primeNumbers: Array = new Array(2, 3); //the first primal numbers&#xD;&#xA;    var maxNum = 100;&#xD;&#xA;    function check(num) {&#xD;&#xA;    	for (var i = (num - 1); i > 1; i--) {&#xD;&#xA;    		if ((num % i) == 0) {&#xD;&#xA;    			return false;&#xD;&#xA;    		}&#xD;&#xA;    	}&#xD;&#xA;    	return true;&#xD;&#xA;    }&#xD;&#xA;    var lastNum: int = primeNumbers[primeNumbers.length - 1];&#xD;&#xA;    var nextNum: int = lastNum + 1;&#xD;&#xA;    while (primeNumbers.length < maxNum) {&#xD;&#xA;    	if (check(nextNum) == true) {&#xD;&#xA;    		primeNumbers.push(nextNum);&#xD;&#xA;    		nextNum++;&#xD;&#xA;    	} else nextNum++;&#xD;&#xA;    }&#xD;&#xA;    trace(primeNumbers);&#xD;&#xA;    function func1 (evt:MouseEvent) { //factorizing function&#xD;&#xA;    	var tall:int = 18; //the number i want i factorize&#xD;&#xA;    	var num:int = 0;&#xD;&#xA;    	var factor:Array = new Array();&#xD;&#xA;    	while (num<tall) {&#xD;&#xA;    		while (int(tall/primeNumbers[num]) == tall/primeNumbers[num]) {&#xD;&#xA;    			trace(tall+"/"+primeNumbers[num]+"="+tall/primeNumbers[num])&#xD;&#xA;    			factor.push(primeNumbers[num]);&#xD;&#xA;    			&#xD;&#xA;    			var next = tall/primeNumbers[num];&#xD;&#xA;    			while (int(next/primeNumbers[num]) == next/primeNumbers[num]) {&#xD;&#xA;    				factor.push(primeNumbers[num])&#xD;&#xA;    				trace(next+"/"+primeNumbers[num]+"="+next/primeNumbers[num])&#xD;&#xA;    				&#xD;&#xA;    				&#xD;&#xA;    				var next2 = next/primeNumbers[num];&#xD;&#xA;    				while (int(next2/primeNumbers[num]) == next2/primeNumbers[num]) {&#xD;&#xA;    					factor.push(primeNumbers[num])&#xD;&#xA;    					trace(next2+"/"+primeNumbers[num]+"="+next2/primeNumbers[num])&#xD;&#xA;    					&#xD;&#xA;    					&#xD;&#xA;    					var next2 = next/primeNumbers[num];&#xD;&#xA;    					while (int(next2/primeNumbers[num]) == next2/primeNumbers[num]) {&#xD;&#xA;    						factor.push(primeNumbers[num])&#xD;&#xA;    						trace(next2+"/"+primeNumbers[num]+"="+next2/primeNumbers[num])&#xD;&#xA;    						num++;&#xD;&#xA;    					}&#xD;&#xA;    				num++;&#xD;&#xA;    				}&#xD;&#xA;    			num++;&#xD;&#xA;    			}&#xD;&#xA;    		num++;&#xD;&#xA;    		}&#xD;&#xA;    	num++;&#xD;&#xA;    	}&#xD;&#xA;    	trace(tall + " = " + factor);&#xD;&#xA;    }