    function milkHandler() {&#xD;&#xA;    	var tempMilk =document.orderForm.milk.value;&#xD;&#xA;    	var milkTotal = tempMilk * 3.19;&#xD;&#xA;    	console.log(milkTotal);&#xD;&#xA;    }&#xD;&#xA;    function eggHandler() {&#xD;&#xA;    	var tempEgg =document.orderForm.eggs.value;&#xD;&#xA;    	var eggTotal = tempEgg * 3.55;&#xD;&#xA;    	console.log(eggTotal);&#xD;&#xA;    }&#xD;&#xA;    function breadHandler() {&#xD;&#xA;    	var tempBread = document.orderForm.bread.value;&#xD;&#xA;    	var breadTotal = tempBread * 3.49;&#xD;&#xA;    	console.log(breadTotal);&#xD;&#xA;    }&#xD;&#xA;    function juiceHandler() {&#xD;&#xA;    	var tempJuice =document.orderForm.juice.value;&#xD;&#xA;    	var juiceTotal = tempJuice * 4.49;&#xD;&#xA;    	console.log(juiceTotal);&#xD;&#xA;    }&#xD;&#xA;    function honeyHandler() {&#xD;&#xA;    	var tempHoney = document.orderForm.honey.value;&#xD;&#xA;    	var honeyTotal = tempHoney * 6.59;&#xD;&#xA;    	console.log(honeyTotal);&#xD;&#xA;    }&#xD;&#xA;    function finish() {&#xD;&#xA;    	var mainTotal = milkTotal+eggTotal+breadTotal+juiceTotal+honeyTotal;&#xD;&#xA;    	alert(milkTotal);&#xD;&#xA;    }