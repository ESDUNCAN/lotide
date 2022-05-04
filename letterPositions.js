const assertArraysEqual = require("./assertArraysEqual")
const eqArrays = require("./eqArrays")



const letterPositions = function (sentence) {
  const results = {};
  let index = 0
  for (let key of sentence) {
    if (key === " ") {
      index += 1
    }
    else if (results[key] === undefined) {
      results[key] = [index]
    }
    else {
      results[key].push(index)
    }
    index += 1
  }
  return results;
}

console.log(letterPositions('lighthouse in the house'))
//console.log(assertArraysEqual(letterPositions("hello").e, [1]));
