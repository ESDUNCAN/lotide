const middle = require('../middle')


middle([1]) // => []
middle([1, 2])// => []
middle([1, 2, 3])// => [2]

middle([1, 2, 3, 4])// => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]