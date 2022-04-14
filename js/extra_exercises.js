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
})();