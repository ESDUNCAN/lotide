const eqArrays = function (arr1, arr2) {
  let answer = true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      answer = false
    }
  } return answer
}

module.exports = eqArrays