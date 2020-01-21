	$("#total-cart").html("");
	$(".add-to-cart").click(function(event){
		event.preventDefault();
		var name = $(this).attr("data-name");
		var price = Number($(this).attr("data-price"));

		addItemToCart(name, price, 1);
		displayCart();
	});

	$("#clear-cart").click(function(){
		clearCart();
		displayCart();
	});

	function displayCart() {
		var cartArray = listCart();
		var output = "";
		var viewcart = "";
		for (var i in cartArray) {
			output += "<li>"
				+cartArray[i].name
				+" "+cartArray[i].count
				+" x "+cartArray[i].price
				+" = "+cartArray[i].total
				+" <button class='delete-item button-style' data-name='"
				+cartArray[i].name+"'>x</button>"
				+"</li>";
		}
		for (var i in cartArray) {
			viewcart += "<li>"
				+cartArray[i].name
				+" "+cartArray[i].count
				+" x "+cartArray[i].price
				+" = "+cartArray[i].total
				+"</li>";
		}
		$("#view-cart").html(viewcart);
		$("#view-total").html(totalCart());
		$("#show-cart").html(output);
		$("#total-cart").html(totalCart());
	}

	$("#show-cart").on("click", ".delete-item", function(event){
		var name = $(this).attr("data-name");
		removeItem(name);
		displayCart();
	});



	

	//** shopping cart **//
	var cart = [];
	var Item = function(name, price, count) {
		this.name = name
		this.price = price
		this.count = count
	}

	function addItemToCart(name, price, count) {
		for( var i in cart) {
			if (cart[i].name === name) {

				cart[i].count += count;
				saveCart();
				return;

			}
		}
		var item = new Item(name, price, count);
		cart.push(item);
		saveCart();
	}


	//Remove an item from cart
	function removeItem(name) {
		for (var i in cart) {
			if (cart[i].name === name) {
				cart[i].count --;
				if (cart[i].count === 0) {
					cart.splice(i, 1);
				}
			}
		}
		saveCart();
	}

	 //Remove all the items from cart
	 function removeAllItem(name) {
	 	for (var i in cart){
	 		if (cart[i].name === name) {
	 			cart.splice(i, 1);
	 			break;
	 		}
	 	}
	 	saveCart();
	 }

	console.log(cart.length);
	console.log(cart);

	removeAllItem("Bus");
	console.log(cart.length);
	console.log(cart);

	// clear cart
	function clearCart() {
		cart = []; 
		saveCart();
	}


	//count cart items
	function countCart() {
		var totalCount = 0;
		for (var i in cart)
		{
			totalCount += cart[i].count;
		}
		return totalCount;
	}


	//total cost of cart
	function totalCart() {
		var totalCost = 0;
		for (var i in cart) {
			totalCost += cart[i].price * cart[i].count;
		}
		return totalCost.toFixed(2);
	}


	//list cart
	function listCart() {
		var cartCopy = [];
		for (var i in cart) {
			var item = cart[i];
			var itemCopy = {};
			for (var p in item) {
				itemCopy[p] = item[p];
			}
			itemCopy.total = (item.price * item.count).toFixed(2);
			cartCopy.push(itemCopy);
		}
		return cartCopy;
	}

	//Save cart
	function saveCart() {
		localStorage.setItem("shoppingCart", JSON.stringify(cart));
	}

	// Load cart
	function loadCart() {
		cart = JSON.parse(localStorage.getItem("shoppingCart"));
	}
	loadCart();
	displayCart();

