/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
    peak: function() {
      return "/\\"
    },

    valley: function() {
      return "___"
    },

    peaks: function(num) {
      peak = "/\\";
      multPeaks = "";
      for (var i = 0; i <= num; i++) {
        multPeaks = peak + peak + peak
      }
      return multPeaks
    },

    valleys: function(num) {
      valley = "___";
      multValleys = "";
      for (var i = 0; i <= num; i++) {
        multValleys = valley + valley
      }
      return multValleys
    },

    peaksAndValleys: function (num1, num2) {
      peak = "/\\";
      valley = "___";
      both = "";
      for (var i = 0; i <= num1; i++) {
      peaks = peak + peak;
    }
      for (var j = 0; j <= num2; j++) {
      both = peaks + valley
      }
      return both
    }
}
