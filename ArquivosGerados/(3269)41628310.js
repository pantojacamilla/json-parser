    var json={  &#xD;&#xA;            "fruit":[  &#xD;&#xA;          {  &#xD;&#xA;             "fruitname":"Apple",&#xD;&#xA;             "location":"data/png/apple.png",&#xD;&#xA;             "quantity":"25",&#xD;&#xA;             "price":"2"&#xD;&#xA;          },&#xD;&#xA;          {  &#xD;&#xA;             "fruitname":"Mango",&#xD;&#xA;             "location":"data/png/mango.png",&#xD;&#xA;             "quantity":"35",&#xD;&#xA;             "price":"3"&#xD;&#xA;          }&#xD;&#xA;       ]&#xD;&#xA;    };&#xD;&#xA;    var cards = document.getElementsByClassName("content")[0];&#xD;&#xA;    var fruits = json.fruit;&#xD;&#xA;    //alert(fruits.length);&#xD;&#xA;    //alert(fruits[1].fruitname);&#xD;&#xA;    for (var i = 0; i < fruits.length; i++) {&#xD;&#xA;        var cardelement=document.createElement('div');&#xD;&#xA;        cardelement.className = 'card';&#xD;&#xA;    //    alert(cardelement);&#xD;&#xA;        cards.appendChild(cardelement);&#xD;&#xA;        var object = document.createElement('div');&#xD;&#xA;        object.className = 'object';&#xD;&#xA;    //    alert(object);&#xD;&#xA;        cardelement.appendChild(object);&#xD;&#xA;        var image = document.createElement('img');&#xD;&#xA;        image.setAttribute("src", fruits[i].location);&#xD;&#xA;        object.appendChild(image);&#xD;&#xA;        var objectback = document.createElement('div');&#xD;&#xA;        objectback.className = 'object-back';&#xD;&#xA;        cardelement.appendChild(objectback);&#xD;&#xA;        var backfruit = document.createElement('div');&#xD;&#xA;        backfruit.className = 'back-fruit';&#xD;&#xA;        backfruit.innerHTML = fruits[i].fruitname;&#xD;&#xA;        objectback.appendChild(backfruit);&#xD;&#xA;        var backprice = document.createElement('div');&#xD;&#xA;        backprice.className = 'back-price';&#xD;&#xA;        backprice.innerHTML = fruits[i].price + "$ per unit";&#xD;&#xA;        objectback.appendChild(backprice);&#xD;&#xA;        var backquantity = document.createElement('div');&#xD;&#xA;        backquantity.className = 'back-quantity';&#xD;&#xA;        backquantity.innerHTML = "In Stock " + fruits[i].quantity + " units";&#xD;&#xA;        objectback.appendChild(backquantity);&#xD;&#xA;        &#xD;&#xA;    }