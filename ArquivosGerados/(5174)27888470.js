            <script type="text/javascript">&#xD;&#xA;             &#xD;&#xA;                var basket = [];&#xD;&#xA;                // display basket and fill cells&#xD;&#xA;                function displaybasket(){&#xD;&#xA;                var shoppingBasketTblBody = document.getElementById("shoppingBasketTblBody");&#xD;&#xA;                while(shoppingBasketTblBody.rows.length>0) {&#xD;&#xA;                shoppingBasketTblBody.deleteRow(0);&#xD;&#xA;    				}&#xD;&#xA;                var basket_total = 0.00;&#xD;&#xA;                &#xD;&#xA;                //populating the table&#xD;&#xA;                &#xD;&#xA;                for(var product in basket){&#xD;&#xA;                var removeButton = document.createElement('input');&#xD;&#xA;    			removeButton.type = 'button'; &#xD;&#xA;    			removeButton.value = 'X';&#xD;&#xA;    			removeButton.onclick = removeItem;&#xD;&#xA;                /* could not work out how to implement without using cookies, ran out of time.&#xD;&#xA;    			var addButton = document.createElement('input');&#xD;&#xA;    			addButton.type = 'button'; &#xD;&#xA;    			addButton.value = '+';&#xD;&#xA;    			addButton.onclick = 'addItem';&#xD;&#xA;                var minusButton = document.createElement('input');&#xD;&#xA;    			minusButton.type = 'button'; &#xD;&#xA;    			minusButton.value = '-';&#xD;&#xA;    			minusButton.onclick = 'minusItem;' */&#xD;&#xA;    			var row = shoppingBasketTblBody.insertRow();&#xD;&#xA;                var cellName = row.insertCell(0);&#xD;&#xA;                var cellDescription = row.insertCell(1);&#xD;&#xA;                var cellPrice = row.insertCell(2);&#xD;&#xA;    	        var cellAmount = row.insertCell(3)&#xD;&#xA;    			var cellRemove = row.insertCell(4);&#xD;&#xA;    			cellPrice.align = "right";&#xD;&#xA;    			cellName.innerHTML = basket[product].Name;&#xD;&#xA;                cellDescription.innerHTML = basket[product].Description;&#xD;&#xA;                cellPrice.innerHTML = "£"+basket[product].Price.toFixed(2);&#xD;&#xA;    			cellAmount.innerHTML = basket[product].Quantity;&#xD;&#xA;    			cellRemove.appendChild(removeButton);&#xD;&#xA;    			basket_total += parseFloat(basket[product].Price);&#xD;&#xA;    			console.log(basket_total);&#xD;&#xA;                    }&#xD;&#xA;                // display total cost&#xD;&#xA;                document.getElementById("cart_total").innerHTML="£"+basket_total.toFixed(2);&#xD;&#xA;                }&#xD;&#xA;                function AddtoCart(name,Description,price,Quantity){&#xD;&#xA;                //create product&#xD;&#xA;                var item = {};&#xD;&#xA;                item.Name = name;&#xD;&#xA;                item.Description = Description;&#xD;&#xA;                item.Price = parseFloat(price);&#xD;&#xA;                item.Quantity = Quantity;&#xD;&#xA;                //push to basket&#xD;&#xA;                basket.push(item);&#xD;&#xA;                //call display basket function&#xD;&#xA;                displaybasket();&#xD;&#xA;                    }  &#xD;&#xA;    function removeAll() {&#xD;&#xA;    basket.length = 0.0;&#xD;&#xA;    basket_total = 0.00;&#xD;&#xA;    document.getElementById("shoppingBasketTblBody").deleteRow();&#xD;&#xA;    }&#xD;&#xA;      &#xD;&#xA;    function removeItem() {&#xD;&#xA;    var row = this.parentNode.parentNode;&#xD;&#xA;    row.parentNode.removeChild(row);&#xD;&#xA;       //subtract price of item from basket_total ???&#xD;&#xA;    }&#xD;&#xA;       &#xD;&#xA;    }  &#xD;&#xA;    /*could not work out how to implement without using cookies, ran out of time.&#xD;&#xA;    function addItem() {&#xD;&#xA;    }	&#xD;&#xA;    function minusItem() {&#xD;&#xA;    }*/&#xD;&#xA;    	&#xD;&#xA;    			</script>