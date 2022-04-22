"use strict";
(function () {
    function numIsOdd() {
        let userOddNum;
        while (true) {
            userOddNum = parseFloat(prompt("Enter an odd number 1-50."));
            if (userOddNum % 2 !== 0 && userOddNum >= 1 && userOddNum <= 50) {
                break;
            }
        }
        console.log("Number to skip is " + userOddNum);
        for (let x = 0; x < 50; x++) {
            if (x % 2 === 0) {
                continue;
            } else if (x === userOddNum) {
                console.log("Skipping this number: " + userOddNum);
            } else {
                console.log("Here is an odd number: " + x);
            }
        }
    }

    numIsOdd();


})()