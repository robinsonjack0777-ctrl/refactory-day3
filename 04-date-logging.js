const saleDate = new Date();

let day   = String(saleDate.getDate()).padStart(2, '0');
let month = String(saleDate.getMonth() + 1).padStart(2, '0');
let year  = saleDate.getFullYear();

console.log("Sale on:", \( {day}/ \){month}/${year});
