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
    if (n > array.length) {
    return [];
  } else {
    return (array.splice(array.length-n, n));
    }
  },
  union: function(array1, array2) {
    if (array1 && array2 != []) {
    return array1.concat(array2);
  } else {
    return [];
    }
  },
  intersection: function(array1, array2) {
    var intersect = [];
    array1.forEach(function (value1) {
      array2.forEach(function (value2) {
        if (value1===value2) {
          intersect.push(value1);
        }
      })
    })
    return intersect;
    }

}
