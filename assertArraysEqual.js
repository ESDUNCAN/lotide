const eqArrays = require('./eqArrays')


const assertArraysEqual = function (arr1, arr2) {
  let equalCondition = false
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    equalCondition = eqArrays(arr1, arr2)
  } if (equalCondition === true) {
    console.log(`😃😃😃Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

module.exports = assertArraysEqual