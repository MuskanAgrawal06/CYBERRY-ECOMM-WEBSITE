var totalAmount = 0;
var itemCount = 0;

function turnon() {
  var cart = document.getElementById("shopping-cart");
  if (cart.style.display === "block") {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
}

function updateTotal() {
  totalAmount = 0;
  itemCount = 0;
  var cartItems = document.querySelectorAll('.cart-item');
  for (var i = 0; i < cartItems.length; i++) {
    var itemPrice = parseFloat(cartItems[i].querySelector('.cart-item-price').textContent.slice(1));
    var itemQty = parseInt(cartItems[i].querySelector('.cart-item-qty input').value);
    totalAmount += itemPrice * itemQty;
    itemCount += itemQty;
  }
  document.getElementById('total').innerHTML = "Total: ₹" + totalAmount.toFixed(2);
  document.getElementById('noofitems').innerHTML = "Total items: " + itemCount;
}

function addtocart(itemName, itemPrice) {

  alert("This item has been added to the cart.")

  var shoppingBox = document.getElementById('shopping-box');
  shoppingBox.style.height = '130px';
  shoppingBox.style.overflow = 'auto';

  var itemHtml = 
    '<li>' +
      '<div class="cart-item">' +
        '<h4 class="cart-item-name">' + itemName + '</h4>' +
        '<span class="cart-item-price">₹' + itemPrice.toFixed(2) + '</span>' +
        '<br>' +
        '<span class="cart-item-qty">Qty: <input type="number" value="1" min="1" onchange="updateTotal()"></span>' +
        '<button onclick="remove_item(this); updateTotal()">Remove</button>' +
      '</div>' +
    '</li>';

  shoppingBox.innerHTML += itemHtml;
  updateTotal();
}

function remove_item(item) {
  var listItem = item.parentNode.parentNode;
  listItem.parentNode.removeChild(listItem);
  updateTotal();
}




