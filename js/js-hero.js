"use strict";
(function () {

    // Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.
    // LOOPS AND ARRAYS EXERCISE
    // Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2.

    function mean(array) {
        let sum = 0;
        for (let x = 0; x < array.length; x++) {
            sum += array[x] ;
        }
        return sum / array.length;
    }

    // Write a function factorial that calculates the factorial of a positive integer.
    // FACTORIAL FOR LOOP EXERCISE
    // Example: factorial(3) should return 6.

    let total = 1;
    function factorial(num) {
        let r = []
        for (let i = 0; i < num; i++) {
            total *= num - i;
            r.push([i + 1]);
        }
        r = r.join(' * ');
        return total;
    }

    // Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.
    // FOR LOOP EXERCISE
    // Example: addTo(3) should return 1+2+3 = 6.

    let sum = 0;
    function addTo (number) {
        for (let x = 0; x <= number; x++) {
            sum += x;
        }
        return sum;
    }

    // Write a function spaces that takes a natural number n and returns a string of n spaces.
    // WHILE LOOP EXERCISE
    // Example: spaces(1) should return ' '.

    function spaces (num) {
        let n = ""
        while (n.length < num) {
            n += " ";
        }
        return n;
    }

    // Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.
    // DO WHILE LOOP EXERCISE
    // Example: lcm(4, 6) should return 12.

    function lcm (num1, num2) {
        let theLcm = 0;
        let remainder1;
        let remainder2;
        do {
            theLcm++;
            remainder1 = theLcm % num1;
            remainder2 = theLcm % num2;
        }while (remainder1 !== 0 || remainder2 !== 0)
        return theLcm;
    }

})()