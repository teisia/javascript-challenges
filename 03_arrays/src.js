module.exports = {

  first: function(array) {
    return array[0];
  },
  last: function(array) {
    return array.pop();
  },
  empty: function(array) {
    if (array == '') {
      return true;
    } else {
      return false;
    }
  }

}
