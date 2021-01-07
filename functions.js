"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

 function sayHello(name) {
    return "Hello " + name;
 }


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

console.log(sayHello('Monica'));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

 let myName = "Monica L Cholico";

 console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(num) {
   return num % 2 === 0 ? true : false;
}

console.log(random);
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

 function calculateTip(bill, tipPercent) {
    bill = prompt('What is the total of you bill?');
    tipPercent = prompt('How much percentage you wanna tip?');
    let tipApplied =  bill * tipPercent;
    return 'Total of your tip is ' + tipApplied;
 }

 let resultCalc = calculateTip(300);
 console.log({resultCalc});

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

 function applyDiscount (price, discount) {
   let finalDiscount = price * discount;
   return price - finalDiscount;
 }

 console.log(applyDiscount(300, .40));


 function fibo(n) {
   let arr = [0, 1];
   for ( let i = 2; i < n + 1; i++) {
      console.log(arr);
      arr.push(arr[i - 2] + arr[i - 1])
           console.log(arr[i - 2]);
            console.log(arr[i -1]);
            console.log(arr[i]);
      }
      return arr;
 }


 console.log(fibo(10));

// function fib(n){
//    let arr = [0, 1];
//    for (let i = 2; i < n + 1; i++){
//      arr.push(arr[i - 2] + arr[i -1])
//      console.log(arr[i - 2]);
//      console.log(arr[i -1]);
//      console.log(arr[i]);
//    }
//   return arr[n]
//  }

//  const resfib = fib(10);
//  console.log({resfib});



function fib(n) {
   let myArr = [0, 1];
   for ( let i = 2; i < n + 1; i++) {
      myArr.push(myArr[i - 2] + myArr[i - 1])
   }
   return myArr;
}

console.log(fib(6));

function refibo(n) {
   let fiboarr = [0,1];
   for(let i = 2; i < n + 1; i++) {
      fiboarr.push(fiboarr[i - 2] + fiboarr[ i - 1]);
   }
   return fiboarr;
}

console.log(refibo(12));