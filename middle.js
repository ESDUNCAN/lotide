const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")
const assertEqual = require("./assertEqual")


const middle = function (array) {
  if (array.length <= 2) {
    return []
  }
  const middle = array.length / 2
  if (array.length % 2 !== 0) {
    return [
      array[Math.floor(middle)],
    ]
  } else {
    return [
      array[middle - 1],
      array[middle],
    ]
  }
}
console.log(middle([1])) // => []
console.log(middle([1, 2]))// => []
console.log(middle([1, 2, 3]))// => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

