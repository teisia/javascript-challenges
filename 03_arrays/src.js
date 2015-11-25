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
  },
  first_n: function(array, n) {
    if (array == '') {
      return array;
    } else if (array < n) {
      return array;
      } else {
          return array.slice(0, n);
        }
      },
  last_n: function(array, n) {
    if (array == '') {
      return array;
    } else if (array < n) {
      return array;
    } else {
      return array.slice(-n);
    }
  },
  drop: function(array, n) {
    if (array != '') {
    return array.splice(-n, n);
  //} else if (array.splice(-n, n) < array.length) {
    //return [''];
  //} else {
    //return array;
  //}
//}

}
