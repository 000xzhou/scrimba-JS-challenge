import shoppingCart from "./data.js";

/*  
    Use reduce() to total the groceries. 
    Then find a method that will round the total to 2 decimal places.
*/

function total(arr) {
    // console.log(arr)
    return arr.reduce((acc, sum) => acc + sum.price, 0).toFixed(2)
}

console.log(total(shoppingCart));
