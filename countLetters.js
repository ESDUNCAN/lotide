const assertEqual = require("./assertEqual")

const countLetters = function (letters) {
  const answer = {}
  for (const key of letters) {
    if (key !== " ") {
      if (answer[key]) {
        answer[key] += 1
      }
      else {
        answer[key] = 1
      }
    }
  } return answer
}


console.log(countLetters('Yolo'))



