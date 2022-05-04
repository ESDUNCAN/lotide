const assertEqual = require("./assertEqual")

// loop through the strings and return the genre 




let findKeyByValue = function (object, string) {
  for (let key in object) {
    if (object[key] === string) {
      return key
    }
  }
  return
}




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);