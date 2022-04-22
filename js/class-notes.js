"use strict";
(function () {

    //  HOW TO BUILD A NUMBER PYRAMID   \\

    // FIRST WAY
    /* for (let x = 1; x < 10; x++) {
         let str = x.toString().repeat(x);
         console.log(str);
     }   */

    // SECOND WAY
    /* function numPyr() {
         for (let y = 1; y < 10; y++){
             let str = "";
             for (let x = 1; x <= y; x++) {
                 str += y;
             }
             console.log(str);
         }
     }
     numPyr();   */

})();