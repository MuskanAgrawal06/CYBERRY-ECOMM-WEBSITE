function cardtopay()
{
    document.getElementById('onandoff').style.display="block";
    
}
function UPI()
{
    document.getElementById('onandoff').innerHTML=' <input type="text" placeholder="Enter UPI ID " min="1" id="zip" required><br>';
    document.getElementById('onandoff').style.display="block";

}

function placeorder()
{
    alert("your order has been placed successfully.");
    window.location.replace("main.html");
    

}
