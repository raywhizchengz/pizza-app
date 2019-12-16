$(document).ready(function() {
    $("#placeOrder").submit(function(event) {
      
        var pizzaSizePrice = function getSize() {
        var pizzaSize = document.getElementById("Size").value;
        return parseInt(pizzaSize);
        };
  
        var pizzaCrustPrice = function getCrustType() {
            var pizzaCrust = document.getElementById("available-Crusts").value;
            return parseInt(pizzaCrust);
        };
    
        var pizzaToppingsPrice = function getToppings() {
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);
        };
    
        var pizzaQuantityPrice = function getQuantity() {
            var pizzaQuantity = document.getElementById("quantity").value;
            return parseInt(pizzaQuantity);
        };

        function UserOrder(size, crust, toppings, quantity) {
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newQuantity = quantity;
        }

        var inputForUserOrder = new UserOrder(
            pizzaSizePrice(),
            pizzaCrustPrice(),
            pizzaToppingsPrice(),
            pizzaQuantityPrice()
        );

        var totalPrice = (inputForUserOrder.newSize +
            inputForUserOrder.newCrust +
            inputForUserOrder.newToppings) *
            inputForUserOrder.newQuantity;

        alert(totalPrice);

        if (totalPrice > 0) {
            alert("Your order is = ksh" + totalPrice);
            var delivery = confirm(
            "For home delivery, an additional fee of 150 will be inccured. Would you like to proceed?"
            );
            if (delivery === true) {
                for (;;) {
                    var location = prompt(
                    "Select a location for delivery: "
                    );
                    if (location !== "") {
                    alert(
                        "Your order will be delivered here: " +
                        location +
                        ". Thank you! Order again soon"
                    );
        
                    break;
                    } else {
                    alert(
                        "Please enter a valid location to have your order delivered!"
                    );
                    }
                }
    
            
                alert(
                    "Your order is = ksh" +
                    totalPrice +
                    " + ksh100 delivery fee."
                );
                } else {
                alert(
                    "Thank you! Your order has been processed, pick it within 72hrs or order."
                );
                alert(
                    "Your total order is = ksh" + totalPrice
                );
                }
                $("#placeOrder").reset();
            } else {
                alert("Please fill in all the valid fields for an order");
            }
    
        event.preventDefault();
    });
  });