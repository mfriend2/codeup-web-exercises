"use strict"

console.log("Hello from External JavaScript");
alert("Welcome to my Website!");
let color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");

let littleMermaid = prompt("How long will you be renting The Little Mermaid for?");
let brotherBear = prompt("How long will you be renting Brother Bear for?");
let hercules = prompt("How long will you be renting Hercules for?");
let pricePerDay = 3
let priceOfRental = alert((pricePerDay * littleMermaid) + (pricePerDay * brotherBear) + (pricePerDay * hercules));

