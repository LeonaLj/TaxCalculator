function addTax(){
    var price = document.getElementById("price").value
    var taxedPrice = price * 1.25
    document.getElementById("taxedPrice").innerHTML = "Your PDV price is " + taxedPrice
}
