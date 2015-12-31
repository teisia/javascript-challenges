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
    min1 = arrayOfArrays[0][0];
    min2 = arrayOfArrays[1][0];
    both = [];
    for (var j= 0; j < arrayOfArrays[1].length; j++) {
      if (arrayOfArrays[1][j] < min2) {
        min2 = arrayOfArrays[1][j];
      }
    for (var i = 0; i < arrayOfArrays[0].length; i++) {
        if (arrayOfArrays[0][i] < min1) {
          min1 = arrayOfArrays[0][i];
      }
    }
    }
    both.push(min1, min2);
    return both;
  },

  matrixRowAverage: function(arrayOfArrays) {
    var total1 = 0;
    var total2 = 0;
    var both = [];
    for (var i = 0; i < arrayOfArrays[0].length; i++) {
      total1 += arrayOfArrays[0][i];
    }
    var avg1 = total1 / arrayOfArrays[0].length

    for (var j = 0; j < arrayOfArrays[1].length; j++) {
      total2 += arrayOfArrays[1][j];
    }
    var avg2 = total2 / arrayOfArrays[1].length
    both.push(avg1, avg2);
    return both;
  },

  sortedRowMatrix: function(arrayOfArrays) {
    var all = [];
    var newArr1 = arrayOfArrays[0].sort();
    var newArr2 = arrayOfArrays[1].sort();
    all.push(newArr1, newArr2);
    return all;
  },

  lengthOfWords: function(sentence) {
    var newArr = [];
    var array = sentence.split(" ");
    for (var i = 0; i < array.length; i++) {
    newArr.push(array[i].length);
    }
    return newArr;
  }
}
