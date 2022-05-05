const eqObjects = require("./eqObjects")


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log("they match!")
  } else {
    console.log("they don't match!")
  }
};

/*const x = {
  a: 'a',
  b: 'b',
  c: 'c'
}
const y = {
  a: 'a',
  b: 'b',
  c: 'c'
}
const z = {
  d: 'd',
  e: 'e',
  f: 'f'
}
const t = {
  a: 'q',
  b: 'v',
  c: 'w'
}

assertObjectsEqual(x, y);
assertObjectsEqual(x, z);
assertObjectsEqual(x, t);
*/