    //Javascript:&#xD;&#xA;    function ready() {&#xD;&#xA;    var removeCartItemButtons = document.getElementsByClassName('btn-danger')&#xD;&#xA;    for (var i = 0; i < removeCartItemButtons.length; i++) {&#xD;&#xA;        var button = removeCartItemButtons[i]&#xD;&#xA;        button.addEventListener('click', removeCartItem)&#xD;&#xA;    }&#xD;&#xA;    var quantityInputs = document.getElementsByClassName('cart-quantity-input')&#xD;&#xA;    for (var i = 0; i < quantityInputs.length; i++) {&#xD;&#xA;        var input = quantityInputs[i]&#xD;&#xA;        input.addEventListener('change', quantityChanged)&#xD;&#xA;    }&#xD;&#xA;    var addToCartButtons = document.getElementsByClassName('shop-item-button')&#xD;&#xA;    for (var i = 0; i < addToCartButtons.length; i++) {&#xD;&#xA;        var button = addToCartButtons[i]&#xD;&#xA;        button.addEventListener('click', addToCartClicked)&#xD;&#xA;    }&#xD;&#xA;	&#xD;&#xA;    document.getElementsByClassName('btn-purchase')[0].addEventListener("click", purchaseClicked);&#xD;&#xA;    }&#xD;&#xA;    function purchaseClicked() {	&#xD;&#xA;	if (document.getElementsByClassName('cart-items')[0].hasChildNodes){&#xD;&#xA;		alert('Thanks!')&#xD;&#xA;		window.open("payment.html","_self");&#xD;&#xA;	}	&#xD;&#xA;	else {&#xD;&#xA;		alert("There is nothing in your cart!");&#xD;&#xA;		}&#xD;&#xA;		&#xD;&#xA;    }    //HTML CODE     &#xD;&#xA;    <section class="container content-section">&#xD;&#xA;            <h2 class="heading">CART</h2>&#xD;&#xA;            <div class="cart-row">&#xD;&#xA;                <span class="cart-item cart-header cart-column">ITEM</span>&#xD;&#xA;                <span class="cart-price cart-header cart-column">PRICE</span>&#xD;&#xA;                <span class="cart-quantity cart-header cart-column">QUANTITY</span>&#xD;&#xA;            </div>&#xD;&#xA;            <div class="cart-items">&#xD;&#xA;            </div>&#xD;&#xA;            <div class="cart-total">&#xD;&#xA;                <strong class="cart-total-title">Total</strong>&#xD;&#xA;                <span class="cart-total-price">$0</span>&#xD;&#xA;            </div>&#xD;&#xA;			<button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>&#xD;&#xA;        </section>	