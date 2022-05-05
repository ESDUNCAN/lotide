const eqObjects = require("./eqObjects")


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log("they match!")
  } else {
    console.log("they don't match!")
  }
};

