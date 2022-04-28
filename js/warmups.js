"use strict"

console.log("Yay! I completed the warm up!");

for (let x = 1; x < 101; x++){
    if (x % 3 === 0 &&  x % 5 === 0) {
        console.log("FizzBuzz");
    } else if ( x % 3 === 0) {
        console.log("Fizz");
    } else if (x % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(x);
    }
}

function retFirstLet(arr) {
    let firstLet = ''
    for (let str of arr) {
    firstLet += str.substring(0,1);
    }
    return firstLet;
}

console.log(retFirstLet(["mike","augh","nono"]));

function retInOrder(string) {
    let str = string.split('');
    let sortStr = str.sort();
    let newStr = sortStr.join('');
    return console.log(newStr)
}
retInOrder("mike");