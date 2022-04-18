"use strict";
(function () {
    /*
    // Extra Variable Exercises
    // Counting the Number of Characters
        let name = prompt("What is your name");
        let stringCount = name.length;
        alert(name + " contains " + stringCount + " characters.");

    // Mad Lib
        let noun = prompt("Please enter a noun:");
        let verb = prompt("Please enter a verb:");
        let adjective = prompt("Please enter an adjective:");
        let adverb = prompt("Please enter an adverb:");
        alert("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + " " + " ? ");

    // Simple Math
        let roomLength = prompt("What is the length of your room in feet?");
        let roomWidth = prompt("What is the width of your room in feet?");
        let roomAreaFt = roomLength * roomWidth;
        let roomAreaMt = roomAreaFt * 0.09290304
        alert("Your room is " + roomLength + "ft" + " by " + roomWidth + "ft.");
        alert("The area of your room is " + roomAreaFt + "sq ft" + " or " + roomAreaMt.toFixed(2) + "sq mt.");

    // Pizza Party
        let pizzaPpl = prompt("How many people will be eating pizza?");
        let pizzaOrder = prompt("How many pizzas do you have?");
        let pizzaSlices = prompt("How many slices does each pizza have?");
        let pizzaPer = (pizzaOrder * pizzaSlices) / pizzaPpl
        let pizzaAte = alert("Each person should get " + pizzaPer.toFixed(0) + " slices of pizza.");
        let pizzaLeft = (pizzaOrder * pizzaSlices) / pizzaPer;
        alert("There should be " + pizzaLeft.toFixed(0) + " pizza slices leftover.");
    */

    // Extra Functions Exercises
    function isOdd(number) {
        return (number % 2) == 1;
    }

    console.log(isOdd(3));

    function isEven(number) {
        return (number % 2) == 0;
    }

    console.log(isEven(2));

    function identity(input) {
        return input;
    }

    console.log(identity("Hello User!"));

    function isFive(input) {
        return input == 5;
    }

    console.log(isFive(5));

    function addFive(number) {
        return number + 5;
    }

    console.log(addFive(4));

    function isMultipleOfFive(number) {
        return (number % 5) == 0
    }

    console.log(isMultipleOfFive(15));

    function isThree(number) {
        return number == 3;
    }

    console.log(isThree(3));

    function isMultipleOfThree(number) {
        return (number % 3) == 0;
    }

    console.log(isMultipleOfThree(9));

    function isMultipleOfThreeAndFive(number) {
        return (number % 3) + (number % 5) == 0;
    }

    console.log(isMultipleOfThreeAndFive(15));

    function isMultipleOf(target, n) {
        return (target % n) == 0;
    }

    console.log(isMultipleOf(63, 3));

    function isTrue(boolean) {
        return boolean === true;
    }

    console.log(isTrue(true));

    function isFalse(boolean) {
        return boolean === false;
    }

    console.log(isFalse(false));

    function isTruthy(input) {
        return input == true;
    }

    console.log(isTruthy(1));

    function isFalsy(input) {
        return input == false;
    }

    console.log(isFalsy(0));

    function isVowel(letter) {
        let vowels = ["a", "e", "i", "o", "u"];
        return vowels.indexOf(letter) != -1;
    }

    console.log(isVowel('a'));

    function isConsonant(letter) {
        let vowels = ["a", "e", "i", "o", "u"];
        return vowels.indexOf(letter) == -1;
    }

    console.log(isConsonant("c"));

    function isCapital(letter) {
        if (letter === letter.toUpperCase()) {
            return "Upper case";
        } else {
            return "Lower case";
        }
    }

    console.log(isCapital("A"));

    function isLowerCase(letter) {
        if (letter === letter.toLowerCase()) {
            return "Lower case";
        } else {
            return "Upper case";
        }
    }

    console.log(isLowerCase("a"));

    function hasLowerCase(string) {
        return /[a-z]/.test(string)
    }

    console.log(hasLowerCase("Hello"));

    function isSpace(letter) {
        return letter === " ";
    }

    console.log(isSpace(" "));

    function isZero(number) {
        return number === 0;
    }

    console.log(isZero(0));

    function lowerCase(string) {
        return string.toLowerCase();
    }

    console.log(lowerCase("Hello"));

    function double(num) {
        return num * 2;
    }

    console.log(double(3));

    function triple(num) {
        return num * 3;
    }

    console.log(triple(3));

    function quadruple(num) {
        return num * 4;
    }

    console.log(quadruple(3));

    function half(num) {
        return (num / 2).toFixed(2);
    }

    console.log(half(3));

    function subtract(a, b) {
        return a - b;
    }

    console.log(subtract(100, 50));

    function multiply(a, b) {
        return a * b;
    }

    console.log(multiply(100, 50));

    function divide(a, b) {
        return a / b;
    }

    console.log(divide(100, 50));

    function remainder(a, b) {
        return a % b;
    }

    console.log(remainder(100, 50));

   function modulo(a, b) {
       return a % b;
   }

    console.log(modulo(100, 50));

   function cube(num) {
       return num ** 3;
   }

    console.log(cube(3));

   function squareRoot(number) {
       return number ** .5;
   }

    console.log(squareRoot(36));
})();