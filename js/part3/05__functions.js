// Function, arrow function
/* 1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea' and returns a string like '"Making green tea"' when called with '"green tea"'. Store the result in a variable named 'teaOrder.*/

function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
    console.log(test);
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);


/* 2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function named 'confirmedOrder' that returns a message like '"Order confirmed for chai"'. Call 'confirmOrder' from within 'orderTea' and returns the result. */

function orderTea(teaType){
    function confirmedOrder(){
        return 'Order confirmed for chai';
    }
    return confirmedOrder()
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation);


/*3. Write an array function named 'calculateTotal' that takes two parameters: 'price' and quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'. */

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(499, 100);

console.log(totalCost);
