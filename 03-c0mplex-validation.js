let dealerName = "Naka Motors";
let costUgx = 15000;

let isValid = dealerName.length >= 2 &&
              costUgx >= 10000 &&
              costUgx.toString().length === 5;

console.log("Is record valid?", isValid);
