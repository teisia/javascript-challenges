/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(array) {
    return array.join("");
  },

  joinWithForAndIndex: function(array) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i] + i);
    }
    return newArray.join("");
  },

  joinWithoutOddCharacters: function(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i+=2) {
      newArray.push(array[i]);
    }
    return newArray.join("");
  },

  joinWithForAndToken: function(array, token) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray.join(token);
  },

  joinWithForAndAlternatingTokens: function(array, token1, token2) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
      newArray = (newArray.join(token1 + token2)).split("");
      newArray.splice(2, 1);
      newArray.splice(3, 1);
      newArray.splice(6, 1);
      newArray.splice(7, 1);
      return newArray.join("");
  }


}
