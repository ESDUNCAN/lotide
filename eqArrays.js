function eqArrays(arr1, arr2) {
  let answer = true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      answer = false
    }
  } return answer
}
//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

module.exports = eqArrays