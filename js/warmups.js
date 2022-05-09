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

function sumOfArr (arr) {
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
        sum += arr[x]
    }
    return sum;
}

console.log(sumOfArr([1, 2, 3, 4, 5]));

let product1 = {
    name: 'Hammer',
    priceInCents: 400,
    description: 'It is a a hammer.',
    inventory: 25034
}
let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}

function returnProductEssentialDetails (object) {
    let product;
    return product = {
        name: object.name,
        priceInCents: object.priceInCents,
    };
}

console.log(returnProductEssentialDetails(product1));
console.log(returnProductEssentialDetails(product2));
console.log(returnProductEssentialDetails(product3));

function returnAllProductEssentialDetails (arrObj) {
    for(let x = 0; x < arrObj.length; x++) {
        console.log("The name of product #" + (x + 1) + " is " + arrObj[x].name + " price of this product in cents is " + arrObj[x].priceInCents + ".");
    }
}
returnAllProductEssentialDetails([product1, product2, product3]);

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function tallestObj (arr) {
        let tallest = {heightInMM: 0};
        for (let hamster of arr) {
            if (hamster.heightInMM > tallest.heightInMM) {
                tallest = hamster;
            }
        }
    return tallest;
}

console.log(tallestObj(hamsters));