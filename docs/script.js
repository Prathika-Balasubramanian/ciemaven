
let totalAmount = 0;

function addItem(name, price) {
    let li = document.createElement("li");
    li.innerText = name + " - ₹" + price;
    document.getElementById("cartList").appendChild(li);

    totalAmount += price;
    document.getElementById("total").innerText = totalAmount;
}

function order() {
    if (totalAmount === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order Placed! Total: ₹" + totalAmount);
        document.getElementById("cartList").innerHTML = "";
        totalAmount = 0;
        document.getElementById("total").innerText = 0;
    }
}
