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

let googlePay = prompt("What is your hourly rate at Google?");
let amazonPay = prompt("What is your hourly rate at Amazon");
let facebookPay = prompt("What is your hourly rate at Facebook");
let googleHours = prompt("How many hours did you work at Google this week?");
let amazonHours = prompt("How many hours did you work at Amazon this week?");
let facebookHours = prompt("How many hours did you work at Facebook this week?");
let totalOfPaycheck = alert((googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours));

let full = confirm("Is this class full?");
let conflict = confirm("Does the class schedule conflict with your schedule?");
let enroll = alert(!full && !conflict);

let member = confirm("Is this customer a Premium Member?");
let amount = confirm("Are they purchasing 2 or more items?");
let expired = confirm("Is this offer expired?");
let apply = alert((member && !expired) || (amount && !expired));


