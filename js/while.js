"use strict";

(function () {

    // function numPyr() {
    //     let x;
    //     while(true) {
    //         x = 1;
    //         if (x % 2 !== 0) {
    //             x++;
    //         }
    //         console.log((x * 2).toString().repeat(x.length));
    //     }
    // }
    // numPyr();

    // for (let x = 1; x < 34; x++) {
    //
    //     let str = (x * 2).toString().repeat((x * 2).toString().length);
    //     console.log (str);
    // }

    // numPyr();

    // for (let x = 1; x < 10; x++) {
    //     let str = x.toString().repeat(x);
    //     console.log (str);
    // }


    const stopP = 65537;
    let startP = 2;
    while (startP < stopP) {
        console.log(startP);
        startP *= 2;
    }


    // Do While loop

    let cones = Math.floor(Math.random() * 51) + 50;
    let soldOut = cones === 0;

    do {
        let custBuyCones = Math.floor(Math.random() * 5) + 1;
        console.log("Customer wants to buy " + custBuyCones + " cone(s).");
        if (custBuyCones > cones) {
            console.log("Sorry I can't sell you " + custBuyCones + ". I only have " + cones + " left.");
            continue;
        }
        cones -= custBuyCones;
        console.log(custBuyCones + " sold! I have " + cones + " left.");
    } while (cones > soldOut);

        console.log("I'm all sold out!");


})()