"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  let rootOne = -b / (2 * a);
  let rootTwo = (-b + Math.sqrt(d)) / (2 * a);
  let rootThree = (-b - Math.sqrt(d)) / (2 * a);

  if (d === 0) {
    arr = [rootOne];
  } else if (d > 0) {
    arr = [rootTwo, rootThree];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  }

  let bid = percent / 100;
  let bidMonths = bid / 12;
  let bodyLoan = amount - contribution;
  let payment =
    bodyLoan * (bidMonths + bidMonths / ((1 + bidMonths) ** countMonths - 1));
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);
}
