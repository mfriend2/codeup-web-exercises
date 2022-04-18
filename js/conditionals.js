"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === "blue") {
//         return "Blue is the color of the ocean!";
//     } else if (color === "red") {
//         return "Red is the color of blood.";
//     } else if (color === "green") {
//         return "Green is the color of grass.";
//     } else if (color === "yellow") {
//         return "Yellow is the color of the sun.";
//     } else {
//         return "I don't know much about " + color + ".";
//     }
// }
//
// console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             return alert("Blue is the color of the ocean.");
//         case "red":
//             return alert("Red is the color of blood.");
//         case "yellow":
//             return alert("Yellow is the color of the sun.");
//         case "green":
//             return alert("Green is the color of grass.");
//         default:
//             return alert("I don't know much about " + color + ".");
//     }
// }

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

 // let favColor = prompt("What is your favorite color?").toLowerCase().trim();
 // analyzeColor(favColor);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNum, total) {
//     switch (luckyNum) {
//         case 0:
//             return total;
//         case 1:
//             return total - (total * .10);
//         case 2:
//             return total - (total * .25);
//         case 3:
//             return total - (total * .35);
//         case 4:
//             return total - (total * .50);
//         case 5:
//             return total - (total * 1);
//     }
// }
//
// console.log(calculateTotal(0, 87).toFixed(2));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("What was your bill total?");
// alert("Your lucky number was " + luckyNumber + "." + " Your total was " + "$" + totalBill + " before the discount was applied." + " Your final price after the discount is " + "$" + calculateTotal(luckyNumber, totalBill).toFixed(2));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//  function yourNum(num) {
//      let conNum = confirm("Click 'OK' if you would like to enter a number.");
//      let entNum = (conNum) ? prompt("Please enter a number.") : alert("Okay that's fine.");
//     if (typeof entNum !== isNaN()) {
//         let oddEven = ((parseFloat(entNum) % 2) === 0);
//         let numPlusHund = parseFloat(entNum) + 100;
//         let numNegOrPos = parseFloat(entNum) >= 0;
//         let text = '';
//         if (oddEven) {
//             alert(text += "It's even.");
//         } else {
//             alert(text += "It's odd.");
//         }
//         alert(text += " The number plus 100 is : " + numPlusHund + ".");
//         if (numNegOrPos) {
//             alert(text += " The number you entered is positive.");
//         } else {
//             alert(text += " The number you entered is negative.");
//         }
//     }
// }
// yourNum()

// let conNum = confirm("Click 'OK' if you would like to enter a number.");
// if (conNum == true) {
//     let entNum = prompt("Please enter a number.");
//     if(typeof entNum == "number" || !isNaN(entNum)) {
//         entNum = parseFloat(entNum);
//         if(entNum % 2 === 0) {
//             alert(entNum + " is even.");
//         } else {
//             alert(entNum + " is odd.");
//         }
//         alert(entNum + " plus 100 is " + (entNum + 100));
//         if (entNum >= 0) {
//             alert(entNum + " is positive.");
//         } else {
//             alert(entNum + " is negative.");
//         }
//     }
// }
