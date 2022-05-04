const eqArrays = require("./eqArrays")

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
};

let assertArraysEqual = function (arr1, arr2) {
  let equalCondition = false
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    equalCondition = eqArrays(arr1, arr2)
  } if (equalCondition === true) {
    console.log(`😃😃😃Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])) // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) // => false
console.log(assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true))
module.exports = assertArraysEqual