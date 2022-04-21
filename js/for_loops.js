"use strict";

(function () {
    //  2

    function showMultiplicationTable(num) {
        for (let x = 1; num * x <= num * 10; x++) {
            console.log(num + " x " + x + " = " + (num * x))
        }
    }

    console.log(showMultiplicationTable(7));

    //  3

    for (let x = 1; x < 11; x++) {
        let rndNum = Math.floor(Math.random() * 181) + 20;
        if (rndNum % 2 === 0) {
            console.log(rndNum + " is even.");
        } else {
            console.log(rndNum + " is odd.");
        }
    }

    //  4

    for (let x = 1; x < 10; x++) {
        let str = x.toString().repeat(x);
        console.log (str);
    }

    //  5

    for (let x = 101; x > 1; x--) {
        if (x % 5 !== 0){
            continue;
        }
        console.log(x)
    }

}) ();
