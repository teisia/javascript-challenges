/*
  Do not use standard libraries (like Math) to complete this warm-up.
*/

module.exports = {
  maximum: function(array) {
    max = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  },

  minimum: function(array) {
    min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  },

  average: function(arrayOfNumbers) {
    var total = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
      total += arrayOfNumbers[i];
    }
    var avg = total / arrayOfNumbers.length
    return avg;
  },

  matrixRowMaximum: function(arrayOfArrays) {
    max1 = arrayOfArrays[0][0];
    max2 = arrayOfArrays[1][0];
    both = [];
    for (var j= 0; j < arrayOfArrays[1].length; j++) {
      if (arrayOfArrays[1][j] > max2) {
        max2 = arrayOfArrays[1][j];
      }
    for (var i = 0; i < arrayOfArrays[0].length; i++) {
        if (arrayOfArrays[0][i] > max1) {
          max1 = arrayOfArrays[0][i];
      }
    }
    }
    both.push(max1);
    both.push(max2);
    return both;
  },

  matrixRowMinimum: function(arrayOfArrays) {
  },

  matrixRowAverage: function(arrayOfArrays) {
  },

  sortedRowMatrix: function(arrayOfArrays) {
  },

  lengthOfWords: function(sentence) {
  }
}
