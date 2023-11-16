"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  if (d < 0) {
  arr.push();
  } else if (d === 0) {
  arr.push(-b/(2*a));
  } else if (d > 0) {
  arr.push((-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

 let n = countMonths;
 let p = parseFloat(percent/100)/12;
 let s = amount - contribution;
 let payment = s * (p + (p / ((Math.pow((1 + p), n) - 1))));
 let allPayment = payment*n;
 allPayment = allPayment.toFixed(2);
 return +allPayment;
}