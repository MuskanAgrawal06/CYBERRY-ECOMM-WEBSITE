
// var totalAmount = 0;
// var x = 0;

// function turnon() {
//   if (x == 0) {
//     document.getElementById('noofitems').innerHTML = "Total items: " + x + '<br>' + 'Your cart is empty';
//   }

//   var cart = document.getElementById("shopping-cart");
//   if (cart.style.display === "block") {
//     cart.style.display = "none";
//   } else {
//     cart.style.display = "block";
//   }

//   document.addEventListener("click", remove);
// }

// function addtocart(itemName, itemPrice) {
//   x = x + 1;
//   if (x > 0) {
//     document.getElementById('noofitems').innerHTML = "Total items: " + x;
//   }

//   const shoppingBox = document.getElementById('shopping-box');
//   shoppingBox.style.height = '290px';
//   shoppingBox.style.overflow = 'auto';

//   shoppingBox.innerHTML +=
//     '<li>' +
//     '<div class="cart-item">' +
//     '<h4 class="cart-item-name">' + itemName + '</h4>' +
//     '<span class="cart-item-price">₹' + itemPrice + '</span>' +
//     '<br>' +
//     '<span class="cart-item-qty">Qty: <input type="number" value="1" min="1"></span>' +
//     '<button onclick="remove_item(this, ' + itemPrice + ');">Remove</button>' +
//     '</div>' +
//     '</li>';

//   const cartItems = shoppingBox.getElementsByClassName('cart-item');
//   const itemHeight = cartItems[0].offsetHeight;
//   const numItems = cartItems.length;
//   const newHeight = numItems * (itemHeight * 2) + 80;
//   shoppingBox.style.maxHeight = newHeight + 'px';

//   totalAmount = totalAmount + Number(itemPrice);
//   document.getElementById('total').innerHTML = "Total: ₹" + totalAmount.toFixed(2);
// }

// function remove_item(item, itemPrice) {
//   x = x - 1;
//   var listItem = item.parentNode.parentNode;
//   listItem.parentNode.removeChild(listItem);

//   totalAmount = totalAmount - Number(itemPrice);
//   document.getElementById('total').innerHTML = "Total: ₹" + totalAmount.toFixed(2);

//   if (x == 0) {
//     document.getElementById('noofitems').innerHTML = "Total items: " + x + '<br>' + 'Your cart is empty';
//   } else if (x > 0) {
//     document.getElementById('noofitems').innerHTML = "Total items: " + x;
//   }

//   const shoppingBox = document.getElementById('shopping-box');
//   const cartItems = shoppingBox.getElementsByClassName('cart-item');
//   const itemHeight = cartItems[0].offsetHeight;
//   const numItems = cartItems.length;
//   const newHeight = numItems * (itemHeight) - 10;
//   shoppingBox.style.minHeight = newHeight + 'px';
// }


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



